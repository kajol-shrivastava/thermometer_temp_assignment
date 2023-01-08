import react from "react"
import axios from "axios"

const BarChart=function (){
    const getData = async() => {
        let  data=await axios.get("http://localhost:5000/temp")
        console.log(data)
        };
    //    getCustomersData();
    return (
        <div>
            
            <input class="sub" type="submit" value="show Chart" onClick={()=>getData()}/>

        </div>
    )
}

export default BarChart