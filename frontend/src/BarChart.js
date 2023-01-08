import react from "react"

const BarChart=function (){
    const getCustomersData = () => {
        axios
        .get("localhost:5000/temp")
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
        };
       getCustomersData();
    return (
        <div>
            
            <input class="sub" type="submit" value="show Chart" />

        </div>
    )
}

export default BarChart