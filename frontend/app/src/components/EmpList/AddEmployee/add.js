import axios from 'axios';
import { successfunction,errorfunction } from '../../../toast';
 function addData(data,setloading,link)
{
    console.log(link);
  const flag=validations(data)
  if(flag){
    setloading(true);
    axios.post(`http://localhost:5000/${link}`, data)
   .then(response => {
     if(response.data.status)
     {

       setloading(false)
       successfunction(response.data.msg)
     }
     else{
       setloading(false)
       errorfunction(response.data.msg)
     }
  })
  .catch(error => {
   errorfunction('Something went wrong')
  });
  }
}
export default addData;
function validations(data)
{
    if(data.name.trim().length==0 || data.email.trim().length==0 || data.number.trim().length==0 || data.Designation.trim().length==0 || data.skills.length==0 || data.gender.trim().length==0 )

    {
        errorfunction('All fields are required')
        return false;
    }
    
   
    else if (data.number.length > 10 || data.number.length < 10) {
        errorfunction("Please Provide a valid number");
        return false;
    }
     else if (!mailtest(data.email)) {
        return false;
    }
   
    return true;
}
export function mailtest(email)
{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!(emailRegex.test(email))) {
  toastfail('Invalid email address');
  return false;
} 
return true
}


export function imageupload(formData, data, image, setdata, setloading) {
  if (image) {
    setloading(true);  // Start loading

    // Sending the formData containing the image file to the server
    axios.post('http://localhost:5000/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  // Important for file uploads
      },
    })
      .then(response => {
        if (response.data.status) {
          console.log(response.data.img[0]);
          setdata({ ...data, img: response.data.img[0] });  // Update the state with the image URL
          successfunction('Image uploaded successfully');
        } else {
          errorfunction('Image upload unsuccessful');
        }
        setloading(false);  // Stop loading
      })
      .catch(error => {
        console.error(error);
        errorfunction('An error occurred during upload');
        setloading(false);  // Stop loading on error
      });
  } else {
    errorfunction('Please provide a valid image');
  }
}

export async function deleteData(data,setloading,id)
{
  setloading(true);  
 try{
  const res=await axios.post('http://localhost:5000/deleteEmployee',data[id]);
  if(res.data.status)
  { 
    successfunction('Employee successfully deleted ')
  }
  else{
    errorfunction('Something went wrong')
  }
 }
 catch(error)
 {
  console.log(error.message);
  errorfunction('Something went wrong')
 }
 setloading(false);
}