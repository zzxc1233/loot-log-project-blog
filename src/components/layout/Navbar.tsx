import logoHH from "../../assets/img/logo-hh.png";
import { Menu } from "lucide-react";

// UI Components
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-3 px-6 bg-midnight-800 border border-gold-400/30 xl:px-30">
      {/* Logo */}
      <img src={logoHH} alt="logo-HH" />

      {/* Desktop Navigation (XL) */}
      <div className="hidden xl:flex gap-2">
        <Button variant="login">Log in</Button>
        <Button variant="signup">Sign up</Button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div className="xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="outline-none">
              <Menu className="text-gold-400" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-screen rounded-none mt-4 flex flex-col gap-6 py-10 px-6"
            align="end"
          >
            <Button variant="login">Log in</Button>
            <Button variant="signup">Sign up</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
