import React from "react";
import {
  Typography,
  Drawer,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = "240px";
export const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      {/* app bar */}
      {/* side drawer */}
      <Drawer
        style={{ width: "240px" }}
        variant="permanent"
        anchor="left"
        classes={{
          paper: {
            width: "240px",
          },
        }}
      >
        <Box>
          <Typography variant="h5">Ninja Notes</Typography>
        </Box>
        <List>
          {menuItems.map((menuItem) => {
            return (
              <ListItemButton
                key={menuItem.text}
                onClick={() => {
                  navigate(menuItem.path);
                }}
                style={
                  location.pathname === menuItem.path
                    ? { background: "#f4f4f4!important" }
                    : {}
                }
              >
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <div style={{ background: "#f9f9f9", width: "100%" }}>{children}</div>
    </div>
  );
};
