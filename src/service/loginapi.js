import API from './API'
// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
export default{
    getvalues(){
        return API('http://localhost:3000/').get('/reg')
    },
    getQuote(){
        return API('http://localhost:3000/').get('/reg')
    },
    createpost(data){
        return API('http://localhost:3000/').post('/reg',data)
    }
}