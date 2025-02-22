type nav = {
    _id: number,
    name: string,
    icon: string
}
function NavItems(nav: nav) {
    return (
        <li className="nav-item" key={nav._id}>
            <a href="#" className="nav-link collapsed">
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
            </a>
        </li>
    )
}
export default NavItems;