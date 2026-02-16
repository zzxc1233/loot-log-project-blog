import logoHH from "../../assets/img/logo-hh.png";
import { Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/contexts/AuthProvider";

// UI Components
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";


interface NavbarProps {
  className?: string;
}

function Navbar({ className = "" }: NavbarProps) {

  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className={`flex justify-between items-center py-3 px-4 sm:px-6 bg-midnight-800 border border-gold-400/30 xl:px-30 ${className}`}>
      <img src={logoHH} alt="logo-HH" className="cursor-pointer h-8 sm:h-auto" onClick={() => navigate("/")} />

      <div className="hidden sm:flex gap-2">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-offwhite-200 text-sm">{user?.name}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {user?.profile_pic ? (
                  <img
                    src={user.profile_pic}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 text-gold-400" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/member")}>
                  Member Panel
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  logout();
                  navigate("/");
                }}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <>
            <Button variant="login"
              className="cursor-pointer"
              onClick={() => navigate("/login")}>Log in</Button>
            <Button variant="signup"
              className="cursor-pointer"
              onClick={() => navigate("/signup")}>Sign up</Button>
          </>
        )}
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
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 pb-4 border-b border-gold-400/30">
                  {user?.profile_pic ? (
                    <img
                      src={user.profile_pic}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-10 h-10 text-gold-400" />
                  )}
                  <div>
                    <p className="text-offwhite-200 font-medium">{user?.name}</p>
                    <p className="text-offwhite-400 text-sm">{user?.username}</p>
                  </div>
                </div>
                <Button variant="outline"
                  className="cursor-pointer w-full"
                  onClick={() => navigate("/member")}>Member Panel</Button>
                <Button variant="outline"
                  className="cursor-pointer w-full"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="login"
                  className="cursor-pointer w-full"
                  onClick={() => navigate("/login")}>Log in</Button>
                <Button variant="signup"
                  className="cursor-pointer w-full"
                  onClick={() => navigate("/signup")}>Sign up</Button>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
