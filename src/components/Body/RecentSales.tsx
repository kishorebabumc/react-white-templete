import { SetStateAction, useEffect, useState } from 'react'
import CardFilter from './CardFilter'
import './RecentSales.css'
import RecentSalesTable from './RecentSalesTable'

function RecentSales() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter: SetStateAction<string>) => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:4000/recentsales')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => { console.log(e); })
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="card recent-sales overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Sales <span>| {filter}</span>
                </h5>
                <RecentSalesTable items={items} />
            </div>
        </div>
    )
}

export default RecentSales