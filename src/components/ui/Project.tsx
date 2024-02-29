import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Project = ({ index, project }: { index: number; project: any }) => {
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
            fontFamily: "Ubuntu",
          }}
        >
          {project?.title}
        </Typography>
        <a href="https://dino-hr.vercel.app/" target="_blank">
          <Image
            src={project?.coverImg}
            alt="Cover img"
            height={0}
            width={0}
            className="projectImg"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </a>
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
            fontFamily: "Ubuntu",
          }}
        >
          {project?.title}
        </Typography>

        <Box sx={{ mb: 1, bgcolor: "#1B4242", borderRadius: "10px", p: 2 }}>
          <Typography textAlign={"justify"}>{project?.description}</Typography>
        </Box>
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={2}
          sx={{
            justifyContent: { xs: "center", md: `${isOdd ? "end" : "start"}` },
            fontSize: 13,
            fontFamily: "cursive",
          }}
        >
          {project?.techStack?.map((ts: string, index: number) => (
            <span key={index}>{ts}</span>
          ))}
        </Stack>
        <Box>
          <Tooltip title="Client Side Repository">
            <a href={project?.frontendRepo} target="_blank">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Server Side Repository">
            <a href={project?.backendRepo} target="_blank">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Live Project">
            <a href={project?.liveSite} target="_blank">
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Project;
