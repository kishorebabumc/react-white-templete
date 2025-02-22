import { useEffect, useState } from "react"
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";
import './RecentActivity.css'

function RecentActivity() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter: string) => {
        setFilter(filter);
    }
    const fetchData = () => {
        fetch('http://localhost:4000/recentactivity')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => { console.log(err) })
    }
    useEffect(() => {
        fetchData();
    })
    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>| {filter}</span>
                </h5>
                <div className="activity">
                    {items &&
                        items.length > 0 &&
                        items.map((item: { _id: number }) => (
                            <RecentActivityItem key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentActivity