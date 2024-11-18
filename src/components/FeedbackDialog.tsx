"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Fab, Rating } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";

const labels: { [index: string]: string } = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const questions: Record<string, string> = {
  design: "How visually appealing did you find the design?",
  navigation: "How easy was it to navigate the website?",
  content: "How informative did you find the content?",
  accessibility: "How readable and accessible was the website?",
  performance: "How was the overall performance of the website?",
};

export default function FeedbackDialog({
  open,
  setOpen,
  onFeedbackSubmitted,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFeedbackSubmitted: () => void;
}) {
  // const [open, setOpen] = React.useState(false);
  const [hasShown, setHasShown] = React.useState(false);
  const [hover, setHover] = React.useState<Record<string, number>>({
    design: -1,
    navigation: -1,
    content: -1,
    accessibility: -1,
    performance: -1,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasShown(true);
  };

  React.useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const threshold = 100;
      const isReachBottom =
        document.body.scrollHeight - threshold <= scrolledTo;
      if (isReachBottom && !hasShown) {
        setOpen(true);
        setHasShown(true);
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [hasShown, setOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());

    console.log({ ...formJson });

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formJson),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");
        handleClose();
        onFeedbackSubmitted();
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <React.Fragment>
      {/* <Fab
        onClick={handleClickOpen}
        aria-label="feedback"
        sx={{
          position: "fixed",
          bgcolor: "#92bcae",
          color: "#1B4242",
          bottom: { xs: "20px", sm: "40px" },
          right: { xs: "20px", sm: "40px" },
          ":hover": {
            bgcolor: "#77998e",
          },
        }}
      >
        <FeedbackIcon />
      </Fab> */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
          sx: {
            backgroundColor: "#1B4242",
          },
        }}
      >
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your feedback by filling out the form below.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="student-id"
            name="studentId"
            label="Student ID"
            type="text"
            fullWidth
            variant="standard"
          />
          {Object.keys(questions).map((key) => (
            <div
              key={key}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  color: "#e4eeeb",
                  marginTop: "1.5rem",
                }}
              >
                {questions[key]}
              </p>
              <div>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name={`${key}`}
                    onChangeActive={(event, newHover) => {
                      setHover((prevHover) => ({
                        ...prevHover,
                        [key]: newHover,
                      }));
                    }}
                    sx={{ color: "#e4eeeb" }}
                    size="large"
                  />
                  <Box sx={{ ml: 2 }}>
                    {labels[hover[key] !== -1 ? hover[key] : ""]}
                  </Box>
                </Box>
              </div>
            </div>
          ))}
          {/* Add more questions similarly */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
