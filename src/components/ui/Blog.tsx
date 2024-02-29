import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Blog = ({ index, blog }: { index: number; blog: any }) => {
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{
          backgroundColor: "#1B4242",
          borderRadius: 2,
          position: "sticky",
          boxShadow: "rgba(158, 200, 185, 0.3) 0px 1px 4px",
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
            src={blog?.coverPhoto}
            alt="cover photo"
            height={0}
            width={0}
            style={{
              width: "300px",
              height: "225px",
              borderRadius: "8px",
              boxShadow: "rgba(158, 200, 185, 0.2) 1.95px 1.95px 2.6px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={8} sx={{ p: 2, color: "#E7F1EE" }}>
          <Typography sx={{ opacity: "0.6" }}>
            {blog?.author} <br />
            {blog?.date}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: "1.2rem",
              my: 1,
            }}
          >
            {blog?.title}
          </Typography>
          <Typography>{blog?.intro?.slice(0, 150)}...</Typography>
          <Button>
            <a
              href={blog?.blogLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#9EC8B9",
              }}
            >
              READ MORE
            </a>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
