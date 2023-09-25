import React from 'react';
import drugs from '../drugs.json';

function App() {
  return (
    <div className="container">
    <div>
          <h1> ANTIBIOTICS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antibiotics.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    <div>
          <h1> ANTIFUNGALS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antifungals.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
          <div>
          <h1> ANALGESICS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.analgesics.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
      
          <div>
          <h1> RESPIRATORY DRUGS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.respiratory_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </div>
      
          <div>
          <h1> ANTIMALARIALS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antimalarials.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
          <div>
          <h1> ANTIHYPERTENSIVES</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antihypertensives.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> ANTIDIABETICS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antidiabetics.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> ANTIDEPRESSANTS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antidepressants.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> ANTIEMETIC</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antiemetic_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> GASTROINTESTINAL DRUGS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.gastrointestinal_drugs.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> STIMULANTS DRUGS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.stimulants.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
          <div>
          <h1> ANTIALLERGY DRUGS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antiallergy_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> Hematinic Drugs</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.hematinic_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      
          <div>
          <h1> Anticonvulsant Drugs</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.anticonvulsant_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
          <div>
          <h1> ANTIPSYCHOTICS </h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.antipsychotic_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
          <div>
          <h1> IMMUNOSUPPRESSANT DRUGS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.immunosuppressant_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
          <div>
          <h1> ANTICANCER DRUGS</h1>
      <table className="drug-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Generic Name</th>
            <th>Brand Name</th>
            <th>Therapeutic Class</th>
            <th>Pharmacology</th>
            <th>Indication</th>
            <th>Contraindication</th>
            <th>adverse_effects</th>
          </tr>
        </thead>
        <tbody>
          {drugs.anticancer_medications.map((o, index) => (
            <tr key={o.generic_name}>
              <td>{index + 1}</td>
              <td>{o.generic_name}</td>
              <td>{o.brand_name}</td>
              <td>{o.therapeutic_class}</td>
              <td>{o.pharmacology}</td>
              <td>{o.indication}</td>
              <td>{o.contraindications}</td>
              <td>{o.adverse_effects}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
