import type { Comment } from '../../../hooks/useComments';
import { Edit2, Trash2, Check, X } from 'lucide-react';
import { useState } from 'react';
import DeleteCommentDialog from './DeleteCommentDialog';

interface CommentListProps {
    comments: Comment[];
    loadingComments: boolean;
    onEditComment?: (commentId: number, newText: string) => void;
    onDeleteComment?: (commentId: number) => void;
    editingCommentId?: number | null;
    editingText?: string;
    onSetEditingComment?: (commentId: number | null, text: string) => void;
    canEditComment?: (comment: Comment) => boolean;
}

const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
        return 'just now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
};

const getUserData = (comment: Comment) => {
    const userData = comment.user || comment.author || {
        name: 'Anonymous',
        profile_pic: undefined,
        username: undefined
    };
    
    return {
        ...userData,
        profile_pic: userData.profile_pic || undefined
    };
};

const ProfilePicture = ({ userData }: { userData: any }) => {
    return (
        <div className="w-10 h-10 rounded-full bg-midnight-600 border border-gold-400/30 flex items-center justify-center overflow-hidden shrink-0">
            {userData.profile_pic ? (
                <img
                    src={userData.profile_pic}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                    }}
                />
            ) : (
                <div className="w-full h-full bg-galactic-teal/20 flex items-center justify-center">
                    <span className="text-galactic-teal text-sm font-semibold">
                        {userData.name?.charAt(0).toUpperCase() || 'A'}
                    </span>
                </div>
            )}
            <div className="hidden w-full h-full bg-galactic-teal/20 items-center justify-center">
                <span className="text-galactic-teal text-sm font-semibold">
                    {userData.name?.charAt(0).toUpperCase() || 'A'}
                </span>
            </div>
        </div>
    );
};

const CommentItem = ({ 
    comment, 
    onEditComment, 
    onDeleteComment, 
    editingCommentId, 
    editingText, 
    onSetEditingComment,
    canEditComment
}: { 
    comment: Comment;
    onEditComment?: (commentId: number, newText: string) => void;
    onDeleteComment?: (commentId: number) => void;
    editingCommentId?: number | null;
    editingText?: string;
    onSetEditingComment?: (commentId: number | null, text: string) => void;
    canEditComment?: (comment: Comment) => boolean;
}) => {
    const userData = getUserData(comment);
    const isEditing = editingCommentId === comment.id;
    const canEdit = canEditComment?.(comment) || false;
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    
    return (
        <>
            <div className="flex gap-3 p-4 bg-space-800 rounded-xl border border-white/10">
                <ProfilePicture userData={userData} />
                
                {/* Comment Content */}
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <span className="text-silver-100 font-medium text-sm">
                                {userData.name || 'Anonymous'}
                            </span>
                            <span className="text-silver-400 text-xs">
                                {formatRelativeTime(comment.created_at)}
                            </span>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={() => onEditComment?.(comment.id, editingText || '')}
                                        className="text-green-400 hover:text-green-300 transition-colors"
                                        title="Save"
                                    >
                                        <Check className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => onSetEditingComment?.(null, '')}
                                        className="text-red-400 hover:text-red-300 transition-colors"
                                        title="Cancel"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </>
                            ) : canEdit ? (
                                <>
                                    <button
                                        onClick={() => onSetEditingComment?.(comment.id, comment.comment_text)}
                                        className="text-silver-400 hover:text-silver-300 transition-colors"
                                        title="Edit"
                                    >
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => setIsDeleteDialogOpen(true)}
                                        className="text-red-400 hover:text-red-300 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </>
                            ) : null}
                        </div>
                    </div>
                    
                    {/* Comment Text or Edit Input */}
                    {isEditing ? (
                        <textarea
                            value={editingText}
                            onChange={(e) => onSetEditingComment?.(comment.id, e.target.value)}
                            className="w-full p-2 bg-space-700 border border-white/10 rounded-lg text-silver-100 text-sm resize-none focus:border-galactic-teal outline-none transition-all"
                            rows={3}
                            autoFocus
                        />
                    ) : (
                        <p className="text-silver-200 text-sm leading-relaxed">
                            {comment.comment_text}
                        </p>
                    )}
                </div>
            </div>
            
            <DeleteCommentDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={() => {
                    onDeleteComment?.(comment.id);
                    setIsDeleteDialogOpen(false);
                }}
                commentText={comment.comment_text}
            />
        </>
    );
};

export default function CommentList({ 
    comments, 
    loadingComments, 
    onEditComment, 
    onDeleteComment, 
    editingCommentId, 
    editingText, 
    onSetEditingComment, 
    canEditComment 
}: CommentListProps) {
    if (loadingComments) {
        return (
            <div className="flex flex-col gap-4 mt-6">
                <h3 className="text-silver-200 text-body font-medium">Comments</h3>
                <div className="text-center py-8">
                    <p className="text-silver-400 text-sm">Loading comments...</p>
                </div>
            </div>
        );
    }

    if (comments.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-silver-400 text-sm">No comments yet. Be the first to comment!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 mt-6">
            <h3 className="text-silver-200 text-body font-medium">Comments ({comments.length})</h3>
            {comments.map((comment) => (
                <CommentItem 
                    key={comment.id} 
                    comment={comment}
                    onEditComment={onEditComment}
                    onDeleteComment={onDeleteComment}
                    editingCommentId={editingCommentId}
                    editingText={editingText}
                    onSetEditingComment={onSetEditingComment}
                    canEditComment={canEditComment}
                />
            ))}
        </div>
    );
}
