import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "../components/layout";
import "../styles/core-values.css";

const ItemTypes = {
  VALUE: "value",
};

const ValueBlock = ({ value, index, containerIndex, moveValue }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.VALUE,
    item: { value, index, containerIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="value-cell"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {value}
    </div>
  );
};

const Container = ({ index, values, moveValue }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.VALUE,
    drop: (item) => moveValue(item.value, item.containerIndex, index),
  });

  return (
    <div ref={drop} className="container">
      {values.map((value, i) => (
        <ValueBlock
          key={i}
          value={value}
          index={i}
          containerIndex={index}
          moveValue={moveValue}
        />
      ))}
    </div>
  );
};

const CoreValues = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [selectedValues, setSelectedValues] = useState([]);
  const [customValues, setCustomValues] = useState([""]);
  const [finalValues, setFinalValues] = useState([]);
  const [containerValues, setContainerValues] = useState([[], [], [], [], []]);
  const [themes, setThemes] = useState([{}, {}, {}, {}, {}]);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  const valuesList = [
    "Acceptance",
    "Accomplishment",
    "Accountability",
    "Achievement",
    "Adaptability",
    "Altruism",
    "Ambition",
    "Assertiveness",
    "Awareness",
    "Balance",
    "Beauty",
    "Boldness",
    "Bravery",
    "Calm",
    "Capability",
    "Charity",
    "Cleanliness",
    "Commitment",
    "Compassion",
    "Confidence",
    "Connection",
    "Contribution",
    "Courage",
    "Creativity",
    "Curiosity",
    "Decisiveness",
    "Dependability",
    "Determination",
    "Discipline",
    "Empathy",
    "Enthusiasm",
    "Excellence",
    "Fairness",
    "Family",
    "Friendship",
    "Generosity",
    "Gratitude",
    "Growth",
    "Happiness",
    "Health",
    "Honesty",
    "Integrity",
    "Joy",
    "Kindness",
    "Leadership",
    "Love",
    "Loyalty",
    "Patience",
    "Respect",
    "Wisdom",
  ];

  const handleValueClick = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      if (selectedValues.length < 15) {
        setSelectedValues([...selectedValues, value]);
      } else {
        alert("You can only select up to 15 values.");
      }
    }
  };

  const handleCustomValueChange = (index, value) => {
    const newCustomValues = [...customValues];
    newCustomValues[index] = value;
    setCustomValues(newCustomValues);

    if (value.trim() !== "" && index === customValues.length - 1) {
      setCustomValues([...newCustomValues, ""]);
    }
  };

  const handleCustomValueClick = (value, index) => {
    if (value.trim() !== "" && index < customValues.length - 1) {
      handleValueClick(value);
    }
  };

  const handleButtonClick = () => {
    const sortedValues = [...selectedValues].sort();
    setFinalValues(sortedValues);
    setContainerValues([[], [], [], [], []]); // Reset container values when new selection is made
  };

  const moveValue = (value, fromIndex, toIndex) => {
    setContainerValues((prev) => {
      let newContainerValues = [...prev];
      if (fromIndex !== -1) {
        newContainerValues[fromIndex] = newContainerValues[fromIndex].filter(
          (v) => v !== value
        );
      }
      newContainerValues[toIndex] = [...newContainerValues[toIndex], value];
      return newContainerValues;
    });
  };

  const handleThemeChange = (index, field, value) => {
    setThemes((prev) => {
      const newThemes = [...prev];
      newThemes[index] = { ...newThemes[index], [field]: value };
      return newThemes;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <h1>Discover Your Personal Core Values</h1>
        <p>Follow these steps to discover your personal core values:</p>

        <div className={`step ${activeStep === 1 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(1)}>
            <h2>Step 1: Start with a Beginner’s Mind</h2>
            <p>
              <strong>Estimated Time:</strong> 2-5 minutes
            </p>
          </div>
          {activeStep === 1 && (
            <div className="step-content">
              <p>
                To start this process, it's important to clear your mind and
                approach it with a beginner’s mindset. Take a few moments to sit
                quietly, close your eyes, and take deep breaths. Let go of any
                preconceived notions or judgments about yourself. The goal is to
                approach the following steps with openness and curiosity, free
                from any biases or past influences. This mindset will help you
                to genuinely reflect on what truly matters to you.
              </p>
              <button
                className="proceed-button"
                onClick={() => toggleStep(2)}
              >
                Proceed to Step 2
              </button>
            </div>
          )}
        </div>

        <div className={`step ${activeStep === 2 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(2)}>
            <h2>Step 2: Create Your Initial List of Personal Core Values</h2>
            <p>
              <strong>Estimated Time:</strong> 10-20 minutes
            </p>
          </div>
          {activeStep === 2 && (
            <div className="step-content">
              <p>
                In this step, you will create an initial list of personal core
                values. This process involves reflecting on what matters most to
                you in life and identifying values that resonate with you. Here
                are some instructions to guide you:
              </p>
              <ol>
                <li>
                  <strong>Review the List of Common Values:</strong> Below is a
                  list of common values. Take your time to read through each
                  value. As you go through the list, think about which values
                  resonate with you personally. Which values do you feel are
                  essential to your life and happiness?
                </li>
                <li>
                  <strong>Select Your Values:</strong> Click on the values that
                  stand out to you. These values should be ones that you believe
                  are fundamental to who you are and how you want to live your
                  life. Aim to select around 10-15 values that feel most
                  important to you. You can select up to 15 values.
                </li>
                <li>
                  <strong>Reflect and Add Your Own Values:</strong> If there are
                  any values that are important to you but not listed, feel free
                  to add them. This is your personal list, so it's crucial that
                  it reflects what is truly important to you.
                </li>
                <li>
                  <strong>Narrow Down Your List:</strong> Once you have selected
                  your initial values, try to narrow them down to around 10.
                  This might involve combining similar values or prioritizing
                  those that you feel are most critical.
                </li>
                <li>
                  <strong>Write Down Your Final List:</strong> After narrowing
                  down your values, write them down. This list will be the
                  foundation for the following steps, where you will further
                  refine and understand your core values.
                </li>
              </ol>
              <p>
                <strong>Common Values List:</strong>
              </p>
              <p>
                {selectedValues.length} values selected.{" "}
                {selectedValues.length > 10 && "Try to keep it around 10."}
              </p>
              <div className="values-grid">
                {valuesList.map((value) => (
                  <div
                    key={value}
                    className={`value-cell ${
                      selectedValues.includes(value) ? "selected" : ""
                    }`}
                    onClick={() => handleValueClick(value)}
                  >
                    {value}
                  </div>
                ))}
                {customValues.map((customValue, index) => (
                  <input
                    key={`custom-${index}`}
                    className={`value-cell ${
                      selectedValues.includes(customValue) ? "selected" : ""
                    }`}
                    value={customValue}
                    onChange={(e) =>
                      handleCustomValueChange(index, e.target.value)
                    }
                    onClick={() => handleCustomValueClick(customValue, index)}
                    placeholder="Type a new value"
                  />
                ))}
              </div>
              <button className="submit-button" onClick={handleButtonClick}>
                These are my core values
              </button>
              {finalValues.length > 0 && (
                <div>
                  <h3>Your Selected Core Values:</h3>
                  <ul>
                    {finalValues.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                className="proceed-button"
                onClick={() => toggleStep(3)}
              >
                Proceed to Step 3
              </button>
            </div>
          )}
        </div>

        <div className={`step ${activeStep === 3 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(3)}>
            <h2>Step 3: Combine Your Personal Values into 5 Related Groups</h2>
            <p>
              <strong>Estimated Time:</strong> 10-15 minutes
            </p>
          </div>
          {activeStep === 3 && (
            <div className="step-content">
              <p>
                In this step, you will group similar values together to start
                seeing patterns and common themes. This helps in organizing your
                values and identifying the broader categories that they fall
                under.
              </p>
              <ol>
                <li>
                  <strong>Review Your Selected Values:</strong> Look at the list
                  of values you selected in Step 2.
                </li>
                <li>
                  <strong>Identify Similar Values:</strong> Identify values that
                  are similar or related to each other.
                </li>
                <li>
                  <strong>Create Groups:</strong> Group these related values
                  together. You can create multiple groups based on common
                  themes.
                </li>
              </ol>
              <div className="values-grid">
                {finalValues
                  .filter(
                    (value) =>
                      !containerValues.flat().includes(value) &&
                      !containerValues.flat().includes(value)
                  )
                  .map((value, index) => (
                    <ValueBlock
                      key={index}
                      value={value}
                      index={index}
                      containerIndex={-1}
                      moveValue={moveValue}
                    />
                  ))}
              </div>
              <div className="container-grid">
                {containerValues.map((container, index) => (
                  <Container
                    key={index}
                    index={index}
                    values={container}
                    moveValue={moveValue}
                  />
                ))}
              </div>
              <button
                className="proceed-button"
                onClick={() => toggleStep(4)}
              >
                Proceed to Step 4
              </button>
            </div>
          )}
        </div>

        <div className={`step ${activeStep === 4 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(4)}>
            <h2>Step 4: Highlight the Central Theme of Each Value Grouping</h2>
            <p>
              <strong>Estimated Time:</strong> 10-15 minutes
            </p>
          </div>
          {activeStep === 4 && (
            <div className="step-content">
              <p>
                In this step, you will highlight the central theme of each value grouping. This helps you to identify the overarching principles that each group represents.
              </p>
              <ol>
                <li><strong>Review Your Groups:</strong> Look at the groups of values you created in Step 3.</li>
                <li><strong>Identify Central Themes:</strong> For each group, identify a central theme or a core value that represents the essence of the group.</li>
                <li><strong>Label Each Group:</strong> Assign a name or label to each group that captures the central theme. This could be a single word or a short phrase.</li>
                <li><strong>Reflect on the Themes:</strong> Take a moment to reflect on the themes you have identified. Ensure that they accurately represent the values in each group.</li>
              </ol>
              {containerValues.filter(container => container.length > 0).map((container, index) => (
                <div key={index} className="group-section">
                  <h3>Group #{index + 1}</h3>
                  <p>{container.sort().join(", ")}</p>
                  <ul>
                    <li>Central Theme: <textarea
                        value={themes[index]?.theme || ""}
                        onChange={(e) =>
                          handleThemeChange(index, "theme", e.target.value)
                        }
                      /></li>
                    <li>Group Name: <textarea
                        value={themes[index]?.name || ""}
                        onChange={(e) =>
                          handleThemeChange(index, "name", e.target.value)
                        }
                      /></li>
                    <li>Reflection: <textarea
                        value={themes[index]?.reflection || ""}
                        onChange={(e) =>
                          handleThemeChange(index, "reflection", e.target.value)
                        }
                      /></li>
                  </ul>
                </div>
              ))}
              <button
                className="proceed-button"
                onClick={() => toggleStep(5)}
              >
                Proceed to Step 5
              </button>
            </div>
          )}
        </div>

        <div className={`step ${activeStep === 5 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(5)}>
            <h2>Step 5: Determine Your Top Personal Values</h2>
            <p>
              <strong>Estimated Time:</strong> 10-15 minutes
            </p>
          </div>
          {activeStep === 5 && (
            <div className="step-content">
              <p>
                In this step, you will rank your personal values by importance. This will help you identify which values are most essential to your life and represent your primary way of being. Follow these instructions to rank your values:
              </p>
              <ol>
                <li>Review the groups you created in Step 4.</li>
                <li>Drag and drop the groups to order them by importance, with the most important group at the top and the least important group at the bottom.</li>
              </ol>
              <div className="ranking-grid">
                {themes
                  .filter((theme) => Object.keys(theme).length > 0)
                  .map((theme, index) => (
                    <div key={index} className="ranking-block">
                      <div className="block-header">
                        <strong>{theme.name}</strong> ({containerValues[index].join(", ")})
                      </div>
                      <ul>
                        <li>Central Theme: {theme.theme}</li>
                        <li>Reflection: {theme.reflection}</li>
                      </ul>
                    </div>
                  ))}
              </div>
              <button
                className="proceed-button"
                onClick={() => toggleStep(6)}
              >
                Proceed to Step 6
              </button>
            </div>
          )}
        </div>

        <div className={`step ${activeStep === 6 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(6)}>
            <h2>Step 6: Craft Personal Values Statements</h2>
            <p>
              <strong>Estimated Time:</strong> 15-30 minutes
            </p>
          </div>
          {activeStep === 6 && (
            <div className="step-content">
              <p>Description of Step 6 goes here...</p>
            </div>
          )}
        </div>

        <div className={`step ${activeStep === 7 ? "active" : ""}`}>
          <div className="step-header" onClick={() => toggleStep(7)}>
            <h2>Step 7: Test the Ecology of Each Value</h2>
            <p>
              <strong>Estimated Time:</strong> 10-20 minutes
            </p>
          </div>
          {activeStep === 7 && (
            <div className="step-content">
              <p>Description of Step 7 goes here...</p>
            </div>
          )}
        </div>
      </Layout>
    </DndProvider>
  );
};

export default CoreValues;
