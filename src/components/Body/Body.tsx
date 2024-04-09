import PageTitle from "./PageTitle"
import './Body.css'
import Dashboard from "./Dashboard"

function Body() {
    return (
        <main className="main" id="main">
            <PageTitle page="Dashboard" />
            <Dashboard />
        </main>
    )
}

export default Body