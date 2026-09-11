import flask
import sqlite3 as sql

app = flask.Flask(__name__)
db_name = "dztk.db"

@app.get("/get-trades")
def get_trades():
    conn = sql.connect(db_name)
    conn.execute("PRAGMA foreign_keys = ON")

    results = conn.execute("""SELECT 
        Trades.id, Trades.ticker, Trades.count, Trades.buy_date, 
        Trades.ticker_price, TradeTypes.name as type, Trades.sell_date, Trades.sell_price
        FROM Trades JOIN TradeTypes ON Trades.type_ref = TradeTypes.id
    """)
    output = { "trades": [] }
    for result in results.fetchall():
        output["trades"].append(result)

    conn.close()
    return output

    # ["Share", "ETF", "ETF-SHORT", "ETF-2X-LONG", "ETF-2X-SHORT"]
    # ["unique_id", "ticker", "count", "buy_date", "ticker_price", "type_ref", "sell_date", "sell_price", "status"]
