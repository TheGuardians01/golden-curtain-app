"use client";

import { FeedTab, FeedTabDefinition } from "@/lib/types";

type Props = {
  tabs: FeedTabDefinition[];
  currentTab: FeedTab;
  onSelectTab: (tab: FeedTab) => void;
};

export default function SideNav({ tabs, currentTab, onSelectTab }: Props) {
  return (
    <aside className="hidden h-full w-52 flex-col border-r border-zinc-900 bg-zinc-950/95 px-3 py-4 text-[13px] text-zinc-200 md:flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelectTab(tab.id)}
          className={`flex items-center gap-3 rounded-lg px-2 py-2 ${
            currentTab === tab.id ? "bg-zinc-900 text-zinc-50 font-semibold" : "hover:bg-zinc-900"
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
      <div className="mt-4 border-t border-zinc-900 pt-3 text-[11px] text-zinc-500">
        Built for real humans. Every swipe is a vote for someone's comeback story.
      </div>
    </aside>
  );
}
