import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, User } from "lucide-react";
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
                <h2 className="text-xl font-semibold text-galactic-teal">Reset Password</h2>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-space-600 border border-white/10 flex items-center justify-center">
                    <User className="text-galactic-teal w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-silver-400">Current Password</label>
                    {error.password && <p className="text-body-3 text-red-500">{error.password}</p>}
                    <Input
                        type="password"
                        placeholder="Enter current password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error.password) setError({ ...error, password: "" });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-silver-400">New Password</label>
                    {error.newPassword && <p className="text-body-3 text-red-500">{error.newPassword}</p>}
                    <Input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            if (error.newPassword) setError({ ...error, newPassword: "" });
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-silver-400">Confirm New Password</label>
                    {error.confirmNewPassword && <p className="text-body-3 text-red-500">{error.confirmNewPassword}</p>}
                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmNewPassword}
                        onChange={(e) => {
                            setConfirmNewPassword(e.target.value);
                            if (error.confirmNewPassword) setError({ ...error, confirmNewPassword: "" });
                        }}
                    />
                </div>

                <Button
                    className="w-full sm:w-fit"
                    onClick={handleClickPasswords}
                >
                    Update Password
                </Button>
            </div>

            {/* alert resetpassword */}
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent className="bg-space-800 rounded-2xl border border-white/10 pt-16 pb-6 max-w-104 sm:max-w-lg flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <AlertDialogTitle className="text-xl sm:text-3xl font-semibold pb-2 text-center text-silver-100 px-4">
                        Reset Password
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2 text-silver-300 text-sm sm:text-base">
                        <span>Do you want to reset your password?</span>
                    </AlertDialogDescription>
                    <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none text-silver-400 hover:text-silver-100">
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
