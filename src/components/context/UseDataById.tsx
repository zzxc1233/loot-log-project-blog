import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DataByIdContext = createContext<any>(null);

export function DataById({ children }: { children: React.ReactNode }) {
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
        <DataByIdContext.Provider value={data}>
            {children}
        </DataByIdContext.Provider>
    )
}