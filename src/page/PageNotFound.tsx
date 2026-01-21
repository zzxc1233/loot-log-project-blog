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
            <div className="bg-midnight-900 min-h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 w-full items-center">
                    <CircleAlert className="text-red-500 text-6xl" width={100} height={100} />
                    <h1 className="text-headline text-gold-gradient">Page Not Found</h1>
                    <p className="text-body text-offwhite-300">The page you are looking for does not exist.</p>
                    <Button variant="default" onClick={() => navigate("/")}>Back to Home</Button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound
