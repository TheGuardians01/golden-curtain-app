"use client";

import { Clip } from "@/lib/types";

type Props = {
  clip: Clip;
  index: number;
  liked: boolean;
  likesCount: number;
  muted: boolean;
  impact: number;
  showSwipeHint: boolean;
  onToggleLike: (id: number) => void;
  onTogglePlay: (id: number) => void;
  onToggleSound: () => void;
  setVideoRef: (el: HTMLVideoElement | null) => void;
};

export default function ClipCard({
  clip,
  index,
  liked,
  likesCount,
  muted,
  impact,
  showSwipeHint,
  onToggleLike,
  onTogglePlay,
  onToggleSound,
  setVideoRef,
}: Props) {
  const formattedLikes = Intl.NumberFormat().format(likesCount);
  const formattedComments = Intl.NumberFormat().format(clip.comments);
  const formattedShares = Intl.NumberFormat().format(clip.shares);

  return (
    <article className="relative flex h-full w-full snap-start items-center justify-center bg-black">
      {/* Video column */}
      <div className="relative flex h-[80vh] w-full max-w-3xl items-center justify-center md:h-[86vh]">
        {/* Video or gradient placeholder */}
        {clip.src ? (
          <video
            ref={setVideoRef}
            className="h-full w-[60%] min-w-[260px] max-w-[420px] rounded-2xl bg-black object-cover md:w-[55%]"
            playsInline
            loop
            muted
            poster={clip.poster}
            onClick={() => onTogglePlay(clip.id)}
          >
            <source src={clip.src} />
          </video>
        ) : (
          <div
            onClick={() => onTogglePlay(clip.id)}
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
            <span className="max-w-[70px] truncate text-[10px] text-zinc-200/90">{clip.username}</span>
          </div>

          {/* Like */}
          <button
            onClick={() => onToggleLike(clip.id)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border ${
              liked
                ? "border-amber-300 bg-amber-400 text-black"
                : "border-zinc-700/80 bg-black/70 text-amber-100"
            } shadow hover:brightness-110 active:translate-y-[1px]`}
            aria-pressed={liked}
            aria-label="Like"
          >
            ❤
          </button>
          <span className="text-zinc-200 text-[10px]">{formattedLikes}</span>

          {/* Comment */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]">
            💬
          </button>
          <span className="text-zinc-200 text-[10px]">{formattedComments}</span>

          {/* Share */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700/80 bg-black/70 text-amber-100 shadow hover:brightness-110 active:translate-y-[1px]">
            ⤴
          </button>
          <span className="text-zinc-200 text-[10px]">{formattedShares}</span>

          {/* Sound toggle */}
          <button
            onClick={onToggleSound}
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
            Every view fuels micro-grants & verified aid — built into the system, not bolted on.
          </p>
        </div>
      </div>

      {/* Swipe hint for first card */}
      {showSwipeHint && (
        <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-[11px] text-amber-200/90">
          Scroll to move through the Curtain.
        </div>
      )}
    </article>
  );
}
