import { useState } from 'react'
import './PharmacyProfile.css'
const ServethePrescription = () => {
    const [pid,setpid] = useState("")

   

    const handlepid = (event) => {
     setpid(event.target.value)
    }

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pid);
        setpid("")
        
    }
return(
    <>
    <div class="container pharmacy_profile">

        <div class="row">
            <div class="col-10 offset-1">
<h2 class="text-center py-5">
        Serve The Prescription
    </h2>
<form onSubmit={handleSubmit}>
  <div className="d-flex align-items-center justify-content-between gap-3 my-5">
    <label htmlFor="pid" className="me-2">Enter Prescription ID</label>
    <input
      type="text"
      name="pid"
      id="pid"
      value={pid}
      onChange={handlepid}
      className="form-control me-2"
      style={{ width: "250px" }}
    />
    <button className="btn btn-info">Submit</button>
  </div>
</form>

            </div>
        </div>
    </div>
    
    </>
)
}

export default ServethePrescription