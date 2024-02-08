import Dino from "@/assets/dino-mockups.png";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { Directions } from "@mui/icons-material";

const Project = ({index}:{index:number}) => {
  // const indx = 2;
  const isOdd = index % 2 !== 0;
  return (
    <Grid
      container
      spacing={2}
      direction={{ xs: "row", md: `${isOdd ? "row" : "row-reverse"}` }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: { xs: "center", md: `${isOdd ? "right" : "left"}` },
      }}
    >
      <Grid item xs={12} md={6} zIndex={1}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 1,
            display: { xs: "block", md: "none" },
          }}
        >
          Dino HR
        </Typography>
        <Image
          src={Dino}
          alt="Dino Mockups"
          height={0}
          width={0}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        zIndex={2}
        sx={{
          mr: { md: `${isOdd ? "0px" : "-80px"}` },
          ml: { md: `${isOdd ? "-80px" : "0px"}` },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          Dino HR
        </Typography>

        <Box sx={{ mb: 1, bgcolor: "greenyellow", borderRadius: "10px", p: 2 }}>
          <Typography textAlign={"justify"}>
            Dino Hr is a human resources management application that allows
            users to manage their employees, departments, and roles. It is
            designed to be a simple and easy to use application that allows
            users to quickly view and manage their employees. users to manage
            their employees, departments, and roles. It is designed to be a
            simple and easy to use application that allows users to quickly view
            and manage their employees.
          </Typography>
        </Box>
        <Stack
          direction="row"
          // divider={<Divider orientation="vertical" flexItem />}
          useFlexGap
          flexWrap="wrap"
          spacing={2}
          sx={{
            justifyContent: { xs: "center", md: `${isOdd ? "end" : "start"}` },
            fontSize: 13,
            fontFamily: "cursive",
          }}
        >
          <Link href={"/"}>React</Link>
          <Link href={"/"}>Node</Link>
          <Link href={"/"}>Express</Link>
          <Link href={"/"}>MySQL</Link>
          <Link href={"/"}>Sequelize</Link>
          <Link href={"/"}>MUI</Link>
        </Stack>
        <Box>
          <Tooltip title="Client Side Repository">
            <Link href={"https://github.com/meraj2085/dino-hr"}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Server Side Repository">
            <Link href={"https://github.com/meraj2085/dino-backend"}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Live Project">
            <Link href={"https://dino-hr.vercel.app/"}>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Project;
