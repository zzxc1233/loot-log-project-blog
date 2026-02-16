import axiosInstance from "@/lib/axios";
import type { Comment } from "@/hooks/useComments";

export class CommentService {
    private static readonly BASE_URL = '/comments';

    // Fetch comments for a specific post
    static async fetchComments(postId: string): Promise<Comment[]> {
        try {
            const response = await axiosInstance.get(`${this.BASE_URL}?post_id=${postId}`);
            const commentsData = response.data.comments || response.data || [];

            // Filter comments to ensure they belong to this post
            const filteredComments = commentsData.filter((comment: Comment) =>
                String(comment.post_id) === String(postId)
            );

            // Add user data handling
            return filteredComments.map((comment: Comment) => {
                if (!comment.user_id) {
                    return {
                        ...comment,
                        user: comment.user || {
                            name: 'Anonymous',
                            profile_pic: undefined
                        }
                    };
                }

                if (comment.user) {
                    return comment;
                }

                return {
                    ...comment,
                    user: {
                        name: 'Anonymous',
                        profile_pic: undefined
                    }
                };
            });
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }

    // Create new comment
    static async createComment(postId: string, userId: string | number, commentText: string): Promise<any> {
        try {
            const response = await axiosInstance.post(this.BASE_URL, {
                post_id: postId,
                user_id: userId,
                comment_text: commentText.trim()
            });
            return response;
        } catch (error) {
            console.error('Error creating comment:', error);
            throw error;
        }
    }

    // Update existing comment
    static async updateComment(commentId: number, commentText: string): Promise<any> {
        try {
            const response = await axiosInstance.put(`${this.BASE_URL}/${commentId}`, {
                comment_text: commentText.trim()
            });
            return response;
        } catch (error) {
            console.error('Error updating comment:', error);
            throw error;
        }
    }

    // Delete comment
    static async deleteComment(commentId: number): Promise<any> {
        try {
            const response = await axiosInstance.delete(`${this.BASE_URL}/${commentId}`);
            return response;
        } catch (error) {
            console.error('Error deleting comment:', error);
            throw error;
        }
    }

    // Validate API response
    static validateResponse(response: any): { success: boolean; message: string } {
        const isSuccess = response.data?.success ||
            response.data?.status === 'success' ||
            response.status === 201 ||
            response.status === 200;

        return {
            success: isSuccess,
            message: isSuccess ? 'Success' : 'Operation failed'
        };
    }
}
