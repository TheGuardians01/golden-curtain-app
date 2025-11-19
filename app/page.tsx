 "use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Golden Curtain — TikTok-style home feed with our own spin.
 * - Full-screen vertical feed with snap scrolling
 * - Autoplay/pause via IntersectionObserver
 * - Global mute toggle
 * - Top nav similar to TikTok web (logo, tabs, search, actions)
 * - Right action rail (like/comment/share/profile)
 * - Left info panel (title, description, tag, music)
 * - "Impact Meter" unique to Golden Curtain
 */

type Clip = {
  id: number;
  tag: string;
  title: string;
  description: string;
  author: string;
  username: string;
  music: string;
  likes: number;
  comments: number;
  shares: number;
  src?: string; // optional demo video
  poster?: string; // optional poster
};

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

export default function HomePage() {
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [likesCount, setLikesCount] = useState<Record<number, number>>(
    Object.fromEntries(mockClips.map((c) => [c.id, c.likes]))
  );

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
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        feedRef.current.scrollBy({ top: delta, behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        feedRef.current.scrollBy({ top: -delta, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
      {/* Top nav — TikTok style */}
      <header className="flex h-14 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-4 text-sm">
        {/* Left: logo + brand */}
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 shadow-[0_0_18px_rgba(250,204,21,0.8)]">
            <span className="text-[9px] font-black tracking-[0.18em] text-black">
              GC
            </span>
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="text-[11px] font-semibold text-zinc-100">
              The Golden Curtain
            </p>
            <p className="text-[10px] text-zinc-400">
              Guardians · Not Followers
            </p>
          </div>
        </div>

        {/* Center: For You / Following tabs */}
        <div className="hidden items-center gap-4 sm:flex">
          <button className="text-[13px] font-semibold text-zinc-50">
            For You
          </button>
          <button className="text-[13px] text-zinc-400 hover:text-zinc-100">
            Following
          </button>
        </div>

        {/* Right: search + actions */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[11px] text-zinc-300 sm:flex">
            <span className="text-zinc-500">🔍</span>
            <span className="text-[11px] text-zinc-400">
              Search Guardians, stories, missions...
            </span>
          </div>
          <button
            onClick={() => setMuted((m) => !m)}
            className="hidden rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[11px] text-zinc-200 hover:border-amber-400/80 hover:text-amber-100 sm:block"
          >
            {muted ? "🔇 Sound Off" : "🔊 Sound On"}
          </button>
          <button className="hidden items-center gap-1 rounded-md bg-amber-400 px-3 py-1.5 text-[11px] font-semibold text-black shadow-[0_0_18px_rgba(250,204,21,0.7)] hover:brightness-110 sm:flex">
            ⊕ Upload
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[12px]">
            J
          </div>
        </div>
      </header>

      {/* Main content: left nav + feed like TikTok web */}
      <div className="flex h-[calc(100vh-56px)] w-full">
        {/* Left sidebar (like TikTok nav) */}
        <aside className="hidden h-full w-52 flex-col border-r border-zinc-900 bg-zinc-950/95 px-3 py-4 text-[13px] text-zinc-200 md:flex">
          <button className="flex items-center gap-3 rounded-lg bg-zinc-900 px-2 py-2 font-semibold text-zinc-50">
            <span>🏠</span>
            <span>For You</span>
          </button>
          <button className="mt-1 flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-zinc-900">
            <span>👥</span>
            <span>Following</span>
          </button>
          <button className="mt-1 flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-zinc-900">
            <span>⭐</span>
            <span>Guardians</span>
          </button>
          <div className="mt-4 border-t border-zinc-900 pt-3 text-[11px] text-zinc-500">
            Built for real humans. Every swipe is a vote for someone&apos;s
            comeback story.
          </div>
        </aside>

        {/* Feed */}
        <section className="relative flex-1 bg-black">
          <div
            ref={feedRef}
            className="flex h-full w-full snap-y snap-mandatory flex-col overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {mockClips.map((clip, idx) => {
              const impact = Math.min(
                1,
                (likesCount[clip.id] + clip.shares) / 25000
              );
              return (
                <article
                  key={clip.id}
                  className="relative flex h-full w-full snap-start items-center justify-center bg-black"
                >
                  {/* Video column */}
                  <div className="relative flex h-[80vh] w-full max-w-3xl items-center justify-center md:h-[86vh]">
                    {/* Video or gradient placeholder */}
                    {clip.src ? (
                      <video
                        ref={setVideoRef(clip.id)}
                        className="h-full w-[60%] min-w-[260px] max-w-[420px] rounded-2xl bg-black object-cover md:w-[55%]"
                        playsInline
                        loop
                        muted
                        poster={clip.poster}
                        onClick={() => togglePlay(clip.id)}
                      >
                        <source src={clip.src} />
                      </video>
                    ) : (
                      <div
                        onClick={() => togglePlay(clip.id)}
                        className="relative h-full w-[60%] min-w-[260px] max-w-[420px] cursor-pointer rounded-2xl bg-gradient-to-b from-amber-500/40 via-zinc-900 to-black md:w-[55%]"
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(0,0,0,0.9),_transparent_60%)]" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center text-[11px] text-amber-100/90">
                          Tap to play · Scroll for more
                        </div>
                      </div>
                    )}

                    {/* Right rail */}
                    <div className="absolute right-2 flex h-full flex-col items-center justify-end gap-3 pb-6 pr-1 text-[11px] md:right-6">
                      {/* Profile */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 ring-2 ring-amber-300/70 shadow-[0_0_20px_rgba(250,204,21,0.7)]" />
                        <span className="max-w-[70px] truncate text-[10px] text-zinc-200/90">
                          {clip.username}
                        </span>
                      </div>

                      {/* Like */}
                      <button
                        onClick={() => toggleLike(clip.id)}
                        className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                          liked[clip.id]
                            ? "border-amber-300 bg-amber-400 text-black"
                            : "border-zinc-700/80 bg-black/70 text-amber-100"
                        } shadow hover:brightness-110 active:translate-y-[1px]`}
                        aria-pressed={!!liked[clip.id]}
                        aria-label="Like"
                      >
                        ❤
                      </button>
                      <span className="text-zinc-200 text-[10px]">
                        {Intl.NumberFormat().format(likesCount[clip.id] ?? 0)}
                      </span>

                      {/* Comment */}
                      <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]">
                        💬
                      </button>
                      <span className="text-zinc-200 text-[10px]">
                        {Intl.NumberFormat().format(clip.comments)}
                      </span>

                      {/* Share */}
                      <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]">
                        ⤴
                      </button>
                      <span className="text-zinc-200 text-[10px]">
                        {Intl.NumberFormat().format(clip.shares)}
                      </span>

                      {/* Sound toggle */}
                      <button
                        onClick={() => setMuted((m) => !m)}
                        className="mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]"
                        aria-label="Toggle sound"
                      >
                        {muted ? "🔇" : "🔊"}
                      </button>
                    </div>
                  </div>

                  {/* Caption + Impact panel underneath (like TikTok web) */}
                  <div className="absolute bottom-0 left-1/2 flex w-full max-w-3xl -translate-x-1/2 flex-col gap-1 px-4 pb-4 text-[13px] md:px-0">
                    <div className="flex items-center gap-2 text-[12px] font-semibold">
                      <span className="text-zinc-50">@{clip.author}</span>
                      <span className="rounded-full bg-zinc-800 px-2 py-[1px] text-[10px] uppercase tracking-[0.16em] text-amber-200/90">
                        {clip.tag}
                      </span>
                    </div>
                    <p className="max-w-2xl text-[13px] text-zinc-100">
                      {clip.title} — {clip.description}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-amber-100/90">
                      <span>♫</span>
                      <span className="truncate">{clip.music}</span>
                    </div>
                    {/* Impact meter */}
                    <div className="mt-2 max-w-md">
                      <div className="mb-1 flex items-center justify-between text-[10px] text-zinc-400">
                        <span>Impact Meter</span>
                        <span>{Math.round(impact * 100)}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full border border-amber-400/50 bg-black/60">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_20px_rgba(250,204,21,0.75)]"
                          style={{ width: `${impact * 100}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[10px] text-zinc-500">
                        Every view fuels micro-grants & verified aid — built
                        into the system, not bolted on.
                      </p>
                    </div>
                  </div>

                  {/* Swipe hint for first card */}
                  {idx === 0 && (
                    <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] text-amber-200/90">
                      Scroll to move through the Curtain.
                    </div>
                  )}
                </article>
              );
            })}

            {/* End-of-feed footer */}
            <div className="flex h-40 w-full items-center justify-center border-t border-zinc-900 bg-zinc-950/95 px-4 text-center text-[12px] text-zinc-400">
              You&apos;re early. This prototype feed will soon feature real
              Guardians, real stories, and real impact.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}