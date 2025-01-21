import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sales Portal
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/add-partner">
          Add Partner
        </Button>
        <Button color="inherit" component={Link} to="/partner-dashboard/1">
          Partner Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/hr-section">
          HR Section
        </Button>
        {/* Login Button */}
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
