import React from "react";
import "./About.css";
import {
  Grid,
  Box,
  Button,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import data from "./aboutData.json";
console.log("data", data);
const About = () => {
  return (
    <React.Fragment>
      <div className="bacground-img-about">
        <Grid px={2} py={1} container direction="row" alignItems="flex-start">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box
              sx={{
                paddingTop: "8%",
              }}
            >
              <Typography mb={1} color="white" variant="h4">
                Most notable Casess
              </Typography>
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                spacing={3}
              >
                {data.map((item) => {
                  return (
                    <Grid item lg={4} key={item.id}>
                      <Card
                        variant="outlined"
                        sx={{ backgroundColor: "transparent" }}
                        p={3}
                      >
                        <CardContent>
                          <Typography color="white" variant="h5">
                            {item.caseTitle}
                          </Typography>
                          <Typography color="white" variant="h6s">
                            {item.clientName}
                          </Typography>
                          <Typography color="white" variant="body2">
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default About;
