"use client";

import React, { ChangeEvent, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link as MuiLink,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Code, Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";

const routeOptions: { label: string; href: string }[] = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about-me" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contacts", href: "#contact-me" },
];
const userOptions: { label: string; href: string }[] = [
  { label: "Profile", href: "/profile" },
  { label: "Account", href: "/account" },
  { label: "Dashboard", href: "/dashboard" },
];

function ResponsiveAppBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); //remove it when implementing authentication

  const handleDrawerToggle = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const trigger = useScrollTrigger();

  const changeNavbarColor = () => {
    if (typeof window !== "undefined" && window.scrollY >= 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            // mr: 2,
            // display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          &lt;MH/&gt;
        </Typography>
      </Typography>
      <Divider />
      <List onClick={handleDrawerToggle}>
        {routeOptions.map(({ label, href }) => (
          <Link key={label} href={href}>
            <ListItem key={label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        component="nav"
        sx={{ backgroundColor: isTop ? "transparent" : "#1B4242" }}
        elevation={isTop ? 0 : 4}
      >
        <CssBaseline />
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Code
              sx={{
                display: { xs: "none", md: "flex", fontSize: "30px" },
                mr: 1,
              }}
            /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              &lt;MH/&gt;
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: "#1B4242",
                  },
                }}
                variant="temporary"
                open={mobileMenu}
                onClose={handleDrawerToggle}
                disableScrollLock={true}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: 220,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>

            {/* <Code
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                fontSize: "30px",
              }}
            /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              &lt;MH/&gt;
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {routeOptions.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <Button
                    onClick={handleDrawerToggle}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="user options">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {[
                userOptions.map(({ label, href }) => (
                  <Link key={label} href={href}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{label}</Typography>
                    </MenuItem>
                  </Link>
                )),
                <MenuItem
                  key="logout"
                  onClick={() => {
                    setAnchorElUser(null);
                    setLoggedIn(false);
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>,
              ]}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
export default ResponsiveAppBar;
