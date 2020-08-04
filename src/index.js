import "./index.css";

import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

const App = (props) => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startingColumn = data.columns[source.droppableId];
    const endingColumn = data.columns[destination.droppableId];

    if (startingColumn === endingColumn) {
      const newTaskIds = Array.from(startingColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...startingColumn, taskIds: newTaskIds };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }

    //moving from one list to another
    const startTaskIds = Array.from(startingColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startingColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(endingColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...endingColumn,
      taskIds: finishTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
