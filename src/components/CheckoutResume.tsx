import { Box, Button } from "@mui/material";
import Bg from "@/assets/bg.jpg";

const CheckoutResume = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${Bg.src})`,
          height: "270px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <h1
            style={{ color: "#CFE4DC", fontFamily: "Ubuntu", fontSize: "40px" }}
          >
            Checkout My Resume!
          </h1>
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
