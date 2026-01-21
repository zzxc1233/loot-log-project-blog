import { createContext, useCallback } from "react";

export const ValidationEmailContext = createContext<(email: string) => boolean>(() => false);

export function ValidationEmail({ children }: { children: React.ReactNode }) {
    const validate = useCallback((email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }, []);

    return (
        <ValidationEmailContext.Provider value={validate}>
            {children}
        </ValidationEmailContext.Provider>
    );
}