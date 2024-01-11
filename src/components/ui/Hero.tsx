import { Box, Grid } from "@mui/material";
import Image from "next/image";
import sampleCover from "@/assets/sampleCoverImg.png";

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{ overflowX: "hidden", marginTop: "-3px" }}
      maxWidth={"xl"}
      mx={"auto"} /*  bgcolor={"aqua"} */
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
          alignItems: { xs: "center", sm: "end" },
        }}
        bgcolor={"#6c65ff"}
      >
        <Box /*  bgcolor={"darkgrey"} */>
          <h1>Hi</h1>
          <h1>I&apos;m Habib</h1>
          <h1>A Passionate Full Stack Developer</h1>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        zIndex="2"
        sx={{ display: { xs: "none", sm: "block" } }}
        bgcolor={"#6c65ff"}
      >
        <Image
          src={sampleCover}
          alt="hero photo"
          height={0}
          width={0}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Box
        bgcolor="#6c65ff"
        height={"350px"}
        width={"200%"}
        marginLeft={"-50px"}
        marginRight={"-50px"}
        marginTop={"-220px"}
        zIndex="1"
        sx={{ borderRadius: "50%" }}
      />
    </Grid>
  );
};

export default HeroSection;
