import "./SummaryCard.css";

function SummaryCard({ title, count, color }) {
    return (
        <div className="summary-card">
            <div
                className="summary-strip"
                style={{ backgroundColor: color }}
            ></div>

            <div className="summary-content">
                <h3>{title}</h3>
                <h1>{count}</h1>
            </div>
        </div>
    );
}

export default SummaryCard;