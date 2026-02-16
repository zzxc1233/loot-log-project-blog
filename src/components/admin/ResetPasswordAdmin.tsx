import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTitle
} from "../ui/alert-dialog";
import { useState } from "react";

export default function ResetPasswordAmin() {
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
        let newError = { password: "", newPassword: "", confirmNewPassword: "" };

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
        // console.log("Password reset:", { password, newPassword });
        setOpen(false);
        // Clear form
        setPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    }

    return (
        <>
            <div className="flex flex-col bg-midnight-800 text-offwhite-200">
                {/* header */}
                <div className="header-admin-style px-4 sm:px-10">
                    <div className="text-headline-3 sm:text-headline font-semibold">Reset Password</div>
                    <Button
                        className="w-20 sm:w-auto hidden sm:block"
                        onClick={handleClickPasswords}
                    >
                        Update Password
                    </Button>
                </div>

                {/* body */}
                <div className="flex flex-col gap-2 p-4 sm:p-10">
                    <label className="text-sm font-medium">Current Password</label>
                    {error.password && <p className="text-body-3 text-red-500">{error.password}</p>}
                    <Input
                        type="password"
                        placeholder="Enter current password"
                        className="mb-4 w-full sm:w-1/2"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error.password) setError({ ...error, password: "" });
                        }}
                    />

                    <label className="text-sm font-medium">New Password</label>
                    {error.newPassword && <p className="text-body-3 text-red-500">{error.newPassword}</p>}
                    <Input
                        type="password"
                        placeholder="Enter new password"
                        className="mb-4 w-full sm:w-1/2"
                        value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                            if (error.newPassword) setError({ ...error, newPassword: "" });
                        }}
                    />

                    <label className="text-sm font-medium">Confirm New Password</label>
                    {error.confirmNewPassword && <p className="text-body-3 text-red-500">{error.confirmNewPassword}</p>}
                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        className="mb-4 w-full sm:w-1/2"
                        value={confirmNewPassword}
                        onChange={(e) => {
                            setConfirmNewPassword(e.target.value);
                            if (error.confirmNewPassword) setError({ ...error, confirmNewPassword: "" });
                        }}
                    />
                    <Button
                    className="w-full sm:w-auto block sm:hidden"
                    onClick={handleClickPasswords}
                >
                    Update Password
                </Button>
                </div>
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
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleResetPassword}>Reset Password</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}