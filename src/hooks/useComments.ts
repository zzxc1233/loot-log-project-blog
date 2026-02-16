import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "sonner";
import axiosInstance from "@/lib/axios";
import { useAuth } from "@/components/auth/AuthProvider";

export interface Comment {
    id: number;
    post_id: number;
    user_id: number | string;
    comment_text: string;
    created_at: string;
    user?: {
        name: string;
        profile_pic?: string;
        username?: string;
    };
    author?: {
        name: string;
        profile_pic?: string;
        username?: string;
    };
}

export function useComments() {
    const params = useParams();
    const { isAuthenticated, user } = useAuth();
    
    const [comments, setComments] = useState<Comment[]>([]);
    const [loadingComments, setLoadingComments] = useState(true);
    const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");

    // Check if user can edit/delete comment
    const canEditComment = (comment: Comment) => {
        if (!isAuthenticated || !user) 
            return false;

        return String(comment.user_id) === String(user.id);
    };

    // Fetch comments from API
    const fetchComments = async () => {
        try {
            const response = await axiosInstance.get(`/comments?post_id=${params.id}`);
            
            const commentsData = response.data.comments || response.data || [];
            const filteredComments = commentsData.filter((comment: Comment) => 
                String(comment.post_id) === String(params.id)
            );
            
            const commentsWithUserData = await Promise.all(
                filteredComments.map(async (comment: Comment) => {
                    // Skip user data fetching if user_id is null or undefined
                    if (!comment.user_id) {
                        return {
                            ...comment,
                            user: {
                                name: 'Anonymous',
                                profile_pic: undefined
                            }
                        };
                    }
                    
                    try {
                        // Fetch user data from /auth/get-user/:id API (Supabase UUID)
                        const userResponse = await axiosInstance.get(`/auth/get-user/${comment.user_id}`);
                        const userData = userResponse.data;
                        
                        return {
                            ...comment,
                            user: {
                                name: userData.name || userData.username || 'Anonymous',
                                profile_pic: userData.profile_pic || undefined,
                                username: userData.username || undefined
                            }
                        };
                    } catch (userError: any) {
                        // Fallback to Anonymous if user fetch fails
                        return {
                            ...comment,
                            user: {
                                name: 'Anonymous',
                                profile_pic: undefined
                            }
                        };
                    }
                })
            );
            
            setComments(commentsWithUserData);
        } catch (error) {
            console.error('Error fetching comments:', error);
            setComments([]);
        } finally {
            setLoadingComments(false);
        }
    };

    // Post new comment
    const handlePostComment = async (commentText: string) => {
        if (!isAuthenticated) {
            return { success: false, message: "Please login to comment" };
        }

        if (!commentText.trim()) {
            toast.error("Please enter a comment");
            return { success: false, message: "Comment cannot be empty" };
        }

        try {
            const response = await axiosInstance.post('/comments', {
                post_id: params.id,
                user_id: user?.id,
                comment_text: commentText.trim()
            });

            if (response.data.success || response.data.status === 'success' || response.status === 201 || response.status === 200) {
                toast.success("Comment posted successfully!");
                fetchComments();
                return { success: true };
            } else {
                console.error('Comment post failed. Response:', response.data);
                return { success: false, message: "Failed to post comment" };
            }
        } catch (error) {
            console.error('Error posting comment:', error);
            toast.error("Failed to post comment");
            return { success: false, message: "Failed to post comment" };
        }
    };

    // Edit existing comment
    const handleEditComment = async (commentId: number, newText: string) => {
        if (!isAuthenticated) {
            return { success: false, message: "Please login to edit" };
        }

        if (!newText.trim()) {
            toast.error("Comment cannot be empty");
            return { success: false, message: "Comment cannot be empty" };
        }

        try {
            const response = await axiosInstance.put(`/comments/${commentId}`, {
                comment_text: newText.trim()
            });

            if (response.data.success || response.data.status === 'success' || response.status === 200) {
                toast.success("Comment updated successfully!");
                setEditingCommentId(null);
                setEditingText("");
                fetchComments();
                return { success: true };
            } else {
                console.error('Comment update failed. Response:', response.data);
                return { success: false, message: "Failed to update comment" };
            }
        } catch (error) {
            console.error('Error updating comment:', error);
            toast.error("Failed to update comment");
            return { success: false, message: "Failed to update comment" };
        }
    };

    // Delete comment
    const handleDeleteComment = async (commentId: number) => {
        if (!isAuthenticated) {
            return { success: false, message: "Please login to delete" };
        }

        try {
            const response = await axiosInstance.delete(`/comments/${commentId}`);

            if (response.data.success || response.data.status === 'success' || response.status === 200) {
                toast.success("Comment deleted successfully!");
                setEditingCommentId(null);
                setEditingText("");
                fetchComments();
                return { success: true };
            } else {
                console.error('Comment delete failed. Response:', response.data);
                return { success: false, message: "Failed to delete comment" };
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
            toast.error("Failed to delete comment");
            return { success: false, message: "Failed to delete comment" };
        }
    };

    // Set editing comment
    const handleSetEditingComment = (commentId: number | null, text: string) => {
        setEditingCommentId(commentId);
        setEditingText(text);
    };

    useEffect(() => {
        if (params.id) {
            fetchComments();
        }
    }, [params.id]);

    return {
        comments,
        loadingComments,
        editingCommentId,
        editingText,
        fetchComments,
        handlePostComment,
        handleEditComment,
        handleDeleteComment,
        handleSetEditingComment,
        canEditComment
    };
}
