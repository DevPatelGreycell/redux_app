import { useParams } from "react-router-dom";

export default function Profile()
{   
    const {id}= useParams()
    console.log("param value : " , id)
    return(
        <h2>{id}</h2>
    )
}