import logoHH from "../img/logo-hh.png"
import burgerBar from "../img/burger-bar.png"

function NavBar() {
    return (
        <nav className='flex justify-between items-center py-3 px-6 border border-brown-300'>
            <img src={logoHH} alt="logo-HH" />
            <img src={burgerBar} alt="burger-bar" className="w-6" />
        </nav>
    )
}

export default NavBar