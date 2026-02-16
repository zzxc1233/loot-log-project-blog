import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import { SearchInput } from "../common/SearchInput";
import { useState, useEffect } from "react";
import axios from "../../lib/axios";
import { useNavigate } from "react-router-dom";

interface Post {
    id: string;
    title: string;
    category: string;
    status: string;
    content?: string;
}

export default function ArticleManagement() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedStatus, setSelectedStatus] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPosts, setTotalPosts] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    const postsPerPage = 6;
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/posts?page=${currentPage}&limit=${postsPerPage}`);
            
            const postsData = response.data.posts && Array.isArray(response.data.posts) 
                ? response.data.posts 
                : [];
            
            // Check different possible field names for total count
            const total = response.data.total || response.data.totalPosts || response.data.count || 0;
            const pages = response.data.totalPages || response.data.pages || Math.ceil(total / postsPerPage);
                
            const uniqueCategories = [...new Set(postsData.map((post: Post) => post.category)
                .filter(Boolean))] as string[];
            
            setCategories(uniqueCategories);
            setPosts(postsData);
            setTotalPosts(total);
            setTotalPages(pages);
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPosts([]);
            setTotalPosts(0);
            setTotalPages(0);
        } finally {
            setLoading(false);
        }
    };

    // Filter posts based on selected category and status
    const filteredPosts = posts.filter(post => {
        const categoryMatch = selectedCategory === '' || post.category === selectedCategory;
        const statusMatch = selectedStatus === '' || post.status === selectedStatus;
        return categoryMatch && statusMatch;
    });

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(event.target.value);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePostClick = (postId: string) => {
        navigate(`/blog-post/${postId}`);
    };

    return (
        <>
            <div className="flex flex-col bg-midnight-800 text-offwhite-200">
                {/* header */}
                <div className="header-admin-style px-4 sm:px-10">
                    <div className="text-headline-3 sm:text-headline font-semibold">Article management</div>
                    <Button className="sm:w-auto w-full">Create article</Button>
                </div>
                
                {/* search and selection */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 sm:py-10 px-4 sm:px-10">
                    <SearchInput />
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-1/3">
                        <select 
                            className="w-full sm:w-1/2 p-2 border border-gold-600/30 rounded bg-midnight-700 text-offwhite-200"
                            value={selectedStatus}
                            onChange={handleStatusChange}
                        >
                            <option value="">Status</option>
                            <option value="draft">Draft</option>
                            <option value="publish">Publish</option>
                        </select>
                        <select 
                            className="w-full sm:w-1/2 p-2 border border-gold-600/30 rounded bg-midnight-700 text-offwhite-200"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="">Category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Desktop table view */}
                <div className="hidden sm:block">
                    {/* topic */}
                    <div className="flex flex-row gap-2 px-10 py-4 border-b border-gold-600">
                        <div className="w-2/3 text-body text-offwhite-400/60">Article title</div>
                        <div className="text-center w-1/6 text-body text-offwhite-400/60">Category</div>
                        <div className="text-center w-1/6 text-body text-offwhite-400/60">Status</div>
                        <div className="flex flex-row gap-2 justify-around w-1/12">
                        </div>
                    </div>

                    {/* map article */}
                    {loading ? (
                        <div className="flex justify-center items-center py-8">
                            <div className="text-offwhite-400">Loading...</div>
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="flex justify-center items-center py-8">
                            <div className="text-offwhite-400">No articles found</div>
                        </div>
                    ) : (
                        filteredPosts.map((post) => (
                            <div key={post.id} className="flex flex-row items-center gap-2 px-10 py-4 border-b border-gold-600">
                                <div className="w-2/3">
                                    <button 
                                        onClick={() => handlePostClick(post.id)}
                                        className="text-left hover:text-gold-600 transition-colors duration-200"
                                    >
                                        {post.title}
                                    </button>
                                </div>
                                <div className="text-center w-1/6">{post.category}</div>
                                <div className="text-center w-1/6">{post.status}</div>
                                <div className="flex flex-row gap-2 justify-around w-1/12">
                                    <Pencil className="w-4 h-4 text-gold-600 cursor-pointer" />
                                    <Trash className="w-4 h-4 text-red-500 cursor-pointer" />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Mobile card view */}
                <div className="sm:hidden px-4 space-y-4">
                    {loading ? (
                        <div className="flex justify-center items-center py-8">
                            <div className="text-offwhite-400">Loading...</div>
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="flex justify-center items-center py-8">
                            <div className="text-offwhite-400">No articles found</div>
                        </div>
                    ) : (
                        filteredPosts.map((post) => (
                            <div key={post.id} className="border border-gold-600/30 rounded-lg p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 
                                        className="font-semibold text-offwhite-200 hover:text-gold-600 transition-colors duration-200 cursor-pointer"
                                        onClick={() => handlePostClick(post.id)}
                                    >
                                        {post.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <Pencil className="w-4 h-4 text-gold-600 cursor-pointer" />
                                        <Trash className="w-4 h-4 text-red-500 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="flex gap-2 text-sm text-offwhite-400/60">
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.status}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination */}
                {!loading && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 py-6 px-4 sm:px-10">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="border-gold-600/30 text-offwhite-200 hover:bg-gold-600/20 disabled:opacity-50"
                        >
                            Previous
                        </Button>
                        
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <Button
                                    key={page}
                                    variant={currentPage === page ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => handlePageChange(page)}
                                    className={
                                        currentPage === page
                                            ? "bg-gold-600 text-midnight-800 hover:bg-gold-500"
                                            : "border-gold-600/30 text-offwhite-200 hover:bg-gold-600/20"
                                    }
                                >
                                    {page}
                                </Button>
                            ))}
                        </div>
                        
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="border-gold-600/30 text-offwhite-200 hover:bg-gold-600/20 disabled:opacity-50"
                        >
                            Next
                        </Button>
                    </div>
                )}

                {/* Posts count */}
                {!loading && (
                    <div className="text-center text-offwhite-400/60 text-sm pb-4 px-4 sm:px-10">
                        Showing {posts.length} of {totalPosts} posts
                    </div>
                )}
            </div>
        </>
    )
}