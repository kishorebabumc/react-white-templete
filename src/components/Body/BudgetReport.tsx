import { useState } from 'react';
import './BudgetReport.css'
import CardFilter from './CardFilter';
import BudgetChart from './BudgetChart';

function BudgetReport() {
    const [filter, setFilter] = useState('Today');
    // const [items, setItems] = useState([]);
    const handleFilterChange = (filter: string) => {
        setFilter(filter);
    }
    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className="card-title">
                    Budget Report <span>| {filter}</span>
                </h5>
                <BudgetChart />
            </div>
        </div>
    )
}

export default BudgetReport