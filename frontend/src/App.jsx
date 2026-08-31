import { useState } from 'react';

import TradeInspector from "./components/TradeInspector"
import TradeRow from './components/TradeRow';

function App() {
    const [active_trade, set_active_trade] = useState({ unique_id: -1 });

    let trades = [
        { unique_id: 1, ticker: "ASTS", count: 4, buy_date: "2024-05-30", buy_price: "$9.26", type: "Share"},
        { unique_id: 2, ticker: "ASTS", count: 2, buy_date: "2024-06-26", buy_price: "$11.26", type: "Share"},
        { unique_id: 3, ticker: "ASTS", count: 3, buy_date: "2024-08-26", buy_price: "$33.05", type: "Share"},
        { unique_id: 4, ticker: "ASTS", count: 2, buy_date: "2026-06-11", buy_price: "$93.72", type: "Share"},
        { unique_id: 5, ticker: "ASTS", count: 11.7303, buy_date: "2026-7-24", buy_price: "$56.26", type: "Share"},
        { unique_id: 6, ticker: "PL", count: 4, buy_date: "2026-04-16", buy_price: "$38.13", type: "Share"},
        { unique_id: 7, ticker: "PL", count: 1, buy_date: "2026-06-11", buy_price: "$32.75", type: "Share"},
        { unique_id: 8, ticker: "VYM", count: 2, buy_date: "2026-06-09", buy_price: "$158.47", type: "ETF"},
        { unique_id: 9, ticker: "VYM", count: 1, buy_date: "2026-08-18", buy_price: "$165.96", type: "ETF"},
        { unique_id: 10, ticker: "BE", count: 1, buy_date: "2026-08-26", buy_price: "$227.58", type: "Share"},
        { unique_id: 11, ticker: "BOOB", count: 1, buy_date: "2026-08-29", buy_price: "$302.25", type: "Share"},
        { unique_id: 12, ticker: "GRND", count: 1, buy_date: "2026-08-29", buy_price: "$380.25", type: "Share"},
        { unique_id: 13, ticker: "DZ", count: 1, buy_date: "2026-08-29", buy_price: "$425.53", type: "Share"},
    ];

    return (
        <>  
            <div className='trade-viewer'>
                <TradeRow header={true}/>
                {trades.map((item, index) => {
                    return <TradeRow highlighted={index+1 == active_trade.unique_id} trade={item} header={false} on_click={(trade) => {set_active_trade(trade)}}/>
                })}
            </div>
            <TradeInspector trade={active_trade}/>
        </>
    )
}

export default App
