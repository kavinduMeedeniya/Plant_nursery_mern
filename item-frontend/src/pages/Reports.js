import React, { useState } from "react";
import { Typography, Button, Box, Paper, CircularProgress } from "@mui/material";
import { generateReport } from "../services/api";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"; // Icon for PDF
import bg02 from "../backgroundImages/back02.jpg";

const Reports = () => {
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await generateReport();
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "items-report.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: `url(${bg02})`,
        backgroundSize: "cover",
        bgcolor: "#f0f4f8", // Soft blue-gray background
        p: 3,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 4,
          borderRadius: 3,
          bgcolor: "white",
          textAlign: "center",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)", // Slight scale-up on hover
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <PictureAsPdfIcon
            sx={{ fontSize: 40, color: "#31511E", mr: 1 }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Item Sales Report
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "#666",
            mb: 3,
          }}
        >
          Generate and download a detailed PDF report of your item sales.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerateReport}
          disabled={loading}
          startIcon={
            loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <PictureAsPdfIcon />
            )
          }
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 2,
            fontSize: "1rem",
            fontWeight: "medium",
            textTransform: "none",
            backgroundColor: "#859F3D",
            "&:hover": {
              backgroundColor: "#31511E",
            },
            "&:disabled": {
              backgroundColor: "#b0bec5",
            },
          }}
        >
          {loading ? "Generating..." : "Download PDF Report"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Reports;