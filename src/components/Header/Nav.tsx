import "./Nav.css"
import NavAvatar from "./NavAvatar";
import NavMassage from "./NavMassage";
import NavNotice from "./NavNotice";
const Nav = () =>{
    return (
        <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
                <NavNotice />
                <NavMassage />
                <NavAvatar />
            </ul>

        </nav>
    )
}

export default Nav;