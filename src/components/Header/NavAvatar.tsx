import "./Nav.css"
import profileImg from '../../images/profile.jpg'
const NavAvatar = () => {
    // var profileImg = '../../images/profile.jpg';
    return (
        <li className="nav-item dropdown pe-3">
            <a 
                href="#" 
                className="nav-link nav-profile d-flex align-items-center pe-0"
                data-bs-toggle="dropdown"
            >
                <img src={profileImg} /* {profileImg} */ alt="" className="rounded-circle" height={30} width={30} />
                <span className="d-none d-md-block dropdown-toggle ps-2">F.David</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>David</h6>
                    <span>Web Developer</span>
                </li>
                <li>
                    <hr className="dropdown-drivider" />
                </li>
                <li>
                    <a href="users-profile.html" className="dropdown-item d-flex align-items-center">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a href="users-profile.html" className="dropdown-item d-flex align-items-center">
                        <i className="bi bi-gear"></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a href="pages-faq.html" className="dropdown-item">
                        <i className="bi bi-question-circle"></i>
                        <span>Need Help?</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
            </ul>
        </li>
    )
}
export default NavAvatar