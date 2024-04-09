import './Search.css'
const Search = () =>{
    return (
        <div className="search-bar">
            <form action="#" className="search-form d-flex align-items-center" method="POST">
                <input type="text" name="query" id="" placeholder="Search" title="Enter search keyword" />
                <button type="button" title="Search">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </div>
    )
}
export default Search