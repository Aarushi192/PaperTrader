/*
  MOCK DATA — placeholder for Member 1's real stocks.js
  =======================================================
  Same shape they'll use: symbol, name, price, change (a plain number,
  not a pre-formatted string — formatting is render.js's job, not data's).

  Reused the same 10 stress-test cases from Phase 1 on purpose: if the
  card looked right with hardcoded HTML, it should look IDENTICAL now
  that it's rendered from this data. That's how you verify render.js
  isn't introducing bugs — nothing should visually change.
*/

export const stocks = [
  { symbol: "AAPL",  name: "Apple Inc.",                                    price: 187.42,     change: 2.34 },
  { symbol: "TSLA",  name: "Tesla, Inc.",                                   price: 242.11,     change: -3.87 },
  { symbol: "IBM",   name: "International Business Machines Corporation",  price: 178.90,     change: 0.52 },
  { symbol: "GME",   name: "GameStop Corp.",                                price: 14.02,      change: -8.91 },
  { symbol: "BRK.A", name: "Berkshire Hathaway Inc.",                       price: 612450.00,  change: 0.15 },
  { symbol: "PENY",  name: "Penny Stock Holdings Ltd.",                     price: 0.87,       change: 145.20 },
  { symbol: "MSFT",  name: "Microsoft Corporation",                         price: 415.26,     change: 0.00 },
  { symbol: "F",     name: "Ford Motor Company",                            price: 10.34,      change: -1.02 },
  { symbol: "GOOGL", name: "Alphabet Inc. Class A",                         price: 2847.50,    change: 1.18 },
  { symbol: "NFLX",  name: "Netflix, Inc.",                                 price: 612.99,     change: -0.03 },
];
