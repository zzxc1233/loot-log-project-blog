import { Heart, Facebook, Linkedin, Twitter, Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { useContext } from 'react';
import { DataByIdContext } from '../context/UseDataById';
import { useParams } from 'react-router-dom';
import { toast } from "sonner"


function CommentSection() {

    const data = useContext(DataByIdContext);
    const params = useParams();

    return (
        <>
            {data
                .filter((item: any) => item.id == params.id)
                .map((item: any) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <div className='flex items-center justify-between py-8 rounded-2xl'>
                            <Button variant="signup" className='flex items-center w-fit gap-2 px-4 py-1 rounded-2xl'>
                                <Heart className='text-red-500' />
                                <p className='text-body'>{item.likes}</p>
                            </Button>
                            <div className='flex items-center gap-4'>
                                <Button
                                    variant="signup"
                                    className='w-fit'
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href)
                                        toast.success("Copied!", {
                                            description: "This article has been copied to your clipboard",
                                            duration: 3000,
                                        })
                                    }}>
                                    <Copy /> Copy Link
                                </Button>
                                <Facebook className='text-blue-500' />
                                <Linkedin className='text-blue-500' />
                                <Twitter className='text-blue-500' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className="text-offwhite-300 text-body">Comments</p>
                            <form action=""
                                className='flex flex-col gap-4 py-4 '>
                                <textarea
                                    className="border rounded-2xl h-72 text-offwhite-300 bg-transparent p-4"
                                    placeholder='Add a comment'
                                    rows={4}
                                    cols={10} />
                                <Button
                                    variant="signup"
                                    className='w-fit'>Post Comment
                                </Button>
                            </form>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default CommentSection;