function TradeInspector({ trade }) {
    return (
        <div className="trade-inspector">
            <div className="trade-inspector-group">
                <label htmlFor="ticker">Ticker:</label>
                <input
                    name="ticker"
                    value={trade?.ticker ?? "Select a ticker"}
                    disabled={!trade?.ticker}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="count">Count:</label>
                <input
                    name="count"
                    value={trade?.count ?? "0"}
                    disabled={!trade?.count}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="buy_price">Buy ($):</label>
                <input
                    name="buy_price"
                    value={trade?.buy_price ?? "0.00"}
                    disabled={!trade?.buy_price}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="sell_price">Sell ($):</label>
                <input
                    name="sell_price"
                    value={trade?.sell_price ?? "0.00"}
                    disabled={!trade?.sell_price}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="type">Type:</label>
                <input
                    name="type"
                    value={trade?.type ?? "None"}
                    disabled={!trade?.type}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="buy_date">Buy date:</label>
                <input
                    name="buy_date"
                    value={trade?.buy_date ?? "None"}
                    disabled={!trade?.buy_date}
                />
            </div>

            <div className="trade-inspector-group">
                <label htmlFor="sell_date">Sell date:</label>
                <input
                    name="sell_date"
                    value={trade?.sell_date ?? "None"}
                    disabled={!trade?.sell_date}
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