import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import Blog from "./ui/Blog";

const blogsData = [
  {
    id: 1,
    title: "Demystifying Asynchronous JavaScript with the Power of Promises",
    date: "February 6, 2024",
    author: "Mahiuddin Habib",
    intro:
      "Have you ever encountered that on a website while waiting for data to load? That's asynchronous JavaScript at work! But don't let the fancy term scare you! we'll break down asynchronous JavaScript and show you how Promises can turn messy code into a well-oiled machine.",
    coverPhoto: blog1,
    blogLink:
      "https://www.linkedin.com/posts/mahiuddin-habib_javascript-javascriptmagic-javascripttips-activity-7160687782032494592-zZov?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "Understanding the Node.js Event Loop",
    date: "February 29, 2024",
    author: "Mahiuddin Habib",
    intro:
      "The Node.js event loop is often mentioned, but understanding its inner workings can feel daunting. Fear not, fellow developers, because this simplified explanation will have you grasping the core concept in no time!",
    coverPhoto: blog2,
    blogLink:
      "https://www.linkedin.com/posts/mahiuddin-habib_javascript-javascriptmagic-javascripttips-activity-7160687782032494592-zZov?utm_source=share&utm_medium=member_desktop",
  },
];

const Blogs = () => {
  const text =
    "Have you ever encountered that <i>spinning wheel of death</i> on a website while waiting for data to load? That's asynchronous JavaScript at work! But don&apos;t let the fancy term scare you! we&apos;ll break down asynchronous JavaScript and show you how Promises can turn messy code into a well-oiled machine.";
  return (
    <div id="blogs">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          position: "sticky",
          top: "80px",
          my: "60px",
          fontFamily: "Ubuntu",
        }}
      >
        Blogs
      </Typography>
      <Grid container sx={{ mb: 6 }} gap={{ xs: 5, md: 3 }}>
        {blogsData.map((blog, index) => (
          <Blog key={index} index={index} blog={blog} />
        ))}
      </Grid>
    </div>
  );
};

export default Blogs;
