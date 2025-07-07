import { useState } from 'react';
import axios from 'axios';
import { useLab } from "../../LabContext";
import './LabProfile.css'
const ServedDiagnosis = () => {
  const [pid, setPid] = useState('');
  const [activePrescriptionId, setActivePrescriptionId] = useState('');
  const [tests, setTests] = useState([]);
  const [selectedTests, setSelectedTests] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { diagnosticsId } = useLab();

  const handlePid = (e) => setPid(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setTests([]);
    setSelectedTests([]);
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:8080/labapi/labswritten', {
        params: { prescriptionId: pid }
      });

      const testsWithFields = response.data.map(test => ({
        ...test,
        quantity: 1,
        price: 0,
        selected: false,
      }));

      setTests(testsWithFields);
      setActivePrescriptionId(pid);
    } catch (err) {
      setError(err.response?.data || 'Something went wrong');
    } finally {
      setLoading(false);
    }

    setPid('');
  };

  const handleCheckboxChange = (index) => {
    const updated = [...tests];
    updated[index].selected = !updated[index].selected;
    setTests(updated);
    setSelectedTests(updated.filter(test => test.selected));
  };

  const handleQuantityPriceChange = (index, field, value) => {
    const updated = [...tests];
    updated[index][field] = value;
    setTests(updated);
    setSelectedTests(updated.filter(test => test.selected));
  };

  const handleProvide = async () => {
    const totalAmount = selectedTests.reduce((sum, t) => sum + t.quantity * t.price, 0);

    const payload = {
      prescriptionId: activePrescriptionId,
      diagnosticsId: diagnosticsId,
      totalAmount: totalAmount,
    };

    try {
      const res = await axios.post('http://localhost:8080/transactionapi/labTransaction', payload);
      alert('Lab transaction recorded successfully!');
      setTests([]);
      setSelectedTests([]);
    } catch (error) {
      alert('Transaction failed: ' + (error.response?.data || 'Unknown error'));
    }
  };

  return (
    <div className="container py-5 lab_cont">
      <h5 className="text-center mb-4 mt-2 text-primary">
        View And Serve The Diagnostics Tests As Per Digital Prescriptions
      </h5>
      <h5 className="text-start text-info py-1">
        Lab ID: {diagnosticsId}
      </h5>
      
      

      <form onSubmit={handleSubmit}>
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
          <label htmlFor="pid" className="fw-semibold me-2">
            Enter Prescription ID
          </label>
          <input
            type="text"
            id="pid"
            name="pid"
            value={pid}
            onChange={handlePid}
            className="form-control"
            placeholder="Enter ID like INJA97"
            style={{ width: '250px' }}
            required
          />
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>

      {loading && <p className="text-primary">Fetching test list...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {tests.length > 0 && (
        <div className="mt-4">
          <h4 className="text-success mb-3">Prescribed Diagnostic Tests</h4>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Select</th>
                <th>Type</th>
                <th>Subtype</th>
                <th>Method/Organ</th>
                <th>Instructions</th>
                <th>Comment</th>
                <th>Quantity</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={test.selected || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td>{test.type}</td>
                  <td>{test.subtype}</td>
                  <td>{test.methodOrOrgan}</td>
                  <td>{test.instructions || '-'}</td>
                  <td>{test.comment || '-'}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      value={test.quantity}
                      onChange={(e) => handleQuantityPriceChange(index, 'quantity', e.target.value)}
                      disabled={!test.selected}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      value={test.price}
                      onChange={(e) => handleQuantityPriceChange(index, 'price', e.target.value)}
                      disabled={!test.selected}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedTests.length > 0 && (
        <>
          <div className="mt-5">
            <h4 className="text-warning mb-3">🧪 Lab Test Cart</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Test Type</th>
                  <th>Quantity</th>
                  <th>Price (₹)</th>
                  <th>Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {selectedTests.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.type}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity * item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="3" className="text-end">Grand Total:</th>
                  <th>₹{selectedTests.reduce((sum, i) => sum + (i.quantity * i.price), 0)}</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="text-center my-4">
            <button className="btn btn-primary px-4 py-2" onClick={handleProvide}>
              Provide
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ServedDiagnosis;
