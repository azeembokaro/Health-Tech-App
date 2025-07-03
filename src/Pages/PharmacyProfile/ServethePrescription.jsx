import { useState } from 'react';
import axios from 'axios';
import './PharmacyProfile.css';
import { usePharmacy } from '../../PharmacyContext'

const ServethePrescription = () => {
  const  { pharmacyId } = usePharmacy()
  const [pid, setPid] = useState('');
  const [activePrescriptionId, setActivePrescriptionId] = useState('');

  const [medicines, setMedicines] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePid = (event) => setPid(event.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMedicines([]);
    setSelectedItems([]);
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/pharmacyapi/medicineswritten`,
        { params: { prescriptionId: pid } }
      );
      const medicinesWithFields = response.data.map(med => ({
        ...med,
        quantity: 1,
        price: 0,
        selected: false,
      }));
      setMedicines(medicinesWithFields);
      setActivePrescriptionId(pid);
    } catch (err) {
      setError(err.response?.data || 'Something went wrong');
    } finally {
      setLoading(false);
    }

    setPid('');
  };

  const handleProvide = async () => {
  const totalAmount = selectedItems.reduce((sum, i) => sum + i.quantity * i.price, 0);

  const payload = {
    prescriptionId: activePrescriptionId,
    pharmacyId: pharmacyId,
    totalAmount: totalAmount,
  };

  try {
    const res = await axios.post('http://localhost:8080/transactionapi/pharmaTransaction', payload);
    alert('Transaction saved successfully!');
    // Optionally reset state
    setMedicines([]);
    setSelectedItems([]);
  } catch (error) {
    alert('Transaction failed: ' + (error.response?.data || 'Unknown error'));
  }
};


  const handleCheckboxChange = (index) => {
    const updated = [...medicines];
    updated[index].selected = !updated[index].selected;
    setMedicines(updated);

    const updatedSelected = updated.filter(med => med.selected);
    setSelectedItems(updatedSelected);
  };

  const handleQuantityPriceChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);

    const updatedSelected = updated.filter(med => med.selected);
    setSelectedItems(updatedSelected);
  };

  return (
    <div className="container pharmacy_profile">
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="text-center py-4">Serve The Prescription</h2>
          <h3 className="text-center py-4 text-primary">
                    The Pharmacy ID is: {pharmacyId}
                </h3>

          <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center justify-content-between gap-3 my-4">
              <label htmlFor="pid" className="me-2 fw-semibold">
                Enter Prescription ID
              </label>
              <input
                type="text"
                name="pid"
                id="pid"
                value={pid}
                onChange={handlePid}
                className="form-control me-2"
                style={{ width: '250px' }}
                required
              />
              <button className="btn btn-info">Submit</button>
            </div>
          </form>

          {loading && <p className="text-primary">Loading medicines...</p>}
          {error && <p className="text-danger">Error: {error}</p>}

          {medicines.length > 0 && (
            <div className="mt-4">
              <h4 className="text-success mb-3">Prescribed Medicines</h4>
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>From Date</th>
                    <th>End Date</th>
                    <th>Frequency</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {medicines.map((med, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={med.selected || false}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </td>
                      <td>{med.name}</td>
                      <td>{med.type}</td>
                      <td>{med.fromDate}</td>
                      <td>{med.endDate}</td>
                      <td>{med.frequency}</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          value={med.quantity}
                          onChange={(e) =>
                            handleQuantityPriceChange(index, 'quantity', e.target.value)
                          }
                          disabled={!med.selected}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          className="form-control"
                          value={med.price}
                          onChange={(e) =>
                            handleQuantityPriceChange(index, 'price', e.target.value)
                          }
                          disabled={!med.selected}
                        />
                      </td>
                      <td>{med.comments || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedItems.length > 0 && (
            <div className="mt-5">
              <h4 className="text-warning mb-3">🛒 Medicines Cart</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                    <th>Total (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedItems.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity * item.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="3" className="text-end">Grand Total:</th>
                    <th>
                      ₹{selectedItems.reduce((sum, i) => sum + (i.quantity * i.price), 0)}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>


        {selectedItems.length > 0 && (
  <>
    {/* ... existing cart table */}
    <div className="text-center my-sm-5 my-3">
      <button className="btn btn-success px-4 py-2" onClick={handleProvide}>
        Provide
      </button>
    </div>
  </>
)}

      </div>
    </div>
  );
};

export default ServethePrescription;
