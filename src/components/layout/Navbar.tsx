import logoHH from '../../assets/img/logo-HH.png'
import { Menu } from 'lucide-react';
import { Button } from "../ui/button";

function Navbar() {
    return (
        <nav className='flex justify-between items-center py-3 px-6 border border-brown-300 xl:px-30'>
            <img src={logoHH} alt="logo-HH" />
            <div className="hidden xl:flex gap-2">
                <Button variant="login">Log in</Button>
                <Button variant="signup">Sign up</Button>
            </div>
            <Menu className="inline xl:hidden" />
        </nav>
    )
}

export default Navbar