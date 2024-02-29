import { Box } from "@mui/material";
import React from "react";
import Project from "./ui/Project";

import DinoMockup from "@/assets/dino-mockups.png";
import TLMockup from "@/assets/tutor-link-mockups.png";
import PTMockup from "@/assets/power-tools-mockups.png";

const projectData = [
  {
    id: 1,
    title: "Dino HR",
    description:
      "Dino Hr is a human resources management application that allows users to manage their employees, departments, and roles. It is designed to be a simple and easy to use application that allows users to quickly view and manage their employees. users to manage their employees, departments, and roles. It is designed to be a simple and easy to use application that allows users to quickly view and manage their employees.",
    techStack: ["Next.js", "RTK Query", "Express.js", "MongoDB", "Mongoose"],
    coverImg: DinoMockup,
    liveSite: "https://dino-hr.vercel.app/",
    frontendRepo: "https://github.com/meraj2085/dino-hr",
    backendRepo: "https://github.com/meraj2085/dino-backend",
  },
  {
    id: 2,
    title: "Tutor Link",
    description:
      "Struggling to find a tutor? This platform connects you with local tutors! Easily book sessions, manage your info, and see all your learning materials in one place. Admins can manage users, services, bookings, and content, while super admins control user roles and permissions. Find your perfect tutor and simplify your learning journey! ",
    techStack: ["Next.js", "Redux", "Express.js", "PostgreSQL", "Prisma"],
    coverImg: TLMockup,
    liveSite: "https://tutor-link.vercel.app/",
    frontendRepo: "https://github.com/mahiuddinhabib/tutor-link-frontend",
    backendRepo: "https://github.com/mahiuddinhabib/tutor-link-backend",
  },
  {
    id: 3,
    title: "Power Tools",
    description:
      "Tired of managing tools and orders? We simplify it! Manufacturers easily add, update, and remove tools, while customers can browse and order in bulk. Secure payments through Stripe make it smooth and safe. Focus on making great tools, we'll handle the rest!",
    techStack: ["React.js", "Express.js", "MongoDB", "Firebase"],
    coverImg: PTMockup,
    liveSite: "https://power-tools-bee92.web.app/",
    frontendRepo: "https://github.com/mahiuddinhabib/power-tools-client",
    backendRepo: "https://github.com/mahiuddinhabib/power-tools-server",
  },
];

const Projects = () => {
  return (
    <Box>
      <h1
        id="projects"
        style={{ textAlign: "center", margin: "60px 0", fontFamily: "Ubuntu" }}
      >
        Featured Works
      </h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {projectData.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
