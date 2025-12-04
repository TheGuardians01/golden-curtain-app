"use client";

import { FeedTab, FeedTabDefinition } from "@/lib/types";

type Props = {
  tabs: FeedTabDefinition[];
  currentTab: FeedTab;
  onSelectTab: (tab: FeedTab) => void;
  muted: boolean;
  onToggleMute: () => void;
};

export default function TopNav({ tabs, currentTab, onSelectTab, muted, onToggleMute }: Props) {
  return (
    <header className="flex h-14 w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-4 text-sm">
      {/* Left: logo + brand */}
      <div className="flex items-center gap-2">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 shadow-[0_0_18px_rgba(250,204,21,0.8)]">
          <span className="text-[9px] font-black tracking-[0.18em] text-black">GC</span>
        </div>
        <div className="hidden leading-tight sm:block">
          <p className="text-[11px] font-semibold text-zinc-100">The Golden Curtain</p>
          <p className="text-[10px] text-zinc-400">Guardians · Not Followers</p>
        </div>
      </div>

      {/* Center: tabs — dynamically generated */}
      <div className="hidden items-center gap-4 sm:flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`text-[13px] font-semibold ${
              currentTab === tab.id ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right: search + actions */}
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[11px] text-zinc-300 sm:flex">
          <span className="text-zinc-500">🔍</span>
          <span className="text-[11px] text-zinc-400">Search Guardians, stories, missions...</span>
        </div>
        <button
          onClick={onToggleMute}
          className="hidden rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-[11px] text-zinc-200 hover:border-amber-400/80 hover:text-amber-100 sm:block"
        >
          {muted ? "🔇 Sound Off" : "🔊 Sound On"}
        </button>
        <button className="hidden items-center gap-1 rounded-md bg-amber-400 px-3 py-1.5 text-[11px] font-semibold text-black shadow-[0_0_18px_rgba(250,204,21,0.7)] hover:brightness-110 sm:flex">
          ⊕ Upload
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[12px]">J</div>
      </div>
    </header>
  );
}
