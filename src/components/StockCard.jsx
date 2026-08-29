import { getTrend, formatPrice, formatChange } from "../utils/format";

/*
  STOCK CARD (React version)
  ===========================
  Compare this to the old render.js template literal — same exact
  markup, same class names, same data-trend/data-symbol attributes.
  The difference is what happens when data changes:

  OLD (vanilla): you had to remember to call renderStockCards() again
  to rebuild the HTML string and shove it back into the DOM.

  NEW (React): this component just describes "what a card looks like
  given a stock and whether it's watchlisted." React itself decides
  when to re-run this function and update only what actually changed
  in the real DOM. You never call innerHTML again.

  Props:
    stock            - { symbol, name, price, change }
    isWatchlisted    - boolean, whether this symbol is in the watchlist
    onToggleWatchlist - function(symbol) called when the star is clicked
*/
function StockCard({ stock, isWatchlisted, onToggleWatchlist }) {
  const trend = getTrend(stock.change);
  const priceFormatted = formatPrice(stock.price);
  const changeFormatted = formatChange(stock.change);

  return (
    <article className="stock-card" data-trend={trend} data-symbol={stock.symbol}>
      {/* Note: data-trend and data-symbol keep their hyphenated HTML
          names in JSX — only DOM PROPERTIES like class/for get renamed
          (to className/htmlFor). data-* and aria-* attributes pass through as-is. */}
      <button
        className="stock-card__watchlist-btn"
        aria-pressed={isWatchlisted}
        aria-label={`${isWatchlisted ? "Remove" : "Add"} ${stock.symbol} ${
          isWatchlisted ? "from" : "to"
        } watchlist`}
        onClick={() => onToggleWatchlist(stock.symbol)}
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8-5.1-4.7 6.9-.8L12 2z" />
        </svg>
      </button>

      <div className="stock-card__header">
        <span className="stock-card__symbol">{stock.symbol}</span>
        <span className="stock-card__name">{stock.name}</span>
      </div>

      <div className="stock-card__price">${priceFormatted}</div>

      <div className={`stock-card__change stock-card__change--${trend}`}>
        {trend !== "neutral" && (
          <svg viewBox="0 0 10 10">
            <path d="M5 1l4 6H1z" />
          </svg>
        )}
        {changeFormatted}
      </div>

      <div className="stock-card__sparkline"></div>
    </article>
  );
}

export default StockCard;
