import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import { CircleAlert } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


function PageNotFound() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="bg-space-900 min-h-screen flex flex-col justify-center items-center px-4 sm:px-0">
                <div className="flex flex-col gap-4 w-full items-center">
                    <CircleAlert className="text-red-500" width={80} height={80} />
                    <h1 className="text-headline-3 sm:text-headline text-galactic-teal text-center">Page Not Found</h1>
                    <p className="text-body-3 sm:text-body text-silver-300 text-center">The page you are looking for does not exist.</p>
                    <Button variant="default" onClick={() => navigate("/")}>Back to Home</Button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound;
