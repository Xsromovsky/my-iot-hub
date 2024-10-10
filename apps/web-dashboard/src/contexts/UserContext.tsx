import { createContext, useContext } from "react";

type UserContextType = {
    logout: () => void;
}

type UserProviderProps = {
    children: React.ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
}

export const UserProvider = (props: UserProviderProps) => {

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        console.log('logged out');
        
    }


    return (
        <UserContext.Provider value={{ logout }}>
            {props.children}
        </UserContext.Provider>
    )
}
