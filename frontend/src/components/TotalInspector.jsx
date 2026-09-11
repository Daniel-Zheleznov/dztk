function TotalInspector({ trades }) {
    let total_sale_count = 0;
    let total_returns = 0;
    
    for (let trade of trades) {
        if (trade.status.toLowerCase() == "sold") {
            total_sale_count += 1;
        }
    }

    return (
        <div className="total-inspector">
            <p className="total-inspector-total-sale-count">Total sale count: {total_sale_count}</p>
        </div>
    );
}

export default TotalInspector;