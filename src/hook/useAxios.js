import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (baseurl) =>{
    const [responses, setResponse] = useState([]);

    
    const addResponseData = async (data = "") => {
        const response = await axios.get(`${baseurl}${data}`);
        setResponse((prevData) => [...prevData, response.data]);
    };
    
    const clearResponseData = () =>{
        setResponse([]);
    }

    return [responses, addResponseData, clearResponseData]
}

export default useAxios;