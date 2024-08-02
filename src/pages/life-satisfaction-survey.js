import React, { useState } from "react"
import Layout from "../components/layout"
import "../styles/survey.css"

const LifeSatisfactionSurvey = () => {
  const [scores, setScores] = useState({
    career1: 0, career2: 0, career3: 0,
    relationships1: 0, relationships2: 0, relationships3: 0,
    health1: 0, health2: 0, health3: 0,
    personalGrowth1: 0, personalGrowth2: 0, personalGrowth3: 0,
    financialStability1: 0, financialStability2: 0, financialStability3: 0,
    leisure1: 0, leisure2: 0, leisure3: 0,
    livingEnvironment1: 0, livingEnvironment2: 0, livingEnvironment3: 0,
    spirituality1: 0, spirituality2: 0, spirituality3: 0,
    overallHappiness1: 0, overallHappiness2: 0, overallHappiness3: 0,
  });

  const [hoverScores, setHoverScores] = useState({
    career1: 0, career2: 0, career3: 0,
    relationships1: 0, relationships2: 0, relationships3: 0,
    health1: 0, health2: 0, health3: 0,
    personalGrowth1: 0, personalGrowth2: 0, personalGrowth3: 0,
    financialStability1: 0, financialStability2: 0, financialStability3: 0,
    leisure1: 0, leisure2: 0, leisure3: 0,
    livingEnvironment1: 0, livingEnvironment2: 0, livingEnvironment3: 0,
    spirituality1: 0, spirituality2: 0, spirituality3: 0,
    overallHappiness1: 0, overallHappiness2: 0, overallHappiness3: 0,
  });

  const [results, setResults] = useState([]);

  const handleStarClick = (event, question, value) => {
    setScores(prevScores => ({ ...prevScores, [question]: value }));
  };

  const handleStarMouseEnter = (question, value) => {
    setHoverScores(prevScores => ({ ...prevScores, [question]: value }));
  };

  const handleStarMouseLeave = (question) => {
    setHoverScores(prevScores => ({ ...prevScores, [question]: 0 }));
  };

  const renderStars = (name) => (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(value => (
        <React.Fragment key={value}>
          <input
            type="radio"
            id={`${name}-${value}`}
            name={name}
            value={value}
            checked={scores[name] === value}
            onChange={event => handleStarClick(event, name, value)}
          />
          <label
            htmlFor={`${name}-${value}`}
            className={(scores[name] >= value || hoverScores[name] >= value) ? "selected" : ""}
            onMouseEnter={() => handleStarMouseEnter(name, value)}
            onMouseLeave={() => handleStarMouseLeave(name)}
          >★</label>
        </React.Fragment>
      ))}
    </div>
  );

  const calculateTotalScore = (category) => {
    return Object.keys(scores)
      .filter(key => key.startsWith(category))
      .reduce((total, key) => total + scores[key], 0);
  };

  const calculateResults = () => {
    const lifeAreas = [
      { id: 'career', name: 'Career and Work', score: calculateTotalScore('career') },
      { id: 'relationships', name: 'Relationships and Social Connections', score: calculateTotalScore('relationships') },
      { id: 'health', name: 'Health and Wellness', score: calculateTotalScore('health') },
      { id: 'personalGrowth', name: 'Personal Growth and Learning', score: calculateTotalScore('personalGrowth') },
      { id: 'financialStability', name: 'Financial Stability and Resources', score: calculateTotalScore('financialStability') },
      { id: 'leisure', name: 'Leisure and Recreation', score: calculateTotalScore('leisure') },
      { id: 'livingEnvironment', name: 'Living Environment', score: calculateTotalScore('livingEnvironment') },
      { id: 'spirituality', name: 'Spirituality and Meaning', score: calculateTotalScore('spirituality') },
      { id: 'overallHappiness', name: 'Overall Happiness', score: calculateTotalScore('overallHappiness') },
    ];

    lifeAreas.sort((a, b) => b.score - a.score);
    setResults(lifeAreas);
  };

  return (
    <Layout>
      <h1>Life Satisfaction Survey</h1>
      <p>Take this survey to see which of your life areas are doing great and which might need work.</p>

      <div className="section" id="career">
        <h2>1. Career and Work</h2>
        <div className="question">
          <p>How satisfied are you with your current job or career path?</p>
          {renderStars("career1")}
        </div>
        <div className="question">
          <p>Do you feel you have opportunities for growth and development in your career?</p>
          {renderStars("career2")}
        </div>
        <div className="question">
          <p>How meaningful and fulfilling do you find your work?</p>
          {renderStars("career3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("career")} / 15</p>
      </div>

      <div className="section" id="relationships">
        <h2>2. Relationships and Social Connections</h2>
        <div className="question">
          <p>Are your personal relationships supportive and enriching?</p>
          {renderStars("relationships1")}
        </div>
        <div className="question">
          <p>Do you feel connected to a community or social network?</p>
          {renderStars("relationships2")}
        </div>
        <div className="question">
          <p>How satisfied are you with the quality of your interactions with family and friends?</p>
          {renderStars("relationships3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("relationships")} / 15</p>
      </div>

      <div className="section" id="health">
        <h2>3. Health and Wellness</h2>
        <div className="question">
          <p>How satisfied are you with your physical health and fitness?</p>
          {renderStars("health1")}
        </div>
        <div className="question">
          <p>Do you engage in regular self-care practices for your mental well-being?</p>
          {renderStars("health2")}
        </div>
        <div className="question">
          <p>How balanced and healthy is your diet and nutrition?</p>
          {renderStars("health3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("health")} / 15</p>
      </div>

      <div className="section" id="personal-growth">
        <h2>4. Personal Growth and Learning</h2>
        <div className="question">
          <p>Are you satisfied with your opportunities for personal development and learning?</p>
          {renderStars("personalGrowth1")}
        </div>
        <div className="question">
          <p>Do you feel you are growing and evolving as a person?</p>
          {renderStars("personalGrowth2")}
        </div>
        <div className="question">
          <p>How often do you engage in activities that challenge you and help you grow?</p>
          {renderStars("personalGrowth3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("personalGrowth")} / 15</p>
      </div>

      <div className="section" id="financial-stability">
        <h2>5. Financial Stability and Resources</h2>
        <div className="question">
          <p>Do you feel secure in your financial situation?</p>
          {renderStars("financialStability1")}
        </div>
        <div className="question">
          <p>Are you able to meet your financial goals and obligations comfortably?</p>
          {renderStars("financialStability2")}
        </div>
        <div className="question">
          <p>How satisfied are you with your ability to manage and save money?</p>
          {renderStars("financialStability3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("financialStability")} / 15</p>
      </div>

      <div className="section" id="leisure">
        <h2>6. Leisure and Recreation</h2>
        <div className="question">
          <p>Do you have enough time for hobbies and activities that you enjoy?</p>
          {renderStars("leisure1")}
        </div>
        <div className="question">
          <p>Are you able to relax and recharge effectively during your free time?</p>
          {renderStars("leisure2")}
        </div>
        <div className="question">
          <p>How satisfied are you with the variety and quality of your leisure activities?</p>
          {renderStars("leisure3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("leisure")} / 15</p>
      </div>

      <div className="section" id="living-environment">
        <h2>7. Living Environment</h2>
        <div className="question">
          <p>Are you satisfied with your living conditions and environment?</p>
          {renderStars("livingEnvironment1")}
        </div>
        <div className="question">
          <p>Do you feel safe and comfortable in your home?</p>
          {renderStars("livingEnvironment2")}
        </div>
        <div className="question">
          <p>How content are you with your neighborhood and local community?</p>
          {renderStars("livingEnvironment3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("livingEnvironment")} / 15</p>
      </div>

      <div className="section" id="spirituality">
        <h2>8. Spirituality and Meaning</h2>
        <div className="question">
          <p>Do you feel a sense of purpose and meaning in your life?</p>
          {renderStars("spirituality1")}
        </div>
        <div className="question">
          <p>Are you connected to a spiritual or philosophical belief system that supports you?</p>
          {renderStars("spirituality2")}
        </div>
        <div className="question">
          <p>How often do you engage in practices that nurture your spiritual well-being?</p>
          {renderStars("spirituality3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("spirituality")} / 15</p>
      </div>

      <div className="section" id="overall-happiness">
        <h2>9. Overall Happiness</h2>
        <div className="question">
          <p>How happy do you feel in general?</p>
          {renderStars("overallHappiness1")}
        </div>
        <div className="question">
          <p>Are you content with your life as a whole?</p>
          {renderStars("overallHappiness2")}
        </div>
        <div className="question">
          <p>Do you wake up feeling positive and hopeful about the day ahead?</p>
          {renderStars("overallHappiness3")}
        </div>
        <p><strong>Total Score:</strong> {calculateTotalScore("overallHappiness")} / 15</p>
      </div>

      <p>Want to see how your life areas compare?</p>
      <button onClick={calculateResults}>Calculate</button>

      {results.length > 0 && (
        <table style={{ display: 'table', marginTop: '20px', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Rank</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Life Area</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Life Area Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((area, index) => (
              <tr key={area.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{area.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{area.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </Layout>
  )
}

export default LifeSatisfactionSurvey
