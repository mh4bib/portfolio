"use client";

import { Box, Button, SvgIcon } from "@mui/material";
import { useState } from "react";

const ContactMe = () => {
  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMail = (e) => {
    e.preventDefault();
    //  if (contacts.name === "" || contacts.email === "" || contacts.message === "") {
    //   alert("Please fill all the fields");
    //   return;
    // }

    setContacts({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <Box id="contact-me" sx={{ overflowX: "hidden" }}>
      <Box
        bgcolor={"#5C8374"}
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
              className="icon icon-tabler icon-tabler-mail-fast icon-shake"
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
        bgcolor={"#5C8374"}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "70%", md: "700px" },
            textAlign: "center",
            mx: 2,
            // paddingBottom: 4,
          }}
          // bgcolor={"blueviolet"}
        >
          <h1
            style={{
              fontFamily: "Ubuntu",
            }}
          >
            Get In Touch!
          </h1>
          <p>
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div>
            <div>
              <form onSubmit={sendMail}>
                <input
                  onChange={(e) => {
                    setContacts({ ...contacts, name: e.target.value });
                  }}
                  type="text"
                  required
                  placeholder="Name"
                  value={contacts.name}
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "none",
                  }}
                />
                <input
                  onChange={(e) => {
                    setContacts({ ...contacts, email: e.target.value });
                  }}
                  type="email"
                  required
                  placeholder="Email"
                  value={contacts.email}
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "none",
                  }}
                />
                <textarea
                  onChange={(e) => {
                    setContacts({ ...contacts, message: e.target.value });
                  }}
                  required
                  placeholder="Message"
                  value={contacts.message}
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "5px",
                    border: "none",
                  }}
                ></textarea>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="submit"
                    className="smButtonContainer"
                    style={{
                      margin: "30px 0",
                      fontFamily: "Ubuntu",
                      backgroundColor: "inherit",
                      border: "none",
                    }}
                  >
                    <a
                      // href="mailto: mh.habib137@gmail.com?subject=👋 Hello from Your Portfolio!&body=Hello Habib,"
                      // onClick={sendMail}
                      style={{ cursor: "pointer" }}
                    >
                      <span>Send Mail</span>
                      <span>Send Mail</span>
                    </a>
                  </button>
                </div>
              </form>
            </div>
            <div
              className="smButtonContainer"
              style={{ margin: "30px 0", fontFamily: "Ubuntu" }}
            >
              <a
                // href="mailto: mh.habib137@gmail.com?subject=👋 Hello from Your Portfolio!&body=Hello Habib,"
                onClick={() => {
                  console.log("clicked");
                }}
                style={{ cursor: "pointer" }}
              >
                <span>Say Hello</span>
                <span>Say Hello</span>
              </a>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
