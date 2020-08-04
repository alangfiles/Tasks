import "./index.css";

import { Droppable } from "react-beautiful-dnd";
import React from "react";
import Task from "./Task";
import styled from "styled-components";

const Container = styled.div`
  margin: 1em;
  border: 1px solid lightgrey;
  border-radius: 0.2em;
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 1em;
`;
const TaskList = styled.div`
  padding: 1em;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, idx) => (
                <Task key={task.id} task={task} index={idx} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
