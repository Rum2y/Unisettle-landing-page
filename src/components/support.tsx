import { Button } from "@mui/material";
import { Mail, MessageSquare } from "lucide-react";
import Observer from "../framer";

const Support = () => {
  return (
    <Observer>
      <section
        id="support"
        className="py-24 bg-[#0DA596] text-primary-foreground"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
              UniSettle — Support & Help
            </h2>

            <p className="text-xl text-white text-center">
              Welcome to the UniSettle support page! If you're an international
              student settling in Alberta and need help using the app or
              navigating any of the resources, you're in the right place.
            </p>

            <div className="bg-white rounded-lg p-8 text-[#0DA596]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                📱 App Support
              </h3>
              <p className="mb-4">
                If you're facing issues with the app (e.g., broken links, bugs,
                or usability problems), please reach out:
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email: </span>
                <a
                  href="mailto:unisettlehelp@gmail.com"
                  className="hover:underline"
                >
                  unisettleapp@gmail.com
                </a>
              </div>

              <p>We usually respond within 1–2 business days.</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-[#0DA596]">
              <h3 className="text-2xl font-bold mb-6">
                ❓ Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg">🔹 What is UniSettle?</h4>
                  <p>
                    UniSettle is a mobile app designed to help international
                    students settle into life in Alberta. It offers step-by-step
                    guides for getting your SIN, Alberta ID, bank account, phone
                    number, housing, and more.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">🔹 Who is it for?</h4>
                  <p>
                    Any new international student coming to Alberta — whether
                    you're studying at the University of Alberta, the University
                    of Calgary, or any other post-secondary institution.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    🔹 Is the information updated?
                  </h4>
                  <p>
                    Yes, we regularly update the app content to keep it accurate
                    based on user feedback and changing requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-[#0DA596]">
              <h3 className="text-2xl font-bold mb-6">
                💬 Suggest Improvements
              </h3>
              <p className="mb-4">
                Have feedback or want to suggest new features? Fill out our
                feedback form.
              </p>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0DA596",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0b8a7d",
                  },
                }}
              >
                Feedback Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Observer>
  );
};

export default Support;
