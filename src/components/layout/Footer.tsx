import GoogleBlack from "../../assets/img/Google_black.png";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 py-8 sm:py-10 bg-midnight-800 border-t border-gold-400/30 sm:flex sm:justify-between sm:items-center sm:px-6 xl:px-30 xl:py-15">
        <div className="flex justify-center items-center gap-4 mb-4 sm:mb-0">
          <div className="text-body text-offwhite-200 xl:mt-1">
            Get in touch
          </div>
          <Github className="text-offwhite-300" />
          <Linkedin className="text-offwhite-300" />
          <img
            src={GoogleBlack}
            alt="GoogleBlackIcon"
            className="w-6 h-6 brightness-0 invert opacity-80"
          />
        </div>
        <div className="flex justify-center">
          <Button
            variant="link"
            size="xl"
            onClick={() => navigate("/")}
          >
            Home page
          </Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
