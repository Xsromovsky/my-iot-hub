import { useEffect, useState } from "react";


function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access_token'))


    useEffect(() => {
        const handleStorageChange = () => {
            const accessToken = localStorage.getItem('access_token');
            setIsAuthenticated(!!accessToken);
        }

        window.addEventListener('storage', handleStorageChange)
        handleChange()
        
        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    },[])

    const handleChange = () => {
        setIsAuthenticated(!isAuthenticated)
    }

    return {
        isAuthenticated,
        handleChange
    }
}
export default useAuth;