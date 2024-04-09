import { useEffect, useState } from 'react'
import './News.css'
import CardFilter from './CardFilter';
import NewsPostItem from './NewsPostItem';

function News() {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter: string) => {
        setFilter(filter);
    };
    const fetchData = () => {
        fetch('http://localhost:4000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className="card-title">
                    News &amp; Updates <span>| {filter}</span>
                </h5>
                <div className="news">
                    {
                        news && news.length > 0 &&
                        news.map((item: { _id: number }) => (
                            <NewsPostItem key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News