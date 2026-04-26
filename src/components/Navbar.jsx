import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "TODO", to: "/todo" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ChecklistIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Winston App
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {navLinks.map(({ label, to }) => (
            <Button
              key={to}
              color="inherit"
              component={NavLink}
              to={to}
              sx={({ isActive }) => ({
                fontWeight: isActive ? 700 : 400,
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
