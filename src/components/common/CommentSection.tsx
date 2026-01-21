import { Heart, Facebook, Linkedin, Twitter, Copy, X, Link } from 'lucide-react';
import { Button } from '../ui/button';
import { useContext, useState } from 'react';
import { DataByIdContext } from '../context/UseDataById';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "sonner"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"


function CommentSection() {

    const data = useContext(DataByIdContext);
    const params = useParams();
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false)

    function handleIsLogin() {
        setIsLogin(true);
    }

    return (
        <>
            {data
                .filter((item: any) => item.id == params.id)
                .map((item: any) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 rounded-2xl'>
                            <Button variant="signup" className='flex items-center w-fit gap-2 px-4 py-1 rounded-2xl'>
                                <Heart className='text-red-500' />
                                <p className='text-body'>{item.likes}</p>
                            </Button>
                            <div className='flex items-center gap-2 sm:gap-4 flex-wrap'>
                                <Button
                                    variant="signup"
                                    className='w-fit text-sm sm:text-base'
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href)
                                        toast.success("Copied!", {
                                            description: "This article has been copied to your clipboard",
                                            duration: 3000,
                                        })
                                    }}>
                                    <Copy className='h-4 w-4 sm:h-5 sm:w-5' /> <span className='hidden sm:inline'>Copy Link</span>
                                </Button>
                                <Facebook className='text-blue-500 h-5 w-5 sm:h-6 sm:w-6' />
                                <Linkedin className='text-blue-500 h-5 w-5 sm:h-6 sm:w-6' />
                                <Twitter className='text-blue-500 h-5 w-5 sm:h-6 sm:w-6' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className="text-offwhite-300 text-body">Comments</p>
                            <form action=""
                                className='flex flex-col gap-4 py-4 '>
                                <textarea
                                    className="border rounded-2xl h-48 sm:h-72 text-offwhite-300 bg-transparent p-4 text-sm sm:text-base"
                                    placeholder='Add a comment'
                                    rows={4}
                                    cols={10}
                                    onFocus={handleIsLogin}
                                />
                                <Button
                                    variant="signup"
                                    className='w-fit'>Post Comment
                                </Button>
                            </form>
                        </div>
                    </div>
                ))}

            {/* alert login */}
            <AlertDialog open={isLogin} onOpenChange={setIsLogin}>
                <AlertDialogContent className="bg-midnight-800 rounded-md border border-gold-600 pt-16 pb-6 max-w-104 sm:max-w-lg flex flex-col items-center">
                    <AlertDialogTitle className="text-xl sm:text-3xl font-semibold pb-2 text-center text-offwhite-300 px-4">
                        Create an account to continue
                    </AlertDialogTitle>
                    <Button
                        variant="signup"
                        className="h-10 sm:h-12 w-40 sm:w-52 font-semibold text-base sm:text-lg"
                        onClick={() => navigate("/signup")}
                    >
                        Create account
                    </Button>
                    <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2 text-offwhite-300 text-sm sm:text-base">
                        Already have an account?
                        <span className="text-gold-400 cursor-pointer hover:underline"
                            onClick={() => navigate("/login")}
                        > Log In</span>
                    </AlertDialogDescription>
                    <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none">
                        <X className="h-6 w-6" />
                    </AlertDialogCancel>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default CommentSection;