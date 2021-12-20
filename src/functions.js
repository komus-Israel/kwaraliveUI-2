import { registerUsers } from "./api/api";


export const handleUserRegistration=async(data)=>{
    const response = await registerUsers(data)
    console.log(response)
}