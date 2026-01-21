import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [error, setError] = useState({
        password: "",
        newPassword: "",
        confirmNewPassword: "",
    });
    const [open, setOpen] = useState(false);

    function handleClickPasswords() {
        let isError = false;
        let newError = { ...error };

        if (!password.trim()) {
            newError.password = "Password is required";
            isError = true;
        }
        if (!newPassword.trim()) {
            newError.newPassword = "New password is required";
            isError = true;
        }
        if (!confirmNewPassword.trim()) {
            newError.confirmNewPassword = "Confirm new password is required";
            isError = true;
        }
        if (newPassword !== confirmNewPassword) {
            newError.confirmNewPassword = "Passwords do not match";
            isError = true;
        }

        setError(newError);
        if (!isError) {
            setOpen(true);
        }
    }

    function handleResetPassword() {
        // TODO: Reset password logic here
        console.log("Password reset:", { password, newPassword });
        setOpen(false);
        // Clear form
        setPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    }

    return (
        <>
            <div className="flex flex-col gap-6 max-w-lg">
                <h2 className="text-xl font-semibold text-gold-400">Reset Password</h2>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-offwhite-400">Current Password</label>
                    {error.password && <p className="text-body-3 text-red-500">{error.password}</p>}
                    <Input
                        type="password"
                        placeholder="Enter current password"
                        className="border-gold-400/30 bg-midnight-700 text-offwhite-200 px-4 py-3 rounded-lg placeholder:text-offwhite-400/50 focus:border-gold-400"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error.password) setError({ ...error, password: "" });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-offwhite-400">New Password</label>
                    {error.newPassword && <p className="text-body-3 text-red-500">{error.newPassword}</p>}
                    <Input
                        type="password"
                        placeholder="Enter new password"
                        className="border-gold-400/30 bg-midnight-700 text-offwhite-200 px-4 py-3 rounded-lg placeholder:text-offwhite-400/50 focus:border-gold-400"
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            if (error.newPassword) setError({ ...error, newPassword: "" });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-offwhite-400">Confirm New Password</label>
                    {error.confirmNewPassword && <p className="text-body-3 text-red-500">{error.confirmNewPassword}</p>}
                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        className="border-gold-400/30 bg-midnight-700 text-offwhite-200 px-4 py-3 rounded-lg placeholder:text-offwhite-400/50 focus:border-gold-400"
                        value={confirmNewPassword}
                        onChange={(e) => {
                            setConfirmNewPassword(e.target.value);
                            if (error.confirmNewPassword) setError({ ...error, confirmNewPassword: "" });
                        }}
                    />
                </div>

                <Button
                    className="w-fit bg-gold-600 hover:bg-gold-500 text-midnight-900 font-semibold px-10 py-2 rounded-full mt-2 cursor-pointer"
                    onClick={handleClickPasswords}
                >
                    Update Password
                </Button>
            </div>

            {/* alert resetpassword */}
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="bg-midnight-800 rounded-md border border-gold-600 pt-16 pb-6 max-w-104 sm:max-w-lg flex flex-col items-center">
                    <AlertDialogTitle className="text-xl sm:text-3xl font-semibold pb-2 text-center text-offwhite-300 px-4">
                        Reset Password
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2 text-offwhite-300 text-sm sm:text-base">
                        <span>Do you want to reset your password?</span>
                    </AlertDialogDescription>
                    <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none">
                        <X className="h-6 w-6" />
                    </AlertDialogCancel>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleResetPassword}>Reset Password</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default ResetPassword;
