import { useParams } from "react-router-dom";
import BlogPost from "../components/common/BlogPost";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useContext } from "react";
import { DataByIdContext } from "../components/contexts/UseDataById";

function BlogPostPage() {

    const data = useContext(DataByIdContext);
    const params = useParams();

    return (
        <>
            <Navbar />
            <div className="bg-midnight-900 min-h-screen">
                {data &&
                    data
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
