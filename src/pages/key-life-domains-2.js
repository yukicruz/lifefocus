import React, { useState } from 'react';
import Layout from '../components/layout';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../styles/keyLifeDomains2.css';  // Ensure the path is correct

const KeyLifeDomains2 = () => {
  const [domains, setDomains] = useState([
    { id: '1', content: 'Financial' },
    { id: '2', content: 'Social/Relationships' },
    { id: '3', content: 'Physical Health' },
    { id: '4', content: 'Mental/Emotional' },
    { id: '5', content: 'Spiritual' },
    { id: '6', content: 'Environment' },
    { id: '7', content: 'Career' }
  ]);

  const [showTable, setShowTable] = useState(false);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(domains);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDomains(items);
  };

  const handleButtonClick = () => {
    setShowTable(true);
  };

  return (
    <Layout>
      <h1>Key Life Domains 2: Rank by Stress</h1>
      <p>These are the 7 life domains. Drag your most stressful ones to the top and your least stressful to the bottom.</p>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="domains">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="domains-container">
              {domains.map(({ id, content }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="domain-block"
                    >
                      {content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={handleButtonClick} className="done-button">Rank them!</button>

      {showTable && (
        <>
          <table className="results-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Life Domain</th>
              </tr>
            </thead>
            <tbody>
              {domains.map((domain, index) => (
                <tr key={domain.id}>
                  <td>{index + 1}</td>
                  <td>{domain.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="responsive-iframe-container">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSemSuvy4c-sKXRU6zLZFdk9pwbd2UgOFjrVu-PXlZHVuRr18g/viewform?embedded=true"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
              className="responsive-iframe"
            >
              Loading…
            </iframe>
          </div>
          <style jsx>{`
            .responsive-iframe-container {
              position: relative;
              width: 100%;
              overflow: hidden;
              padding-top: 56.25%; /* 16:9 Aspect Ratio */
            }
            .responsive-iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 0;
            }
          `}</style>
        </>
      )}
    </Layout>
  );
};

export default KeyLifeDomains2;
