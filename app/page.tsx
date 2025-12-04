"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ClipCard from "./components/ClipCard";
import GamesPlaceholder from "./components/GamesPlaceholder";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import { Clip, FeedTab, FeedTabDefinition } from "@/lib/types";

/**
 * Golden Curtain — TikTok-style home feed with our own spin.
 *
 * This version adds support for multiple tabs (For You, Following, Guardians, Spotlight, Games)
 * so you can expand beyond a single feed. The current tab is tracked in state and the
 * content is conditionally rendered based on the selected tab. When the "Games" tab is
 * selected, a placeholder message is shown. You can replace this with your live games
 * implementation later. "Spotlight" clips are filtered from the mock data based on
 * arbitrary criteria (e.g. number of likes) to demonstrate how you might highlight
 * top-performing content.
 */

// Demo clip data. Replace with real API calls when available.
const mockClips: Clip[] = [
  {
    id: 1,
    tag: "Origin Story",
    title: "What is The Golden Curtain?",
    description:
      "A living, breathing stage where real people turn struggle into impact. No actors. No scripts. Just raw transformation.",
    author: "Golden Curtain",
    username: "@goldencurtain",
    music: "Golden Theme — V1",
    likes: 12400,
    comments: 876,
    shares: 1100,
    src: "",
    poster: "",
  },
  {
    id: 2,
    tag: "Real People • Not Influencers",
    title: "Every Guardian Starts As One Story",
    description:
      "One video. One decision. One moment where you choose to step out from behind the curtain and be seen.",
    author: "Jess • Guardian #001",
    username: "@jess",
    music: "Late Night Steps",
    likes: 9800,
    comments: 432,
    shares: 902,
    src: "",
    poster: "",
  },
  {
    id: 3,
    tag: "Impact Loop",
    title: "Views Don’t Just Entertain. They Rescue.",
    description:
      "Imagine a feed where every view fuels help for someone else. Not theory. Not someday. Built into the system.",
    author: "Ops Team",
    username: "@ops",
    music: "Warm Pulse",
    likes: 15300,
    comments: 1304,
    shares: 1204,
    src: "",
    poster: "",
  },
  {
    id: 4,
    tag: "Legacy • Evidence You Lived",
    title: "This Isn’t Content. It’s Proof You Were Here.",
    description:
      "We’re building a place where your kids, their kids, and strangers you’ll never meet can trace your courage in 4K.",
    author: "Founders",
    username: "@founders",
    music: "Amber Echo",
    likes: 20400,
    comments: 1640,
    shares: 2102,
    src: "",
    poster: "",
  },
];

const tabs: FeedTabDefinition[] = [
  { id: "forYou", label: "For You", icon: "🏠" },
  { id: "following", label: "Following", icon: "👥" },
  { id: "guardians", label: "Guardians", icon: "⭐" },
  { id: "spotlight", label: "Spotlight", icon: "🎬" },
  { id: "games", label: "Games", icon: "🎮" },
];

export default function HomePage() {
  // Audio and like state
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [likesCount, setLikesCount] = useState<Record<number, number>>(
    Object.fromEntries(mockClips.map((c) => [c.id, c.likes]))
  );

  // Current selected tab
  const [currentTab, setCurrentTab] = useState<FeedTab>("forYou");

  // Derived data for spotlight. Here we simply pick the most liked clips.
  const spotlightClips = mockClips.filter((c) => c.likes > 10000);

  // Determine which clips to render based on the selected tab
  const clipsToShow: Clip[] =
    currentTab === 'spotlight'
      ? spotlightClips
      : currentTab === 'games'
      ? []
      : mockClips;

  // Refs for feed and videos
  const feedRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement | null>>(new Map());

  const setVideoRef = useCallback(
    (id: number) => (el: HTMLVideoElement | null) => {
      if (el) {
        videoRefs.current.set(id, el);
        el.muted = muted;
      } else {
        videoRefs.current.delete(id);
      }
    },
    [muted]
  );

  // Autoplay the clip that's most in view; pause others.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );

    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keep mute state synced to all videos
  useEffect(() => {
    videoRefs.current.forEach((el) => {
      if (el) el.muted = muted;
    });
  }, [muted]);

  // Keyboard navigation (up/down) for desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!feedRef.current) return;
      const delta = feedRef.current.clientHeight;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        feedRef.current.scrollBy({ top: delta, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        feedRef.current.scrollBy({ top: -delta, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const nextLiked = !prev[id];
      setLikesCount((lc) => ({
        ...lc,
        [id]: (lc[id] ?? 0) + (nextLiked ? 1 : -1),
      }));
      return { ...prev, [id]: nextLiked };
    });
  };

  const togglePlay = (id: number) => {
    const vid = videoRefs.current.get(id);
    if (!vid) return;
    if (vid.paused) vid.play().catch(() => {});
    else vid.pause();
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-zinc-50">
      <TopNav
        tabs={tabs}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        muted={muted}
        onToggleMute={() => setMuted((m) => !m)}
      />

      {/* Main content: left nav + feed like TikTok web */}
      <div className="flex h-[calc(100vh-56px)] w-full">
        <SideNav tabs={tabs} currentTab={currentTab} onSelectTab={setCurrentTab} />

        {/* Feed or games placeholder */}
        <section className="relative flex-1 bg-black">
          <div
            ref={feedRef}
            className="flex h-full w-full snap-y snap-mandatory flex-col overflow-y-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {currentTab === 'games' ? (
              <GamesPlaceholder />
            ) : (
              clipsToShow.map((clip, idx) => {
                const currentLikes = likesCount[clip.id] ?? clip.likes;
                const impact = Math.min(1, (currentLikes + clip.shares) / 25000);
                return (
                  <ClipCard
                    key={clip.id}
                    clip={clip}
                    index={idx}
                    liked={!!liked[clip.id]}
                    likesCount={currentLikes}
                    muted={muted}
                    impact={impact}
                    showSwipeHint={idx === 0 && currentTab !== 'games'}
                    onToggleLike={toggleLike}
                    onTogglePlay={togglePlay}
                    onToggleSound={() => setMuted((m) => !m)}
                    setVideoRef={setVideoRef(clip.id)}
                  />
                );
              })
            )}

            {/* End-of-feed footer */}
            {currentTab !== 'games' && (
              <div className="flex h-40 w-full items-center justify-center border-t border-zinc-900 bg-zinc-950/95 px-4 text-center text-[12px] text-zinc-400">
                You're early. This prototype feed will soon feature real Guardians, real stories, and real impact.
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
