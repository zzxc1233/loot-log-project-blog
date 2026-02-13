import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CircleCheck } from 'lucide-react';
import axios from "axios";
import { toast } from "sonner";

function Login() {
    const navigate = useNavigate();

    const [submit, setSubmit] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        username: "",
        password: "",
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

        e.preventDefault();
        let isError = false;
        let newError = { username: "", password: "" };

        if (!username.trim()) {
            newError.username = "Email is required";
            isError = true;
        }
        if (!password.trim()) {
            newError.password = "Password is required";
            isError = true;
        }

        setError(newError);
        if (isError) {
            return; // Return early if validation fails
        }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {

            const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
            if (response.status === 200 || response.status === 201) {
                setSubmit(true);
                toast.success("Login successful", {
                    duration: 5000,
                });
                navigate("/member");
            }
        } catch (error: any) {
            const errorMessage = error.response?.data?.error || "An unexpected error occurred";
            toast.error(errorMessage);
            return ({
                message: `Error: ${errorMessage}`
            })
        }

    }

    return (
        <>
            <div className="bg-space-900 min-h-screen flex flex-col justify-center items-center px-4 sm:px-0">
                <div className="flex flex-col gap-4 justify-center items-center py-8 sm:py-12 bg-space-800 w-full sm:w-3/4 md:w-1/2 mx-auto rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <p className="text-headline-3 sm:text-headline font-semibold text-silver-100 pb-2 sm:pb-4">Log In</p>
                    {!submit ? (
                        <>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4 sm:gap-6 w-11/12 sm:w-2/3"
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="username" className="text-silver-200 font-medium">Email</label>
                                    {error.username && <p className="text-body-3 text-red-500">{error.username}</p>}
                                    <Input
                                        type="text"
                                        id="username"
                                        name="email"
                                        placeholder="Email"
                                        className="mb-4"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                            if (error.username) setError({ ...error, username: "" })
                                        }}
                                    />
                                    <label htmlFor="password" className="text-silver-200 font-medium">Password</label>
                                    {error.password && <p className="text-body-3 text-red-500">{error.password}</p>}
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className="mb-4"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            if (error.password) setError({ ...error, password: "" })
                                        }}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-1/3 m-auto"
                                    variant="default"
                                >
                                    Log In
                                </Button>
                            </form>

                            <div>
                                <p className="text-body-3 sm:text-body-2 text-silver-300">Don't have an account ?
                                    <span className="text-galactic-teal cursor-pointer hover:underline font-semibold"
                                        onClick={() => navigate("/signup")}
                                    > Sign Up</span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center py-4 px-4">
                            <CircleCheck className="text-galactic-teal" size={96} />
                            <p className="text-headline-4 sm:text-headline-3 font-semibold text-silver-100 text-center">Login success</p>
                            <Button
                                onClick={() => navigate("/member")}
                                className="w-full sm:w-2/3 m-auto"
                                variant="default"
                            >
                                Continue
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Login
