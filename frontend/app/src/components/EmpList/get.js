import axios from "axios";
async function  getData(setloading,setdata)
{ 
    setloading(true);
    try{
        
        const response = await axios.get("https://dealsdray-test-rglo.onrender.com/getEmployees");
        setdata(response.data.data);
        setloading(false);
    }
    catch(error)
    {
        console.error("Error fetching data",error);
        setloading(false);
    }
}
export default getData;