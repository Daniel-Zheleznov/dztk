import { useState } from 'react';

import TradeInspector from "./components/TradeInspector"
import TradeRow from './components/TradeRow';
import TotalInspector from './components/TotalInspector';

function App() {
    const [active_trade, set_active_trade] = useState({ unique_id: -1 });
    
    const [trades, set_trades] = useState([
        { unique_id: 1, ticker: "ASTS", count: 4, buy_date: "2024-05-30", ticker_price: "09.26", type: "Share", status: "Market"},
        { unique_id: 2, ticker: "ASTS", count: 2, buy_date: "2024-06-26", ticker_price: "11.26", type: "Share", status: "Market"},
        { unique_id: 3, ticker: "ASTS", count: 3, buy_date: "2024-08-26", ticker_price: "33.05", type: "Share", status: "Market"},
        { unique_id: 4, ticker: "ASTS", count: 2, buy_date: "2026-06-11", ticker_price: "93.72", type: "Share", status: "Market"},
        { unique_id: 5, ticker: "ASTS", count: 11.7303, buy_date: "2026-07-24", ticker_price: "56.26", type: "Share", status: "Market"},
        { unique_id: 6, ticker: "PL", count: 4, buy_date: "2026-04-16", ticker_price: "38.13", type: "Share", status: "Market"},
        { unique_id: 7, ticker: "PL", count: 1, buy_date: "2026-06-11", ticker_price: "32.75", type: "Share", status: "Market"},
        { unique_id: 8, ticker: "VYM", count: 2, buy_date: "2026-06-09", ticker_price: "158.47", type: "ETF", status: "Market"},
        { unique_id: 9, ticker: "VYM", count: 1, buy_date: "2026-08-18", ticker_price: "165.96", type: "ETF", status: "Market"},
        { unique_id: 10, ticker: "BE", count: 1, buy_date: "2026-08-26", ticker_price: "227.58", type: "Share", sell_date: "2026-09-08", sell_price: "274.00", status: "Sold"},
        { unique_id: 11, ticker: "BOOB", count: 1, buy_date: "2026-08-29", ticker_price: "302.25", type: "Share", status: "Market"},
        { unique_id: 12, ticker: "GRND", count: 1, buy_date: "2026-08-29", ticker_price: "380.25", type: "Share", status: "Market"},
        { unique_id: 13, ticker: "DZ", count: 1, buy_date: "2026-08-29", ticker_price: "425.53", type: "Share", status: "Market"},
        { unique_id: 14, ticker: "ASTS", count: 0.2697, buy_date: "2026-09-03", ticker_price: "61.25", type: "Share", status: "Market"},
    ]);

    function update_active_trade(trade, key, value) {

        let modified_value = trade[key];
        switch (key.toLowerCase()) {
            case "ticker": {
                const check = value.slice(-1);
                
                if (('0' <= check) && (check <= '9')) {
                    break;
                }

                modified_value = value.toUpperCase() || "";
                break;
            }
            
            case "count": {
                if (value.length === 0) {
                    modified_value = "0";
                    break;
                }

                const check = value.slice(-1);
                const has_dot = value.slice(0, -1).includes('.');
                if ((check >= '0' && check <= '9') || (check === '.' && !has_dot)) {
                    modified_value = value;

                    if (value[0] === "0") {
                        modified_value = value.substr(1, value.length - 1);
                    }
                }
                break;
            }

            case "ticker_price":
            case "sell_price": {
                const check = value.substr(value.length - 1);
                const has_dollar = value.substr(0, value.length - 1).includes('$');
                const has_dot = value.substr(0, value.length - 1).includes('.');

                if ((check >= '0' && check <= '9') || (check === '.' && !has_dot) || (check === '$' && !has_dollar)) {
                    modified_value = value;                
                }

                break;
            }

            case "buy_date":
            case "sell_date": {
                const check = value.slice(-1);
                if (('0' <= check) && (check <= '9')) {
                    modified_value = value || "";
                }
                break;
            } 

            default: {
                modified_value = value;
                break;
            }
        }
        
        const trade_update = {...trade, [key]: modified_value};
        set_active_trade(trade_update);
    }

    function update_global_trade(trade) {
        const type = trade.type.split('_')
            .map(word => {
                if (word === 'etf' || /\d/.test(word)) {
                    return word.toUpperCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');

        trade.type = type;

        set_trades(prev => prev.map(old_trade => old_trade.unique_id === trade.unique_id ? {...trade} : {...old_trade}));
        set_active_trade(trade);
    }

    return (
        <>  
            <div className='trade-viewer'>
                <TradeRow header={true}/>
                {trades.map((item, index) => {
                    return <TradeRow key={item.unique_id} highlighted={index+1 == active_trade.unique_id} trade={item} header={false} on_click={(trade) => {set_active_trade({...trade})}}/>
                })}
            </div>

            <div className="inspectors">
                <TradeInspector trade={active_trade} update_local={update_active_trade} update_global={update_global_trade}/>
                <TotalInspector/>
            </div>
        </>
    )
}

export default App
