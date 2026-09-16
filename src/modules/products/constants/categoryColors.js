export const CATEGORY_COLORS = {
  topwear: {
    bg: "var(--badge-topwear-bg)",
    text: "var(--badge-topwear-text)",
    border: "var(--badge-topwear-border)",
  },
  bottomwear: {
    bg: "var(--badge-bottomwear-bg)",
    text: "var(--badge-bottomwear-text)",
    border: "var(--badge-bottomwear-border)",
  },
  footwear: {
    bg: "var(--badge-footwear-bg)",
    text: "var(--badge-footwear-text)",
    border: "var(--badge-footwear-border)",
  },
};

const DIVERSE_PALETTE = [
  { bg: "rgba(99, 102, 241, 0.15)", text: "#a5b4fc", border: "rgba(99, 102, 241, 0.35)" },
  { bg: "rgba(16, 185, 129, 0.15)", text: "#6ee7b7", border: "rgba(16, 185, 129, 0.35)" },
  { bg: "rgba(245, 158, 11, 0.15)", text: "#fcd34d", border: "rgba(245, 158, 11, 0.35)" },
  { bg: "rgba(236, 72, 153, 0.15)", text: "#f472b6", border: "rgba(236, 72, 153, 0.35)" },
  { bg: "rgba(14, 165, 233, 0.15)", text: "#38bdf8", border: "rgba(14, 165, 233, 0.35)" },
  { bg: "rgba(168, 85, 247, 0.15)", text: "#c084fc", border: "rgba(168, 85, 247, 0.35)" },
];

export const getCategoryBadgeColors = (category) => {
  if (!category) {
    return { bg: "var(--surface2)", text: "var(--muted)" };
  }
  const normalized = category.toLowerCase().trim();
  if (CATEGORY_COLORS[normalized]) {
    return CATEGORY_COLORS[normalized];
  }
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  }
  return DIVERSE_PALETTE[hash % DIVERSE_PALETTE.length];
};
