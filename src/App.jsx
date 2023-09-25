import { useState } from 'react'
import drugs from '../drugs'




function App() {
  return (
    <div>
    {
      drugs.antibiotics.map((o) => {
      <ul className="head">
        <h1> Antibiotics </h1>
        <li className="generi">{o.generic_name}</li>
        <li className="brand">{o.brand_name}</li>
        <li className="thera">{o.therapeutic_class}</li>
        <li className="pharm">{o.pharmacology}</li>
        <li className="ind">{o.indication}</li>
        <li className="contra">{o.contraindication}</li>
        <li className="adv">{o.adverse_effects.map((a => <li>{a}</li>))}</li>
        </ul>
      })
    }
    
    </div>
  )
}

export default App
