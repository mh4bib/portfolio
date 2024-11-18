"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Typography, LinearProgress, Grid } from "@mui/material";
import FeedbackDialog from "@/components/FeedbackDialog";
import StarIcon from "@mui/icons-material/Star";

const PublicFeedback = () => {
  const [ratings, setRatings] = useState<Record<string, number>>({
    design: 0,
    navigation: 0,
    content: 0,
    accessibility: 0,
    performance: 0,
  });
  const [overallAverage, setOverallAverage] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const fetchRatings = async () => {
    try {
      const response = await fetch("/api/feedback");
      const data = await response.json();

      const { feedback_count, ...ratings } = data as Record<string, number>;

      setRatings(ratings);

      const total = Object.values(ratings).reduce(
        (acc, rating) => +acc + +rating,
        0
      );

      console.log("total", total);

      const average = total / 5;
      setOverallAverage(average);
      setTotalFeedback(feedback_count);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  return (
    <Box sx={{ bgcolor: "#1B4242", color: "#e4eeeb", p: 4 }}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ fontFamily: "Ubuntu", mb: 4 }}
      >
        Public Feedback
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                // color: "#666",
                fontWeight: "normal",
                fontSize: "1.5rem",
              }}
            >
              Overall Rating
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                my: 2,
              }}
            >
              {overallAverage.toFixed(1)}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[1, 2, 3, 4, 5].map((star) => {
                const isHalfStar =
                  star === Math.ceil(overallAverage) &&
                  overallAverage % 1 !== 0;
                return (
                  <StarIcon
                    key={star}
                    sx={{
                      fontSize: "2rem",
                      fill:
                        star <= Math.floor(overallAverage)
                          ? "white"
                          : isHalfStar
                          ? "url(#half)"
                          : "#77998e",
                      color:
                        star <= Math.floor(overallAverage)
                          ? "white"
                          : isHalfStar
                          ? "url(#half)"
                          : "#77998e",
                    }}
                  />
                );
              })}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                      offset="50%"
                      style={{ stopColor: "white", stopOpacity: 1 }}
                    />
                    <stop
                      offset="50%"
                      style={{ stopColor: "#77998e", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <Typography
              sx={{
                // color: "#666",
                fontSize: "0.875rem",
                mt: 1,
              }}
            >
              based on {totalFeedback} reviews
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {Object.keys(ratings).map(
            (key) =>
              key !== "totalFeedback" && (
                <Box key={key} sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontFamily: "Ubuntu" }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LinearProgress
                      variant="determinate"
                      value={(ratings[key] / 5) * 100}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        bgcolor: "#77998e",
                        flexGrow: 1,
                      }}
                    />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                      {Number(ratings[key])?.toFixed(2)} / 5
                    </Typography>
                  </Box>
                </Box>
              )
          )}
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{ bgcolor: "#92bcae", color: "#1B4242" }}
        >
          Give Feedback
        </Button>
      </Box>
      <FeedbackDialog
        open={open}
        setOpen={setOpen}
        onFeedbackSubmitted={fetchRatings}
      />
    </Box>
  );
};

export default PublicFeedback;
