import { registerUsers } from "./api/api";


export const handleUserRegistration=async(e,data)=>{
    e.preventDefault()
    const response = await registerUsers(data)
    console.log(response)
    
}