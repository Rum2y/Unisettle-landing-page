import {
  Box,
  Container,
  Typography,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { Instagram, Mail, Twitter, LinkedIn } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Observer from "../framer";

const Footer = () => {
  return (
    <Observer>
      <Box
        component="footer"
        sx={{
          color: "gray.50",
          py: 8,
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              mb: 6,
            }}
          >
            {/* App Information */}
            <Box
              sx={{
                flex: "1 1 250px",
                minWidth: "250px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 700, color: "#0DA596" }}
              >
                UniSettle
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "gray" }}>
                Your trusted guide for settling in Alberta, Canada.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <Mail fontSize="small" />
                <MuiLink
                  href="mailto:unisettleapp@gmail.com"
                  color="#0DA596"
                  underline="hover"
                >
                  unisettleapp@gmail.com
                </MuiLink>
              </Typography>
            </Box>

            {/* Social Links */}
            <Box
              sx={{
                flex: "1 1 250px",
                minWidth: "250px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: 600, color: "#0DA596" }}
              >
                Connect With Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 2,
                  justifyContent: "center",
                }}
              >
                <IconButton
                  href="https://instagram.com/unisettle"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "gray",
                    "&:hover": { color: "#0DA596" },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://twitter.com/unisettle"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "gray",
                    "&:hover": { color: "#0DA596" },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://linkedin.com/company/unisettle"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "gray",
                    "&:hover": { color: "#0DA596" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Developed by Iyinoluwa Adejumo
              </Typography>
            </Box>
          </Box>

          {/* Copyright and Privacy Policy */}
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              mt: 2,
              pt: 4,
            }}
          >
            <Typography variant="body2">
              © {new Date().getFullYear()} UniSettle. All rights reserved.
            </Typography>
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
          </Box>
        </Container>
      </Box>
    </Observer>
  );
};

export default Footer;
