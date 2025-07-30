import { Button } from "@mui/material";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b-teal-100 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={"/logo_1.png"} alt="UniSettle" className="h-full w-15" />
          <span className="text-xl font-bold text-[#0DA596]">UniSettle</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="how-it-works"
            smooth={true}
            duration={500}
            className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
          >
            How It Works
          </Link>
          <Link
            to="download"
            smooth={true}
            duration={500}
            className="text-gray-500 hover:text-[#0DA596] transition-colors cursor-pointer"
          >
            Download
          </Link>
        </nav>

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
