const { default: axios } = require("axios")


const localApi = 'http://localhost:5000/v1/'
const prodApi = 'https://kwaralive.herokuapp.com/v1/'

const headers = {
    'Content-Type': 'application/json'
}




//  Post request to register users
export const registerUsers=(data)=>
    axios.post(
        `${localApi}user/register`,
        JSON.stringify(data),
        {headers}
    ).then(res=>res.data)