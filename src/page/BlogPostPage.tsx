import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogPost from "../components/common/BlogPost";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function BlogPostPage() {
    const params = useParams();
    const [data, setData] = useState([]);

    async function getPostData() {
        try {
            const response = await axios.get(
                `https://blog-post-project-api.vercel.app/posts?${params.id}`,
            );
            setData(response.data.posts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="bg-midnight-900 min-h-screen">
                {data
                    .filter((post: any) => post.id == params.id)
                    .map((post: any) => (
                        <BlogPost key={post.id} {...post} />
                    ))}
            </div>
            <Footer />
        </>
    );
}

export default BlogPostPage;
