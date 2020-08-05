const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Eat" },
    "task-2": { id: "task-2", content: "Sleep" },
    "task-3": { id: "task-3", content: "Party" },
    "task-4": { id: "task-4", content: "Repeat" },
  },
  columns: {
    "to-do-column": {
      id: "to-do-column",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "in-progress-column": {
      id: "in-progress-column",
      title: "In progress",
      taskIds: [],
    },
    "done-column": {
      id: "done-column",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["to-do-column", "in-progress-column", "done-column"],
};

export default initialData;
