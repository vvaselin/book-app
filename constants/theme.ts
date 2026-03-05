export const colors = {
  ink: '#1A1410',
  inkLight: '#4A3F35',
  inkMuted: '#8C7B6E',
  cream: '#F5F0E8',
  paper: '#FAF7F2',
  amber: '#C8853A',
  amberLight: '#E8A857',
  amberPale: '#F5E4C8',
  redAccent: '#C0392B',
  greenAccent: '#2E7D52',
  blueAccent: '#2C5F8A',
  border: '#D4C4B0',
} as const;

export const STATUS_COLORS: Record<string, string> = {
  reading: colors.amber,
  completed: colors.greenAccent,
  unread: colors.inkMuted,
  on_hold: colors.redAccent,
};

export const STATUS_LABELS: Record<string, string> = {
  reading: '読んでる',
  completed: '読了',
  unread: '読みたい',
  on_hold: '中断',
};

// Mock book cover gradient colors (fallback when no cover image)
export const COVER_GRADIENTS = [
  ['#2C3E50', '#4CA1AF'],
  ['#7B4F2C', '#C8853A'],
  ['#1A3A2A', '#2E7D52'],
  ['#3B1F4A', '#7B3F8A'],
  ['#4A1A1A', '#C0392B'],
  ['#1A2A4A', '#2C5F8A'],
] as const;
