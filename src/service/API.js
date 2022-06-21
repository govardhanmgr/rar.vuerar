import axios from 'axios'

export default(url='http://localhost:3000/reg')=>{
    return axios.create({
        baseURL: url,
       // withCredentials: false
    })
}