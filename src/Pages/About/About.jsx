import React from "react";
import "./About.css";
import { Grid, Box, Button, Stack, Typography } from "@mui/material";
const About = () => {
  return (
    <React.Fragment>
      <div className="bacground-img-about">
        <Grid px={2} py={1} container direction="row" alignItems="flex-start">
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <Box
              sx={{
                paddingTop: "30%",
              }}
            >
              <Typography mb={1} color="white" variant="h4">
                My name is Harvey Specter
              </Typography>
              <Typography color="white" variant="body1">
                i am practicing law since last 12 years with rock solid record
                of winning cases in trial right now i am name partner at Specter
                Litt{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default About;
