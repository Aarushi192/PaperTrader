import { useState } from "react";
import { stocks } from "../data/stocks";
import StockCard from "./StockCard";

/*
  MARKET PAGE (React version)
  ============================
  This is where watchlist.js's job moves to. Compare:

  OLD: `let watchlist = []` sitting at module scope, mutated directly by
  addToWatchlist/removeFromWatchlist, with app.js manually wiring a click
  listener and manually flipping aria-pressed on the DOM.

  NEW: `useState` gives us a value (watchlist) and a setter function
  (setWatchlist). Calling the setter is what tells React "something
  changed, re-render whoever cares about this." We never touch the DOM
  by hand — we just update the state, and every StockCard that reads
  `isWatchlisted` from it re-renders itself automatically.

  We use a Set instead of an array here (same watchlist.js logic,
  slightly nicer API) because `.has(symbol)` is a clean one-line check,
  and we're not appending duplicates by hand anymore.
*/
function MarketPage() {
  const [watchlist, setWatchlist] = useState(new Set());

  function toggleWatchlist(symbol) {
    setWatchlist((prev) => {
      // Never mutate state directly — always build a NEW Set/array/object.
      // React compares references to decide whether to re-render; mutating
      // the existing Set in place wouldn't reliably trigger that.
      const next = new Set(prev);
      if (next.has(symbol)) {
        next.delete(symbol);
      } else {
        next.add(symbol);
      }
      console.log("Watchlist:", [...next]); // same verification the doc asked for
      return next;
    });
  }

  return (
    <div className="page-wrap">
      <header className="market-header">
        <h1>Market</h1>
        <div className="search-field">
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search symbol or company" disabled />
        </div>
      </header>

      <div className="market-layout">
        {/* Filter sidebar — still static markup, no functionality yet,
            same as the vanilla version. That's a later phase. */}
        <aside className="filter-sidebar" aria-label="Filters">
          <div className="filter-group">
            <h2>Sector</h2>
            <div className="filter-checkbox-list">
              <label className="filter-checkbox">
                <input type="checkbox" /> Technology
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Healthcare
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Financials
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Energy
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Consumer Discretionary
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" /> Industrials
              </label>
            </div>
          </div>

          <div className="filter-group">
            <h2>Price range</h2>
            <div className="price-range-inputs">
              <input type="number" placeholder="Min" aria-label="Minimum price" />
              <span>&ndash;</span>
              <input type="number" placeholder="Max" aria-label="Maximum price" />
            </div>
            <input
              type="range"
              className="price-range-slider"
              min="0"
              max="1000"
              aria-label="Price range slider"
            />
          </div>

          <div className="filter-group">
            <h2>Sort by</h2>
            <select className="filter-select" disabled>
              <option>Market Cap</option>
              <option>Price</option>
              <option>% Change</option>
              <option>Name (A&ndash;Z)</option>
            </select>
          </div>
        </aside>

        <main>
          <div className="stock-grid">
            {stocks.map((stock) => (
              // `key` is required whenever you render a list in React —
              // it's how React tracks which rendered element corresponds
              // to which data item across re-renders, instead of just
              // guessing by position. Symbol is a perfect key: unique
              // and stable.
              <StockCard
                key={stock.symbol}
                stock={stock}
                isWatchlisted={watchlist.has(stock.symbol)}
                onToggleWatchlist={toggleWatchlist}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MarketPage;
