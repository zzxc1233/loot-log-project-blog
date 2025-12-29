import logoHH from "../img/logo-hh.png"
import { Menu } from 'lucide-react';

function NavBar() {
    return (
        <nav className='flex justify-between items-center py-3 px-6 border border-brown-300'>
            <img src={logoHH} alt="logo-HH" />
            <Menu />
        </nav>
    )
}

export default NavBar