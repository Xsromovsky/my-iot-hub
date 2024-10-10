import axios from 'axios'
import { LoginResponse, User, UserLogin } from '../utils/userTypes'


const URL = 'http://localhost:3200/api'

export const loginUser = async (user: UserLogin): Promise<LoginResponse> => {
    const response = await axios.post(`${URL}/auth/login`, user);

    return response.data
}