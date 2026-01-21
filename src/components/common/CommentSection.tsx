import { Heart, Facebook, Linkedin, Twitter, Copy, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useContext, useState } from 'react';
import { DataByIdContext } from '../context/UseDataById';
import { useParams } from 'react-router-dom';
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
                        <div className='flex items-center justify-between py-8 rounded-2xl'>
                            <Button variant="signup" className='flex items-center w-fit gap-2 px-4 py-1 rounded-2xl'>
                                <Heart className='text-red-500' />
                                <p className='text-body'>{item.likes}</p>
                            </Button>
                            <div className='flex items-center gap-4'>
                                <Button
                                    variant="signup"
                                    className='w-fit'
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href)
                                        toast.success("Copied!", {
                                            description: "This article has been copied to your clipboard",
                                            duration: 3000,
                                        })
                                    }}>
                                    <Copy /> Copy Link
                                </Button>
                                <Facebook className='text-blue-500' />
                                <Linkedin className='text-blue-500' />
                                <Twitter className='text-blue-500' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className="text-offwhite-300 text-body">Comments</p>
                            <form action=""
                                className='flex flex-col gap-4 py-4 '>
                                <textarea
                                    className="border rounded-2xl h-72 text-offwhite-300 bg-transparent p-4"
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
                    <AlertDialogTitle className="text-3xl font-semibold pb-2 text-center text-offwhite-300">
                        Create an account to continue
                    </AlertDialogTitle>
                    <Button
                        variant="signup"
                        className="h-12 w-52 font-semibold text-lg">
                        Create account
                    </Button>
                    <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2 text-offwhite-300">
                        Already have an account?
                        <a
                            href="/login"
                            className="text-gold-600 hover:text-gold-500 transition-colors underline font-semibold"
                        >
                            Log in
                        </a>
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