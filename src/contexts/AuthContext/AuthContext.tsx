import React, { createContext, useContext, useState } from "react";
import { getToken, isTokenExpired } from '~/utils/tokenService'

type AuthContextType = {
    isAuthenticated: boolean;
    authenticate: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    authenticate: () => { },
    logout: () => { },
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>((): boolean => {
        const token = getToken();
        if (token && !isTokenExpired()) {
            return true;
        }
        return false;
    });

    const authenticate = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('AuthContext is NULL');
    }

    return context;
}

export { AuthProvider, useAuth }