import logoHH from "../../assets/img/logo-hh.png";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

// UI Components
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center py-3 px-4 sm:px-6 bg-midnight-800 border border-gold-400/30 xl:px-30">
      <img src={logoHH} alt="logo-HH" className="cursor-pointer h-8 sm:h-auto" onClick={() => navigate("/")} />

      <div className="hidden sm:flex gap-2">
        <Button variant="login"
          className="cursor-pointer"
          onClick={() => navigate("/login")}>Log in</Button>
        <Button variant="signup"
          className="cursor-pointer"
          onClick={() => navigate("/signup")}>Sign up</Button>
      </div>

      <div className="sm:hidden">
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
            <Button variant="login"
              className="cursor-pointer"
              onClick={() => navigate("/login")}>Log in</Button>
            <Button variant="signup"
              className="cursor-pointer"
              onClick={() => navigate("/signup")}>Sign up</Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
