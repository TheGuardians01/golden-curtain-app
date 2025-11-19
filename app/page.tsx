"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Golden Curtain — TikTok-style main page with our own spin.
 * - Full-screen vertical feed with snap scrolling
 * - Autoplay/pause via IntersectionObserver
 * - Global mute toggle
 * - Right action rail (like/comment/share/profile)
 * - Left info panel (title, description, tag, music)
 * - "Impact Meter" unique to Golden Curtain
 * - Bottom nav similar to TikTok but fully on-brand
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
    src: "", // drop your mp4 path here, e.g. "/videos/mission.mp4"
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
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-50">
      {/* Top bar with emblem + sayings */}
      <header className="border-b border-zinc-800/70 bg-black/70 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Emblem placeholder (swap with your SVG/logo later) */}
            <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 shadow-[0_0_30px_rgba(250,204,21,0.9)] ring-2 ring-amber-300/70 overflow-hidden">
              <div className="absolute inset-[3px] rounded-full bg-black/80 flex items-center justify-center text-[11px] font-black tracking-[0.28em] text-amber-200">
                GC
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/90">
                The Golden Curtain
              </p>
              <p className="text-[10px] text-zinc-400">
                Guardians, not followers • Every swipe matters.
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-4 sm:flex">
            <p className="hidden text-[10px] text-zinc-500 md:block">
              Short-form stories • Long-term impact
            </p>
            <button
              onClick={() => setMuted((m) => !m)}
              className="rounded-full border border-amber-400/60 bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-amber-100 hover:bg-amber-400/10 active:translate-y-[1px]"
              aria-label="Toggle sound"
            >
              {muted ? "🔇 Sound Off" : "🔊 Sound On"}
            </button>
            <button className="rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500/90 to-yellow-400/80 px-4 py-1.5 text-[11px] font-semibold text-black shadow-[0_0_25px_rgba(250,204,21,0.85)] hover:brightness-110 active:translate-y-[1px]">
              Become A Guardian
            </button>
          </div>
        </div>
      </header>

      {/* Centered phone-like feed */}
      <section className="relative mx-auto max-w-[440px] sm:max-w-[520px] md:max-w-[640px]">
        {/* Curtain glows */}
        <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-48 bg-gradient-to-b from-amber-500/40 via-transparent to-transparent blur-3xl" />

        {/* Feed viewport */}
        <div
          ref={feedRef}
          className="relative mx-4 mt-4 h-[calc(100vh-90px)] overflow-y-auto rounded-[28px] border border-zinc-800/80 bg-black/70 shadow-[0_18px_45px_rgba(0,0,0,0.9)] snap-y snap-mandatory"
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
                className="relative h-[calc(100vh-90px)] snap-start rounded-[28px] overflow-hidden"
              >
                {/* Video layer */}
                {clip.src ? (
                  <video
                    ref={setVideoRef(clip.id)}
                    className="absolute inset-0 h-full w-full object-cover"
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
                    className="absolute inset-0 h-full w-full bg-gradient-to-b from-amber-500/40 via-zinc-900 to-black"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(0,0,0,0.9),_transparent_60%)]" />
                    {/* Subtle motion hint */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center text-[11px] text-amber-100/90">
                      Tap to play • Swipe to move
                    </div>
                  </div>
                )}

                {/* Vignette + border ring */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-zinc-800/50" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

                {/* Left info rail */}
                <div className="absolute left-0 bottom-0 p-4 sm:p-6 max-w-[75%]">
                  <p className="mb-1 inline-flex rounded-full border border-amber-400/40 bg-black/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-amber-200/90">
                    {clip.tag}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-semibold leading-tight drop-shadow">
                    {clip.title}
                  </h2>
                  <p className="mt-1 text-[13px] text-zinc-200/95 drop-shadow">
                    {clip.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-amber-100/90">
                    <span>♫</span>
                    <span className="truncate">{clip.music}</span>
                  </div>

                  {/* Impact meter — our unique mechanic */}
                  <div className="mt-3 w-56 max-w-full">
                    <div className="mb-1 flex items-center justify-between text-[10px] text-zinc-300/90">
                      <span>Impact Meter</span>
                      <span>{Math.round(impact * 100)}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full border border-amber-400/50 bg-black/60">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 shadow-[0_0_20px_rgba(250,204,21,0.75)]"
                        style={{ width: `${impact * 100}%` }}
                      />
                    </div>
                    <p className="mt-1 text-[10px] text-zinc-400">
                      Every view fuels micro‑grants & verified aid — not just
                      views for views’ sake.
                    </p>
                  </div>
                </div>

                {/* Right action rail */}
                <div className="absolute right-2 bottom-24 flex flex-col items-center gap-3 text-[11px]">
                  {/* Profile */}
                  <div className="flex flex-col items-center">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 ring-2 ring-amber-300/70 shadow-[0_0_20px_rgba(250,204,21,0.7)]" />
                    <span className="mt-1 text-[10px] text-zinc-200/90">
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
                  <span className="text-zinc-200">
                    {Intl.NumberFormat().format(likesCount[clip.id] ?? 0)}
                  </span>

                  {/* Comment */}
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]">
                    💬
                  </button>
                  <span className="text-zinc-200">
                    {Intl.NumberFormat().format(clip.comments)}
                  </span>

                  {/* Share */}
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]">
                    ⤴
                  </button>
                  <span className="text-zinc-200">
                    {Intl.NumberFormat().format(clip.shares)}
                  </span>

                  {/* Mute/Unmute */}
                  <button
                    onClick={() => setMuted((m) => !m)}
                    className="mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]"
                    aria-label="Toggle sound"
                  >
                    {muted ? "🔇" : "🔊"}
                  </button>
                </div>

                {/* Subtle swipe hint for first card */}
                {idx === 0 && (
                  <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 text-[11px] text-amber-200/90">
                    Swipe / scroll for the next Guardian.
                  </div>
                )}
              </article>
            );
          })}

          {/* End-of-feed teaser */}
          <div className="relative h-[320px] snap-start rounded-b-[28px] border-t border-zinc-800 bg-zinc-950/90 px-6 text-center text-xs text-zinc-400 grid place-items-center">
            <div className="space-y-2">
              <p>
                You&apos;re early. This prototype feed will soon feature real
                Guardians, real stories, and real impact.
              </p>
              <p className="text-[11px] text-amber-200/90">
                This isn&apos;t content. It&apos;s a living archive of courage.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom nav (TikTok-style, Golden Curtain skin) */}
        <nav className="pointer-events-auto mx-4 mt-2 grid grid-cols-5 rounded-2xl border border-zinc-800/80 bg-black/80 px-3 py-2 text-[11px] text-zinc-300 shadow-lg">
          <button className="grid place-items-center gap-1 rounded-xl px-2 py-1 hover:text-amber-100 hover:bg-amber-400/5">
            <span>🏠</span>
            <span>Home</span>
          </button>
          <button className="grid place-items-center gap-1 rounded-xl px-2 py-1 hover:text-amber-100 hover:bg-amber-400/5">
            <span>🔍</span>
            <span>Discover</span>
          </button>
          <button className="grid place-items-center gap-1 rounded-full px-3 py-1 font-semibold text-black bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.7)]">
            <span>＋</span>
            <span>Create</span>
          </button>
          <button className="grid place-items-center gap-1 rounded-xl px-2 py-1 hover:text-amber-100 hover:bg-amber-400/5">
            <span>📥</span>
            <span>Inbox</span>
          </button>
          <button className="grid place-items-center gap-1 rounded-xl px-2 py-1 hover:text-amber-100 hover:bg-amber-400/5">
            <span>👤</span>
            <span>Profile</span>
          </button>
        </nav>

        {/* Bottom slogan strip */}
        <div className="mx-4 mt-2 mb-4 rounded-xl border border-amber-400/30 bg-gradient-to-r from-black via-zinc-950 to-black px-4 py-2 text-[10px] text-zinc-300 flex items-center justify-between gap-2">
          <span className="uppercase tracking-[0.24em] text-amber-300/90">
            Guardians • Not Followers
          </span>
          <span className="text-[10px] text-zinc-400">
            Every swipe writes someone&apos;s comeback story.
          </span>
        </div>
      </section>
    </main>
  );
}