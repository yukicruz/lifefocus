import React, { useState, useEffect } from 'react';
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
    { id: '6', content: 'Living Environment' },
    { id: '7', content: 'Career' }
  ]);

  const [showTable, setShowTable] = useState(false);
  const [iframeHeight, setIframeHeight] = useState('720px'); // Default height

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(domains);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDomains(items);
  };

  const handleButtonClick = () => {
    setShowTable(true);
    updateIframeHeight();
  };

  const updateIframeHeight = () => {
    const screenHeight = window.innerHeight;
    const iframePadding = 40; // Padding to account for margins and potential borders
    setIframeHeight(`${screenHeight - iframePadding}px`);
  };

  useEffect(() => {
    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);
    return () => {
      window.removeEventListener('resize', updateIframeHeight);
    };
  }, []);

  return (
    <Layout>
      <h1>What's stressing you out?</h1>
      <p>Clarity helps you put energy where it matters most. Drag and rank your highest stressors.</p>

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
              {domains.slice(0, 3).map((domain, index) => ( // Only show top 3 domains
                <tr key={domain.id}>
                  <td>{index + 1}</td>
                  <td>{domain.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSemSuvy4c-sKXRU6zLZFdk9pwbd2UgOFjrVu-PXlZHVuRr18g/viewform?embedded=true"
            width="100%"
            height={iframeHeight}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
            style={{ minHeight: iframeHeight }}
          >
            Loading…
          </iframe>
        </>
      )}
    </Layout>
  );
};

export default KeyLifeDomains2;
