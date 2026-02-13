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

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    async function getPostData() {
        try {
            const response = await axios.get(
                `${API_BASE_URL}/posts?id=${params.id}`,
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