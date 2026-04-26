import { useState } from "react";
import { useGlobalState, GlobalState } from "../GlobalState";
import {
  Container, Typography, TextField, Button, List, ListItem,
  ListItemText, Checkbox, IconButton, Box, Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export default function TodoPage() {
  const { todos } = useGlobalState();
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function addTodo() {
    if (!input.trim()) return;
    GlobalState.set({
      todos: [...todos, { id: crypto.randomUUID(), text: input.trim(), completed: false }],
    });
    setInput("");
  }

  function deleteTodo(id) {
    GlobalState.set({ todos: todos.filter((t) => t.id !== id) });
  }

  function toggleTodo(id) {
    GlobalState.set({
      todos: todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t),
    });
  }

  function startEdit(todo) {
    setEditId(todo.id);
    setEditText(todo.text);
  }

  function saveEdit(id) {
    if (!editText.trim()) return;
    GlobalState.set({
      todos: todos.map((t) => t.id === id ? { ...t, text: editText.trim() } : t),
    });
    setEditId(null);
    setEditText("");
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        My TODO List
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
        <TextField
          fullWidth
          label="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          size="small"
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Box>
      <Paper elevation={2}>
        <List disablePadding>
          {todos.length === 0 && (
            <ListItem>
              <ListItemText secondary="No tasks yet. Add one above!" />
            </ListItem>
          )}
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              divider
              secondaryAction={
                <Box sx={{ display: "flex" }}>
                  {editId === todo.id ? (
                    <IconButton onClick={() => saveEdit(todo.id)} color="primary">
                      <CheckIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => startEdit(todo)}>
                      <EditIcon />
                    </IconButton>
                  )}
                  <IconButton onClick={() => deleteTodo(todo.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
              {editId === todo.id ? (
                <TextField
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                  size="small"
                  autoFocus
                />
              ) : (
                <ListItemText
                  primary={todo.text}
                  sx={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "text.disabled" : "text.primary",
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
