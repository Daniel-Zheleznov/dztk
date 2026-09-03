function TradeInspector({ trade, update }) {
    return (
        <div className="trade-inspector">
            <div className="trade-inspector-group">
                <label htmlFor="ticker">Ticker:</label>
                <input
                    name="ticker"
                    value={trade?.ticker ?? "Select a ticker"}
                    disabled={!trade?.ticker}
                    onChange={(event) => update(trade, "ticker", event.target.value)}
                    type="text"
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="count">Count:</label>
                <input
                    name="count"
                    value={trade?.count ?? "0"}
                    disabled={!trade?.count}
                    onChange={(event) => update(trade, "count", event.target.value)}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="buy_price">Buy ($):</label>
                <input
                    name="buy_price"
                    value={trade?.buy_price ?? "$0.00"}
                    disabled={!trade?.buy_price}
                    onChange={(event) => update(trade, "buy_price", event.target.value)}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="sell_price">Sell ($):</label>
                <input
                    name="sell_price"
                    value={trade?.sell_price ?? "$0.00"}
                    disabled={!trade?.sell_price}
                    onChange={(event) => update(trade, "sell_price", event.target.value)}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="type">Type:</label>
                <select 
                    disabled={!trade?.type}
                    value={trade?.type?.toLowerCase().replace(" ", "_") || ""} 
                    onChange={(event) => update(trade, "type", event.target.value)}
                >
                    <option value="share">Share</option>
                    <option value="etf">ETF</option>
                    <option value="etf_short">ETF Short</option>
                    <option value="etf_2x_long">ETF 2X LONG</option>
                    <option value="etf_2x_short">ETF 2X SHORT</option>
                </select>
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="buy_date">Buy date:</label>
                <input
                    name="buy_date"
                    value={trade?.buy_date ?? ""}
                    disabled={!trade?.buy_date}
                    type="date"
                    onChange={(event) => update(trade, "buy_date", event.target.value || "")}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="sell_date">Sell date:</label>
                <input
                    name="sell_date"
                    value={trade?.sell_date ?? ""}
                    disabled={false}
                    type="date"
                    onChange={(event) => update(trade, "sell_date", event.target.value || "")}
                />
            </div>

            <div className="trade-inspector-button-group">
                <button>Sold</button>
                <button>Update</button>
            </div>
        </div>
    )
}

export default TradeInspector