"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import heroCover from "../../public/images/hero-cover.svg";
import bgVector from "../../public/images/bg-vector.svg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{
        overflowX: "hidden",
        marginTop: "-75px",
      }}
      // maxWidth={"xxl"}
      // mx={"auto"}
    >
      <Grid
        item
        xs={12}
        sm={6}
        zIndex="2"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
        bgcolor={"#1B4242"}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={heroCover}
            alt="hero photo"
            height={0}
            width={0}
            style={{ width: "70%", height: "auto", marginBottom: "-20px" }}
          />
        </Box>
        <Box>
          <Typography
            variant="h2"
            textAlign={{ xs: "center", sm: "start" }}
            sx={{
              color: "#1B4242",
              fontWeight: "500",
              textShadow:
                "-1px 1px 2px #ADC8CC, 1px 1px 2px #ADC8CC, 1px -1px 0 #ADC8CC, -1px -1px 0 white",
              fontFamily: "Ubuntu",
            }}
          >
            Hi <br />
            I&apos;m Habib
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={{ xs: "center", sm: "start" }}
            sx={{
              width: { xs: "245px", sm: "305px", md: "365px" },
              fontSize: { xs: "20px", sm: "25px", md: "30px" },
              fontFamily: "Ubuntu",
            }}
          >
            A
            <Typewriter
              words={[
                " Full Stack Developer",
                " Backend Developer",
                " MERN Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        zIndex="2"
        className="hero-bg"
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundImage: `url(${bgVector.src})`,
          backgroundPositionX: "-60%",
          backgroundPositionY: "95%",
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          paddingTop: "50px",
        }}
        bgcolor={"#1B4242"}
      >
        <Image
          src={heroCover}
          alt="hero photo"
          height={0}
          width={0}
          style={{
            width: "80%",
            height: "auto",
            marginBottom: "-50px",
          }}
        />
      </Grid>
      <Box
        bgcolor="#1B4242"
        height={"150px"}
        width={"200%"}
        marginLeft={"-80px"}
        marginRight={"-80px"}
        marginTop={"-90px"}
        zIndex="1"
        sx={{ borderRadius: "50%" }}
      />
      {/* <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "30px",
          width: "500px",
          zIndex: "3",
        }}
      >
        <Image
          src={bgVector}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
          alt="bg"
        />
      </Box> */}
    </Grid>
  );
};

export default HeroSection;
