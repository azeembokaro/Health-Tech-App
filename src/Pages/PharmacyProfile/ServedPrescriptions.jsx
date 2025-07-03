import './PharmacyProfile.css'
import { usePharmacy } from '../../PharmacyContext'
const ServedPrescriptions = () => {
const  { pharmacyId } = usePharmacy()
return(
    <>
    <div class="container pharmacy_profile">
        <div class="row">
            <div class="col-10 offset-1">
                <h3 className="text-center py-4 text-primary">
                    The Pharmacy ID is: {pharmacyId}
                </h3>
 <h4 class="text-center py-5">
        Served Prescription
    </h4>
            </div>
        </div>
    </div>
   
    </>
)
}

export default ServedPrescriptions