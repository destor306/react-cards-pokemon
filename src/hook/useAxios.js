import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (baseurl) =>{
    const [responses, setResponse] = useState([]);

    const addResponseData = async (resUrl="")=>{
        const response = await axios.get(`${baseurl}${resUrl}`);
        setResponse(data => [...data, response.data] )

    } 
    
    return [responses, addResponseData]
}

export default useAxios;