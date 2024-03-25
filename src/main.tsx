import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const DATA = [
  { id: "todo-0", name: "Eat", dueDate: "March 25, 2024", completed: true },
  { id: "todo-1", name: "Sleep", dueDate: "ASAP", completed: false },
  { id: "todo-2", name: "Repeat", dueDate: "March 26, 2024", completed: false },
];
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);