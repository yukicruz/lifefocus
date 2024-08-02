import React, { useState } from "react"
import Layout from "../components/layout"

const KeyLifeDomains = () => {
  const [values, setValues] = useState({
    financial: 5,
    social: 5,
    physical: 5,
    mental: 5,
    spiritual: 5,
    environment: 5,
    career: 5,
  });

  const handleSliderChange = (domain, value) => {
    setValues(prevValues => ({ ...prevValues, [domain]: value }));
  };

  return (
    <Layout>
      <h1>Key Life Domains</h1>
      <p>Here you can rate each key life domain on a scale of 1 to 10.</p>

      <h2>Financial</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.financial}
        className="slider"
        id="financialRange"
        onChange={e => handleSliderChange("financial", e.target.value)}
      />
      <p>Value: <span id="financialValue">{values.financial} out of 10</span></p>

      <h2>Social/Relationships</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.social}
        className="slider"
        id="socialRange"
        onChange={e => handleSliderChange("social", e.target.value)}
      />
      <p>Value: <span id="socialValue">{values.social} out of 10</span></p>

      <h2>Physical Health</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.physical}
        className="slider"
        id="physicalRange"
        onChange={e => handleSliderChange("physical", e.target.value)}
      />
      <p>Value: <span id="physicalValue">{values.physical} out of 10</span></p>

      <h2>Mental/Emotional</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.mental}
        className="slider"
        id="mentalRange"
        onChange={e => handleSliderChange("mental", e.target.value)}
      />
      <p>Value: <span id="mentalValue">{values.mental} out of 10</span></p>

      <h2>Spiritual</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.spiritual}
        className="slider"
        id="spiritualRange"
        onChange={e => handleSliderChange("spiritual", e.target.value)}
      />
      <p>Value: <span id="spiritualValue">{values.spiritual} out of 10</span></p>

      <h2>Environment</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.environment}
        className="slider"
        id="environmentRange"
        onChange={e => handleSliderChange("environment", e.target.value)}
      />
      <p>Value: <span id="environmentValue">{values.environment} out of 10</span></p>

      <h2>Career</h2>
      <input
        type="range"
        min="1"
        max="10"
        value={values.career}
        className="slider"
        id="careerRange"
        onChange={e => handleSliderChange("career", e.target.value)}
      />
      <p>Value: <span id="careerValue">{values.career} out of 10</span></p>
    </Layout>
  )
}

export default KeyLifeDomains
