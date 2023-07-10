import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";
import "./HomePage.css";
import { Grid, Stack, Typography } from "@mui/material";
const HomePage = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const animationTransition = {
    duration: 2, // Adjust the duration as needed
    ease: 'easeInOut' // Adjust the easing function as needed
  };
  return (
    <React.Fragment>
      <div className="bacground-img">
        <Stack direction="column" spacing={6}>
          <Navbar />
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <Stack
                sx={{
                  height: "75vh",
                }}
                pl={1}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants}
                  transition={animationTransition}
                >
                  <Typography variant="h3">
                    I am the best Closer in the city
                  </Typography>
                </motion.div>
              </Stack>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <Stack
                sx={{
                  height: "75vh",
                }}
                pl={1}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants}
                  transition={animationTransition}
                >
                  <Typography align="left" variant="h3">
                    and Handsome one too !!
                  </Typography>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
