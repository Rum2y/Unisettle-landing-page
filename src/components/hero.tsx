import { Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import Observer from "../framer";

const Hero = () => {
  return (
    <Observer>
      <section className="pt-24 pb-16 bg-gray-50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-[#0DA596]">
                <SchoolIcon className="h-5 w-5" />
                <span className="font-medium">Welcome to Alberta</span>
              </div>

              <div className="space-y-4 ">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Settlement
                  <span className="text-[#0DA596] block">
                    Journey Starts Here
                  </span>
                </h1>

                <p className="text-xl text-gray-500 max-w-lg">
                  UniSettle makes settling in Alberta simple with step-by-step
                  checklists, local business discovery, and essential guides for
                  newcomers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="contained"
                  href="#download"
                  sx={{
                    backgroundColor: "#0DA596",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#0a7d74",
                    },
                  }}
                >
                  Download for Free
                </Button>
                <Button
                  variant="outlined"
                  href="#features"
                  sx={{
                    borderColor: "#0DA596",
                    color: "#0DA596",
                    "&:hover": {
                      backgroundColor: "#0DA596",
                      color: "white",
                    },
                  }}
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                {/* <div className="flex items-center gap-2">
                <GroupIcon className="h-5 w-5 text-[#0DA596]" />
                <span className="text-sm text-gray-500">10,000+ Users</span>
              </div> */}
                <div className="flex items-center gap-2">
                  <PlaceIcon className="h-5 w-5 text-[#0DA596]" />
                  <span className="text-sm text-gray-500">
                    Alberta-Focused (More Coming Soon)
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <img
                src={"/Mockups/Home_page.png"}
                alt="People using UniSettle app"
                className="w-1/2 "
              />
              {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div> */}
            </div>
          </div>
        </div>
      </section>
    </Observer>
  );
};

export default Hero;
