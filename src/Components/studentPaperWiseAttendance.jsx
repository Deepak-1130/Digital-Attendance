import React from "react";
import useEffect from "react";

const StudentPaperWiseAttendance = ({studentId}) => {
    const [paperWiseAttendance, setPaperWiseAttendance] = React.useState([]);
    useEffect(()=>{
        
const fetchPaperWiseAttendance = async () =>{
    try{
        const res = await axios.get(`http://localhost:8080/getSubjectByClassId/${studentId}`);
setPaperWiseAttendance(res.data);   
     }catch(err){
        console.error("error fetching paper wise attendance:",err)
     }
     finally{
        
     }

    }
fetchPaperWiseAttendance();
    },[studentId]);
    return(
        <div>
            <h1>Subjectwise Attendance</h1>
        </div>
    )
}
export default StudentPaperWiseAttendance;
