import react from "react"
import axios from "axios"
import { useState ,useEffect} from "react";
import Chart from "react-apexcharts"

const BarChart=function (){
const [tempdata,setTempData]=useState([])
const [valdata, setValData]=useState([])

    useEffect(()=>{
        const temp=[];
        const val=[]
        const getData = async() => {
           
            let  data=await fetch("http://localhost:5000/temp")
            //console.log(data)
            let resdata=await data.json()
           // console.log(resdata.data)
           resdata=resdata.data
            for(let i=0;i<resdata.length;i++){
                console.log(resdata[i])
                temp.push(resdata[i].val)
                val.push(resdata[i].ts)
            }
            setTempData(temp)
            setValData(val)
            console.log(temp,val)
            };
        getData();
        console.log(temp,val)
    },[]);
    return (
        <div>
            
            {/* <input class="sub" type="submit" value="show Chart" /> */}
        <Chart
        type="bar"
        width={900}
        height={300}

        series={[{
            name:"temperature",
            data:tempdata
        }
        ]}


        options={{
            title:{text:"temperature data bar graph"},
            style:{fontSize:30},
            xaxis:{
                categories:[1,2,3,4,5,6,7,8,9,10,11,12]
            }
        }}

        
        
        >

        </Chart>

        </div>
    )
}

export default BarChart