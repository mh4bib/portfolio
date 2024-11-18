"use client";

import theme from "@/theme/theme";
import { Box, Divider, Grid, Stack, Typography, styled } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "../../public/images/brand-x.svg";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/personal-logo.svg";

const Item = styled("a")(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   paddingLeft: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "#1B4242",
        padding: theme.spacing(4, 2, 0, 2),
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid container item textAlign="center">
        <Grid item xs={12}>
          <Image src={Logo} alt="logo" width={50} height={50} />
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 5 }}
            justifyContent="center"
            mt={2}
          >
            <Item href="#projects">Projects</Item>
            <Item href="#about-me">About Me</Item>
            <Item href="#blogs">Blogs</Item>
            <Item href="#contact-me">Contact Me</Item>
          </Stack>
        </Grid>
        <Divider />
        <Grid
          item
          xs={12}
          sx={{
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mt={2}
            color={"white"}
          >
            <Link href={"https://www.linkedin.com/in/mh4bib"}>
              <LinkedInIcon style={{ fontSize: 30 }} />
            </Link>
            <Link href={"https://github.com/mh4bib"}>
              <GitHubIcon style={{ fontSize: 30 }} />
            </Link>
            <Link href={"https://x.com/mh4bib"}>
              <Image src={XIcon} width={30} alt="x icon" />
            </Link>
            <Link href={"https://facebook.com/mh4bib"}>
              <FacebookIcon style={{ fontSize: 30 }} />
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} mt={4} mb={1}>
          <Typography
            sx={{ opacity: "0.8" }}
            variant="caption"
            color="text.secondary"
            align="center"
            my={1}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://mh4bib.vercel.app/">
              Mahiuddin Habib
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
