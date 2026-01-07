import GoogleBlack from "../../assets/img/Google_black.png"
import { Button } from "@/components/ui/button";


function Footer() {
    return (
        <>
            <div className="px-4 py-10 bg-brown-200 xl:flex xl:justify-between xl:items-center xl:px-30 xl:py-15">
                <div className="flex justify-center items-center gap-4 mb-6 xl:mb-0">
                    <div className="text-body xl:mt-1">Get in touch</div>
                    
                    
                    <img src={GoogleBlack} alt="GoogleBlackIcon" className="w-6 h-6 grayscale" />
                </div>
                <div className="flex justify-center">
                    <Button variant="link" size="xl">Home page</Button>
                </div>
            </div>
        </>
    )
}

export default Footer