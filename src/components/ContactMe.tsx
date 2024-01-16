import { Box, Button, SvgIcon } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import  MailFastIcon as React.Component from "@/assets/MailFastIcon.svg";

const ContactMe = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box
        bgcolor={"greenyellow"}
        // width={"200%"}
        height={"150px"}
        marginLeft={"-80px"}
        marginRight={"-80px"}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "50%",
          marginBottom: { xs: "-70px", sm: "-50px" },
        }}
      >
        <Box>
          <SvgIcon
            sx={{ fontSize: { xs: "80px", sm: "100px" }, marginTop: "5px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail-fast"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7h3" />
              <path d="M3 11h2" />
              <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" />
              <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" />
            </svg>
          </SvgIcon>
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        bgcolor={"greenyellow"}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "70%", md: "700px" },
            textAlign: "center",
            mx: 2,
          }}
          // bgcolor={"blueviolet"}
        >
          <h1>Get In Touch!</h1>
          <p>
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <Button
            variant="contained"
            // endIcon={<SendRoundedIcon />}
            // startIcon={<SendRoundedIcon />}
            sx={{ mt: 2, mb: 12 }}
          >
            Say Hello
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
