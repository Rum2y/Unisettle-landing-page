import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Android, Apple } from "@mui/icons-material";
import { useState } from "react";

export default function NavBar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  interface HandleClickEvent extends React.MouseEvent<HTMLButtonElement> {}

  const handleClick = (event: HandleClickEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b-teal-100 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <RouterLink to="/" className="flex items-center space-x-3">
          <img src={"/logo_1.png"} alt="UniSettle" className="h-full w-15" />
          <span className="text-xl font-bold text-[#0DA596] hidden md:block">
            UniSettle
          </span>
        </RouterLink>
        {location.pathname === "/" && (
          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="how-it-works"
              smooth={true}
              duration={500}
              className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
            >
              How It Works
            </ScrollLink>
            <ScrollLink
              to="download"
              smooth={true}
              duration={500}
              className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
            >
              Download
            </ScrollLink>
          </nav>
        )}

        <Button
          variant="contained"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            backgroundColor: "#0DA596",
            color: "white",
            "&:hover": { backgroundColor: "#0a7d74" },
          }}
        >
          Download App
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
          <MenuItem
            onClick={() =>
              window.open(
                "https://apps.apple.com/ca/app/unisettle/id6749332997"
              )
            }
          >
            {" "}
            <Apple className="h-5 w-5 mr-2" /> Download for iOS
          </MenuItem>
          <MenuItem>
            {" "}
            <Android className="h-5 w-5 mr-2" /> Download for Android
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
