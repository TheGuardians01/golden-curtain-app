// Shared domain types for The Golden Curtain.
// These are intentionally lightweight and can evolve with real data stores.

export interface User {
  id: string;
  displayName: string;
  username: string;
  email?: string;
  avatarUrl?: string;
  goalId?: string;
  guardian?: boolean;
}

export interface Guardian extends User {
  guardian: true;
  guardianSince?: string;
  focusAreas?: string[];
}

export interface Goal {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  category?: string;
  targetAmountUsd: number;
  currentAmountUsd: number;
  mediaUrl?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  monthlyPriceUsd: number;
  donationCreditsPercent: number; // portion of subscription turned into spendable credits
  fairnessPoolPercent: number; // portion sent to the fairness pool/business split
  perks?: string[];
}

export interface Wallet {
  userId: string;
  creditsAvailable: number; // spendable credits
  creditsReserved: number; // earmarked for weekly mandatory donations
  creditsReceived: number; // donations and fairness receipts
  weeklyDonationRequirementUsd: number; // typically $5
  lastDonationAt?: string;
}

export type DonationSource = "manual" | "auto" | "fairness";

export interface Donation {
  id: string;
  fromUserId: string;
  toUserId: string;
  goalId: string;
  amountCredits: number;
  source: DonationSource;
  createdAt: string;
  message?: string;
}

export interface FairnessPoolEntry {
  userId: string;
  position: number;
  lastPayoutAt?: string;
}

export type GameEventStatus = "upcoming" | "live" | "completed";

export interface GameContestant {
  userId: string;
  displayName: string;
  totalDonationsCredits: number;
}

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  startTime: string;
  hostUserId: string;
  status: GameEventStatus;
  contestants: GameContestant[];
  streamUrl?: string;
}

export interface Clip {
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
  src?: string;
  poster?: string;
}

export type FeedTab = "forYou" | "following" | "guardians" | "spotlight" | "games";

export interface FeedTabDefinition {
  id: FeedTab;
  label: string;
  icon: string;
}
