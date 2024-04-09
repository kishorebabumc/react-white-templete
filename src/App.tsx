
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import BackToTop from './components/Footer/BackToTop';
function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Body />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
