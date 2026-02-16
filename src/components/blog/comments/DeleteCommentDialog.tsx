import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
} from "../../ui/alert-dialog"

interface DeleteCommentDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    commentText?: string;
}

export default function DeleteCommentDialog({ 
    isOpen, 
    onClose, 
    onConfirm, 
    commentText 
}: DeleteCommentDialogProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="bg-space-800 rounded-2xl border border-white/10 pt-16 pb-6 max-w-104 sm:max-w-lg flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <AlertDialogTitle className="text-xl sm:text-3xl font-semibold pb-2 text-center text-silver-100 px-4">
                    Delete Comment
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center text-silver-300 text-sm sm:text-base px-4 pb-6">
                    คุณแน่ใจหรือไม่ว่าต้องการลบความคิดเห็นนี้
                    <br />
                    หากลบแล้วจะไม่สามารถย้อนกลับได้
                    {commentText && (
                        <div className="mt-3 p-3 bg-space-700 rounded-lg border border-white/10">
                            <p className="text-silver-200 text-xs italic line-clamp-3">
                                "{commentText}"
                            </p>
                        </div>
                    )}
                </AlertDialogDescription>
                <div className="flex gap-3">
                    <AlertDialogCancel className="bg-space-700 border border-white/20 text-silver-300 hover:bg-space-600 hover:text-silver-100">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction 
                        onClick={onConfirm}
                        className="bg-red-500 hover:bg-red-600 text-white"
                    >
                        Delete
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
