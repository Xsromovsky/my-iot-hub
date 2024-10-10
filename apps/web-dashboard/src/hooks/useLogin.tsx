import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { loginUser } from "../api/loginApi";
import { LoginResponse, User } from "../utils/userTypes";


const storeTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
}

export const useLogin = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            storeTokens(data.access_token, data.refresh_token)
            navigate({to: '/home', replace: true})
        },
        onError: (error) => {
            console.error('Error logging in:', error)
        }
    })
}