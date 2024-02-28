import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import blog1 from "@/assets/blog1.jpg";

const Blogs = () => {
  const blogStyle = {
    position: "sticky",
    top: "10px",
    paddingTop: "5px",
  };

  const text =
    "Have you ever encountered that <i>spinning wheel of death</i> on a website while waiting for data to load? That&apos;s asynchronous JavaScript at work! But don&apos;t let the fancy term scare you! we&apos;ll break down asynchronous JavaScript and show you how Promises can turn messy code into a well-oiled machine.";
  return (
    <div>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ position: "sticky", top: "80px", mb: "50px", mt: 6 }}
      >
        Blogs
      </Typography>
      <Grid container sx={{ mb: 6 }} gap={{ xs: 5, md: 3 }}>
        {[...Array(4)].map((_, index) => (
          <Grid
            key={index}
            container
            xs={12}
            sx={{
              backgroundColor: "#1B4242",
              borderRadius: 2,
              position: "sticky",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              top: `calc(${index}*25px + 150px)`,
              // paddingTop: `calc(${index}*35px)`,
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: { md: 2 },
                px: { xs: 2, md: 0 },
                marginLeft: { md: -2 },
                marginTop: { xs: -2, md: 0 },
              }}
            >
              <Image
                src={blog1}
                alt="blog1"
                height={0}
                width={0}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={8} sx={{ p: 2 }}>
              <Typography sx={{ color: "#00000080" }}>
                Mahiuddin Habib <br />
                February 6, 2024
              </Typography>
              <Typography
                sx={{ textTransform: "uppercase", fontSize: "1.2rem", my: 1 }}
              >
                Demystifying Asynchronous JavaScript with the Power of Promises
              </Typography>
              <Typography>{text.slice(0, 150)}...</Typography>
              <Button>READ MORE</Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blogs;
