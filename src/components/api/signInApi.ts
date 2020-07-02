import axios from "axios";
import { ProfileType } from "../../Redux/profileReducer";


const instance = axios.create({
    baseURL : 'https://cards-nya-back.herokuapp.com/1.0/'

});


type getProfileType = ProfileType & {error: string}

export const signInApi = {   
         async signIn(email: string, password: string, rememberMe: boolean) {
             return await instance.post<getProfileType>(`auth/login`, {email, password, rememberMe})
          
        }         
}

