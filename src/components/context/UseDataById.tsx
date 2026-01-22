import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Post {
    id: number;
    image: string;
    alt: string;
    category: string;
    title: string;
    description: string;
    imgAuthor: string;
    author: string;
    date: string;
    likes: number;
    content: string;
}

export const DataByIdContext = createContext<Post[]>([]);

export function DataById({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const [data, setData] = useState<Post[]>([]);

    async function getPostData() {
        try {
            const response = await axios.get(
                `https://blog-post-project-api.vercel.app/posts?id=${params.id}`,
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
        <DataByIdContext.Provider value={data}>
            {children}
        </DataByIdContext.Provider>
    )
}