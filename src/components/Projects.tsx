import { Box } from "@mui/material";
import React from "react";
import Project from "./ui/Project";

const Projects = () => {
  return (
    <Box>
      <h1 style={{textAlign:"center"}}>Some Things I&apos;ve Built</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Project index={0} />
        <Project index={1} />
        <Project index={2} />
      </Box>
    </Box>
  );
};

export default Projects;
