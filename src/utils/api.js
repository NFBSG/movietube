import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTM0YmU2MzkyMGFkODk4ZjQ4MjJiY2QyMGI5ZGY1NSIsInN1YiI6IjY0OTk4ZGFhNjJmMzM1MDBlOTEzN2I4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pQgWJmDHQmV9t3jyMudncuQSrfKIlhK2fngSfJCmWCQ";
const headers ={
    Authorization:"Bearer "+TMDB_TOKEN,
}
export const fetchDataFromApi = async(url,params)=>{
    try{
        const {data}=await axios.get(BASE_URL + url,{
            headers,
            params
        });
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
};