import GoogleBlack from "../img/Google_black.png"
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';


function Footer() {
    return (
        <>
            <div className="px-4 py-10 bg-brown-200 xl:flex xl:justify-between xl:items-center xl:px-32 xl:py-16">
                <div className="flex justify-center items-center gap-4 mb-6 xl:mb-0">
                    <div className="text-body xl:mt-1">Get in touch</div>
                    <Linkedin />
                    <Github />
                    <img src={GoogleBlack} alt="GoogleBlackIcon" className="w-6 h-6 grayscale" />
                </div>
                <div className="flex justify-center">
                    <button className="text-body underline">Home page</button>
                </div>
            </div>
        </>
    )
}

export default Footer