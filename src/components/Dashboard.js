import axios from "axios";
import { useEffect, useState } from "react";


function Dashboard(){
    const [list,setList]=useState([])
    const [person,setPerson]=useState({})
    const [location,setLocation]=useState('');
    const[interest,setInterest]=useState("")
    const [place,setPlace]=useState('')

    useEffect(()=>{
        getperson();
        getlist();
    },[])

    async function getlist(){
        console.log(location);
        console.log(interest)
        var res = await axios.get("http://localhost:3004/meetup",{params:{
            title:"music",
            location:"banglore"
        }})
        setList(res.data);
    }

    async function getperson(){
        var res = await axios.get("http://localhost:3004/person/1");
        console.log(res.data.location);
        setPerson(res.data)
        setLocation(res.data.location);
        setInterest(res.data.interest)
    }

    async function handlechange(){
        await axios.put("http://localhost:3004/person/1",{
            ...person,
            location:place
        })
        // getperson();
        // getlist();
    }

    return(
        <div>
            <div>change location here</div>
            <input type="text" placeholder="location" onChange={(e)=>setPlace(e.target.value)}/>
            <button onClick={handlechange}>change</button>
            {list.map((el)=>{
                return(
                    <div key={el.id}>
                        <div>{el.titel}</div>
                        <div>{el.discription}</div>
                        <div>{el.date}</div>
                        <div>{el.location}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Dashboard;