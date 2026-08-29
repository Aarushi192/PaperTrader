/*
  FORMAT UTILS
  ============
  Same three functions from the old render.js — unchanged logic, just
  moved here because in React, formatting is a plain data transformation,
  not something tied to building an HTML string anymore.
*/

export function getTrend(change) {
  if (change > 0) return "positive";
  if (change < 0) return "negative";
  return "neutral";
}

export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatChange(change) {
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}
