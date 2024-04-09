import "./Header.css";
import Logo from "./Logo";
import Search from "./Search";
import Nav from './Nav'

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* Logo */}
      <Logo />
      {/* Search */}
      <Search />
      {/* Navigation */}
      <Nav />
    </header>
  )
}

export default Header