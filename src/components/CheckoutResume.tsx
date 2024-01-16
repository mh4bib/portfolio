import { Box, Button } from "@mui/material";
import BannerImg from "@/assets/banner.jpg";

const CheckoutResume = () => {
  return (
    <Box>
      <Box
        sx={{
          //   width: "100%",
          display: "flex",
          justifyContent: "center",
            alignItems: "center",
          backgroundImage: `url(${BannerImg.src})`,
          height: "200px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        //   filter: "blur(8px)",
        //   -webkit-filter: blur(8px);
        }}
      >
        <Box sx={{textAlign:"center"}}>
          <h1 style={{ color: "blue" }}>Checkout My Resume!</h1>
          <Button variant="outlined" color="warning" size="large" sx={{mt:2}}>
            Download a Copy of My Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutResume;
