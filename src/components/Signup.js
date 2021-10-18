import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import axios from "axios"

function Signup(){
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [location,setLocation]=useState("");
    const [interest,setInterest]=useState("");

    const {handleclick}=useContext(AuthContext);

    async function handlesubmit(){
        handleclick();
        await axios.post("http://localhost:3004/person",{
            name:name,
            age:age,
            location:location,
            interest:interest,
        })
    }


    return(
        <div>
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
            <br/>
            <input type="text" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}/>
            <br/>
            <input type="text" placeholder="Enter location" onChange={(e)=>setLocation(e.target.value)}/>
            <br/>
            <input type="text" placeholder="Enter interest" onChange={(e)=>setInterest(e.target.value)}/>
            <br/>
            <button onClick={handlesubmit}>submit</button>
        </div>
    )
}
export default Signup;