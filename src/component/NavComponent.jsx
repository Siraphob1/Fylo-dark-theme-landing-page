import logo from "../images/logo.svg";


const NavComponent = () => {
  return (
    <nav className="bgc-intro-email flex  justify-between items-center px-[1rem] py-[2rem]
                    xl:px-[4rem] "> 
        <img src={logo} alt="logo" className="w-[90px]"/>
        <ul className="flex">
            <li><a href="#" className="nav-a">Features</a></li>
            <li><a href="#" className="nav-a">Team</a></li>
            <li><a href="#" className="nav-a">Sign In</a></li>
        </ul>
    </nav>
  )
}

export default NavComponent
