import { Button } from "@mui/material";
import { Download } from "lucide-react";
import Observer from "../framer";

const CallToAction = () => {
  return (
    <Observer>
      <section
        id="download"
        className="py-24 bg-[#0DA596] text-primary-foreground"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Your Alberta Journey?
            </h2>

            <p className="text-xl text-white">
              Join thousands of newcomers who have successfully settled in
              Alberta with UniSettle. Download the app today and take the first
              step towards your new life in Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="large"
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#0DA596",
                  "&:hover": {
                    backgroundColor: "#e0f2f1",
                  },
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download for iOS
              </Button>
              <Button
                size="large"
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "#0DA596",
                  "&:hover": {
                    backgroundColor: "#e0f2f1",
                  },
                }}
              >
                <Download className="h-5 w-5 mr-2" />
                Download for Android
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              {/* <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white">4.8/5 rating from 2,000+ users</span> */}
            </div>
          </div>
        </div>
      </section>
    </Observer>
  );
};

export default CallToAction;
