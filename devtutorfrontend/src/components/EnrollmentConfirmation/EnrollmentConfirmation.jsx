import React from 'react';
import {useNavigate} from 'react-router-dom'
const EnrollmentComponent = () => {

 const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <div style={{ marginTop: '20px', fontSize: '32px', color: 'green',fontWeight:20 }}>
          You have successfully enrolled for this course
        </div>

        <button onClick={()=>navigate("/dashboard")} style={{marginTop: '50px', padding:10 ,width:'10%',backgroundColor:" #28a745",color:"white"}}> Go back </button>
    
    </div>
  );
};

export default EnrollmentComponent;
