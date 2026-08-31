function TradeViewerRow({ trade, header, on_click, highlighted }) {
    return (
        <div
            className={`trade-viewer-${header ? "header" : "row"} ${highlighted ? "highlighted" : ""}`}
            onClick={header ? undefined : () => { on_click(trade) }}
        >
            {!header ? (
                <>
                    <div><span>{trade.ticker ?? 'BOOB'}</span></div>
                    <div><span>{trade.count ?? '123'}</span></div>
                    <div><span>{trade.buy_price ?? '123.45'}</span></div>
                    <div><span>{trade.sell_price ?? 'Unknown'}</span></div>
                    <div><span>{trade.return ?? 'Unknown / Unknown'}</span></div>
                    <div><span>{trade.type ?? 'Share'}</span></div>
                    <div><span>{trade.buy_date ?? '2006-05-05'}</span></div>
                    <div><span>{trade.sell_date ?? 'Unknown'}</span></div>
                </>
            ) : (
                <>
                    <div><span>Ticker</span></div>
                    <div><span>Count</span></div>
                    <div><span>Buy ($)</span></div>
                    <div><span>Sell ($)</span></div>
                    <div><span>Return ($ / %)</span></div>
                    <div><span>Type</span></div>
                    <div><span>Buy date</span></div>
                    <div><span>Sell date</span></div>
                </>
            )}
        </div>
    )
}

export default TradeViewerRow