import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em;
  margin: 1em;
  border: 1px solid lightgrey;
  border-radius: 0.2em;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

export default class Tasks extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
