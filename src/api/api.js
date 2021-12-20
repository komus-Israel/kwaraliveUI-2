const { default: axios } = require("axios")


const localApi = 'http://localhost:5000/v1/'
const prodApi = 'https://kwaralive.herokuapp.com/v1/'




//  Post request to register users
export const registerUsers=(data)=>
    axios.post(
        `${localApi}user/register`,
        JSON.stringify(data)
    ).then(response=>response.message)