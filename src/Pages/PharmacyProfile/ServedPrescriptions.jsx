import './PharmacyProfile.css'
import { usePharmacy } from '../../PharmacyContext'
const ServedPrescriptions = () => {
const  { pharmacyId } = usePharmacy()
return(
    <>
    <div className="container pharmacy_profile">
        <div className="row">
            <div className="col-10 offset-1">
                <h6 className="text-start py-2 text-primary">
                    Pharmacy ID: {pharmacyId}
                </h6>
 <h4 className="text-center py-5">
        Served Prescription
    </h4>
            </div>
        </div>
    </div>
   
    </>
)
}

export default ServedPrescriptions