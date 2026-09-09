function TradeInspector({ trade, update_local, update_global }) {
    return (
        <div className="trade-inspector">
            <div className="trade-inspector-group">                
                <label htmlFor="ticker">Ticker:</label>
                <input
                    name="ticker"
                    value={trade?.ticker ?? "Select a ticker"}
                    disabled={trade?.unique_id === -1}
                    onChange={(event) => update_local(trade, "ticker", event.target.value)}
                    type="text"
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="count">Count:</label>
                <input
                    name="count"
                    value={trade?.count ?? "0"}
                    disabled={trade?.unique_id === -1}
                    onChange={(event) => update_local(trade, "count", event.target.value)}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="ticker_price">Ticker price ($):</label>
                <input
                    name="ticker_price"
                    value={trade?.ticker_price ? (trade.ticker_price.startsWith("$") ? trade.ticker_price : "$" + trade.ticker_price) : ""}
                    disabled={trade?.unique_id === -1}
                    onChange={(event) => update_local(trade, "ticker_price", event.target.value)}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="sell_price">Sell ($):</label>
                <input
                    name="sell_price"
                    value={trade?.sell_price ? (trade.sell_price.startsWith("$") ? trade.sell_price : "$" + trade.sell_price) : ""}
                    disabled={(trade?.unique_id === -1) || (!trade?.sell_price)}
                    onChange={(event) => update_local(trade, "sell_price", event.target.value)}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="type">Type:</label>
                <select
                    disabled={trade?.unique_id === -1}
                    value={trade?.type?.toLowerCase().replace(" ", "_") || ""}
                    onChange={(event) => update_local(trade, "type", event.target.value)}
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
                    disabled={trade?.unique_id === -1}
                    type="date"
                    onChange={(event) => update_local(trade, "buy_date", event.target.value || "")}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="sell_date">Sell date:</label>
                <input
                    name="sell_date"
                    value={trade?.sell_date ?? ""}
                    disabled={(trade?.unique_id === -1) || (!trade?.sell_date)}
                    type="date"
                    onChange={(event) => update_local(trade, "sell_date", event.target.value || "")}
                />
            </div>

            <div className="trade-inspector-button-group">
                {(!trade?.status || trade?.status.toLowerCase() == "market") && <button type="button">Sold</button>}
                <button onClick={(event) => update_global(trade)}>Update</button>
            </div>
        </div>
    )
}

export default TradeInspector