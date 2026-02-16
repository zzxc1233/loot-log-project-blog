import { Heart, Facebook, Linkedin, Twitter, Copy, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { useContext, useState } from 'react';
import { DataByIdContext } from '../../contexts/UseDataById';
import { useNavigate, useParams } from 'react-router-dom';
import { Textarea } from "../../ui/textarea";
import { useAuth } from "../../auth/AuthProvider";
import { useComments } from "../../../hooks/useComments";
import { toast } from "sonner";
import CommentList from './commentList';

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from "../../ui/alert-dialog"

function CommentSection() {
    const data = useContext(DataByIdContext);
    const params = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    
    const [isLogin, setIsLogin] = useState(false);
    const [comment, setComment] = useState("");
    
    const {
        comments,
        loadingComments,
        editingCommentId,
        editingText,
        handlePostComment,
        handleEditComment,
        handleDeleteComment,
        handleSetEditingComment,
        canEditComment
    } = useComments();

    function handleIsLogin() {
        if (!isAuthenticated) {
            setIsLogin(true);
        }
    }

    async function handlePostCommentSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        const result = await handlePostComment(comment);
        if (result.success) {
            setComment("");
        }
    }

    return (
        <>
            {data
                .filter((item) => String(item.id) === params.id)
                .map((item) => (
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
                            <p className="text-silver-200 text-body">Comments</p>
                            <form onSubmit={handlePostCommentSubmit} className='flex flex-col gap-4 py-4 '>
                                <Textarea
                                    value={isAuthenticated ? comment : ""}
                                    onChange={(e) => isAuthenticated && setComment(e.target.value)}
                                    className="w-full resize-none border-white/10 rounded-2xl h-48 sm:h-72 text-silver-100 bg-space-800 p-4 text-sm sm:text-base focus:border-galactic-teal outline-none transition-all"
                                    placeholder={isAuthenticated ? 'Add a comment' : 'Please login to comment'}
                                    onClick={handleIsLogin}
                                />
                                <Button
                                    type="submit"
                                    variant="signup"
                                    className='w-fit'
                                    disabled={!isAuthenticated || !comment.trim()}
                                >
                                    Post Comment
                                </Button>
                            </form>
                            
                            <CommentList 
                                comments={comments} 
                                loadingComments={loadingComments}
                                onEditComment={handleEditComment}
                                onDeleteComment={handleDeleteComment}
                                editingCommentId={editingCommentId}
                                editingText={editingText}
                                onSetEditingComment={handleSetEditingComment}
                                canEditComment={canEditComment}
                            />
                        </div>
                    </div>
                ))}
            {/* alert login */}
            <AlertDialog open={isLogin} onOpenChange={setIsLogin}>
                <AlertDialogContent className="bg-space-800 rounded-2xl border border-white/10 pt-16 pb-6 max-w-104 sm:max-w-lg flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <AlertDialogTitle className="text-xl sm:text-3xl font-semibold pb-2 text-center text-silver-100 px-4">
                        Create an account to continue
                    </AlertDialogTitle>
                    <Button
                        variant="signup"
                        className="h-10 sm:h-12 w-40 sm:w-52 font-semibold text-base sm:text-lg"
                        onClick={() => navigate("/signup")}
                    >
                        Create account
                    </Button>
                    <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2 text-silver-300 text-sm sm:text-base">
                        Already have an account?
                        <span className="text-galactic-teal cursor-pointer hover:underline font-semibold"
                            onClick={() => navigate("/login")}
                        > Log In</span>
                    </AlertDialogDescription>
                    <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none text-silver-400 hover:text-silver-100">
                        <X className="h-6 w-6" />
                    </AlertDialogCancel>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default CommentSection;
