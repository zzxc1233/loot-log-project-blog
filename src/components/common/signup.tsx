import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ValidationEmailContext } from "../context/validationEmail";
import { CircleCheck } from 'lucide-react';
import axios from "axios";
import { toast } from "sonner"

function SignUp() {

    const navigate = useNavigate();

    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const validationEmail = useContext(ValidationEmailContext);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let isError = false;
        let newError = { name: "", username: "", email: "", password: "" };

        if (!name.trim()) {
            newError.name = "Name is required";
            isError = true;
        }
        if (!username.trim()) {
            newError.username = "Username is required";
            isError = true;
        }
        if (!email.trim()) {
            newError.email = "Email is required";
            isError = true;
        } else if (!validationEmail(email)) {
            newError.email = "Email is invalid";
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
            const response = await axios.post(`${API_BASE_URL}/auth/register`, data);

            if (response.status === 201) {
                setSubmit(true);
                toast.success("User created successfully");
            } else {
                toast.error("Failed to create user");
                throw new Error('Failed to create user');
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
            <div className="bg-midnight-900 min-h-screen flex flex-col justify-center items-center px-4 sm:px-0">
                <div className="flex flex-col gap-4 justify-center items-center py-8 sm:py-12 bg-midnight-800 w-full sm:w-3/4 md:w-1/2 mx-auto rounded-2xl border border-gold-400/30">
                    <p className="text-headline-3 sm:text-headline font-semibold text-offwhite-200 pb-2 sm:pb-4">Sign Up</p>
                    {!submit ? (
                        <>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4 sm:gap-6 w-11/12 sm:w-2/3"
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-offwhite-200">Name</label>
                                    {error.name && <p className="text-body-3 text-red-500">{error.name}</p>}
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        className="mb-4"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                            if (error.name) setError({ ...error, name: "" });
                                        }}
                                    />

                                    <label htmlFor="username" className="text-offwhite-200">Username</label>
                                    {error.username && <p className="text-body-3 text-red-500">{error.username}</p>}
                                    <Input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        className="mb-4"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                            if (error.username) setError({ ...error, username: "" })
                                        }}
                                    />
                                    <label htmlFor="email" className="text-offwhite-200">Email</label>
                                    {error.email && <p className="text-body-3 text-red-500">{error.email}</p>}
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="mb-4"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            if (error.email) setError({ ...error, email: "" })
                                        }}
                                    />
                                    <label htmlFor="password" className="text-offwhite-200">Password</label>
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
                                    variant="default"
                                    className="w-full sm:w-1/3 m-auto"
                                >
                                    Sign Up
                                </Button>
                            </form>

                            <div>
                                <p className="text-body-3 sm:text-body-2 text-offwhite-200">Already have an account ?
                                    <span className="text-gold-400 cursor-pointer hover:underline"
                                        onClick={() => navigate("/login")}
                                    > Log In</span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center py-4 px-4">
                            <CircleCheck className="text-green" size={96} />
                            <p className="text-headline-4 sm:text-headline-3 font-semibold text-offwhite-200 text-center">Registration success</p>
                            <Button
                                onClick={() => navigate("/login")}
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

export default SignUp