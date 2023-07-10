import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
const TransparentNavbar = styled(AppBar)`
  background-color: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: none;

  ${(props) =>
    props.elevated &&
    `
    background-color: transparent;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  `}
`;
const NavbarLinks = styled(Link)`
  margin: 0 8px;
  position: relative;
  padding: 2px 5px;
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(to right, transparent 50%, black 50%);
  background-size: 200% 100%;
  transition: background-position 0.3s ease;

  &:hover {
    background-position: 100% 0%;
  }
`;
const Navbar = () => {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isElevated = window.scrollY > 0;
      setElevated(isElevated);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <React.Fragment>
      <TransparentNavbar position="fixed" elevated={elevated}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Specter Litt
          </Typography>
          <NavbarLinks href="#" variant="body2">
            Home
          </NavbarLinks>
          <NavbarLinks href="#" variant="body2">
            About
          </NavbarLinks>
          <NavbarLinks href="#" variant="body2">
            Services
          </NavbarLinks>
          <NavbarLinks href="#" variant="body2">
            Contact
          </NavbarLinks>
        </Toolbar>
      </TransparentNavbar>
    </React.Fragment>
  );
};

export default Navbar;
