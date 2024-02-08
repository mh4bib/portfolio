import { Box, Button } from "@mui/material";
import BannerImg from "@/assets/banner.jpg";

const CheckoutResume = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${BannerImg.src})`,
          height: "200px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <h1 style={{ color: "blue" }}>Checkout My Resume!</h1>
          <div className="lgBtnContainer">
            <a href="/resume.pdf" download>
              <span>Download a Copy of My Resume</span>
              <span>Download a Copy of My Resume</span>
            </a>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutResume;
