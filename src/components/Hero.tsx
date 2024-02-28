import { Box, Grid, SvgIcon } from "@mui/material";
import Image from "next/image";
import sampleCover from "@/assets/sampleCoverImg.png";
import heroCover from "../../public/images/hero-cover.svg";
import bgVector from "../../public/images/bg-vector.svg";

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
        <Box /*  bgcolor={"darkgrey"} */>
          <h1>Hi</h1>
          <h1>I&apos;m Jack</h1>
          <h1>A Lorem ipsum dolor sit dolor</h1>
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
