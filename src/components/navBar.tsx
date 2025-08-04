import { Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
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
          sx={{
            backgroundColor: "#0DA596",
            color: "white",
            "&:hover": { backgroundColor: "#0a7d74" },
          }}
        >
          Download App
        </Button>
      </div>
    </header>
  );
}
