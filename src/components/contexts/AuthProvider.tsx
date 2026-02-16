import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import axiosInstance from '@/lib/axios';

interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    profile_pic?: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (token: string, refreshToken: string, user: User) => Promise<void>;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
    refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Token management functions
const tokenManager = {
    // Store tokens and user data
    storeTokens: (token: string, refreshToken: string, user?: User) => {
        localStorage.setItem('token', token);
        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
        }
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    },

    // Clear all tokens and user data
    clearTokens: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    },

    // Get stored tokens and user data
    getStoredData: () => {
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');

        if (token) {
            let user = null;
            if (userStr) {
                try {
                    user = JSON.parse(userStr);
                } catch (error) {
                    console.error('Error parsing stored user data:', error);
                    // Clear invalid user data but keep token
                    localStorage.removeItem('user');
                }
            }
            return { token, user };
        }
        return null;
    },

    // Update stored user data
    updateStoredUser: (user: User) => {
        localStorage.setItem('user', JSON.stringify(user));
    }
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshUserData = async () => {
        try {
            const response = await axiosInstance.get(`/auth/get-user`);
            
            if (response.data) {
                const userData = response.data;
                // Update state
                setUser(userData);
                // Update localStorage
                tokenManager.updateStoredUser(userData);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const initAuth = async () => {
            const storedData = tokenManager.getStoredData();
            
            if (storedData) {
                setToken(storedData.token);
                setUser(storedData.user);
                setIsAuthenticated(true);
                // Always fetch fresh data from server
                await refreshUserData();
            } else {
                setLoading(false);
            }
        };
        initAuth();
    }, []);

    const login = async (token: string, refreshToken: string, user: User) => {
        console.log('AuthProvider login function called with:', { token, refreshToken, user }); // Debug log
        
        // Use token manager to store data
        tokenManager.storeTokens(token, refreshToken, user);

        setToken(token);
        setUser(user);
        setIsAuthenticated(true);
        
        // Fetch fresh user data from server after login
        try {
            await refreshUserData();
        } catch (error) {
            console.error('Error refreshing user data after login:', error);
            // If API call fails, use the user data from login response
            setLoading(false);
        }
    };

    const logout = () => {
        // Use token manager to clear data
        tokenManager.clearTokens();

        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
    };

    const updateUser = (updatedUser: Partial<User>) => {
        if (user) {
            const newUser = { ...user, ...updatedUser };
            setUser(newUser);
            // Use token manager to update stored user data
            tokenManager.updateStoredUser(newUser);
        }
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            user,
            token,
            loading,
            login,
            logout,
            updateUser,
            refreshUserData,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Export token manager for direct access if needed
export { tokenManager };