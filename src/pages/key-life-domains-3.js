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
      <h1>Key Life Domains 3: Rank by Importance</h1>
      <p>These are the 7 life domains. Organize them by placing those you find most important at top and those you find the least important at the bottom.</p>

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
      )}
    </Layout>
  );
};

export default KeyLifeDomains2;
