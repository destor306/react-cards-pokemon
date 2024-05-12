import { useEffect, useState } from "react";

const useFlip = (initialState) =>{
    const [isFlip, setisFlip] = useState(initialState);
    const flipCard = () =>{
        setisFlip(isFlip => !isFlip)
    }

    return [isFlip, flipCard]
}

export default useFlip;