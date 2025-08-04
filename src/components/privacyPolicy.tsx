import { Mail, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section
      id="privacy"
      className="py-24 bg-[#0DA596] text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
            Privacy Policy
          </h2>

          <div className="bg-white rounded-lg p-8 text-[#0DA596] space-y-6">
            <p className="font-medium">Effective Date: 31st July, 2025</p>

            <p>
              UniSettle ("we", "us", or "our") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our mobile application
              ("App").
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h3>
              <p className="mb-4">
                We do not collect personally identifiable information unless you
                voluntarily provide it. The types of data we may collect
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Usage Data:</span> Anonymous
                  data about how the App is accessed and used (e.g., pages
                  viewed, buttons clicked).
                </li>
                <li>
                  <span className="font-medium">Device Information:</span>{" "}
                  Device type, OS version, and app version (for troubleshooting
                  and improvements).
                </li>
                <li>
                  <span className="font-medium">Optional User Input:</span> If
                  you contact us through the app (e.g., feedback or support), we
                  may collect your email or message content.
                </li>
              </ul>
              <p className="font-medium">
                We do NOT collect: names, addresses, SIN, Alberta ID numbers, or
                any sensitive personal data.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h3>
              <p className="mb-4">We use the limited data we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Improve app performance and user experience</li>
                <li>Fix bugs and technical issues</li>
                <li>Respond to feedback or support requests</li>
              </ul>
              <p>
                We do not sell, rent, or share your information with third
                parties for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                3. Third-Party Services
              </h3>
              <p>
                Our App may contain links to third-party services (e.g., Google
                Maps, government websites). These services have their own
                privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                4. Data Storage and Security
              </h3>
              <p>
                We take reasonable measures to protect your data. However,
                please remember no method of transmission or storage is 100%
                secure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">5. Your Rights</h3>
              <p className="mb-4">You can contact us anytime to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Request details on what data we may have (if any)</li>
                <li>Ask us to delete your data</li>
                <li>Provide feedback or raise concerns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">6. Contact Us</h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>Email: </span>
                  <a
                    href="mailto:unisettlehelp@gmail.com"
                    className="hover:underline"
                  >
                    unisettleapp@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>Website: </span>
                  <a
                    href="https://unisettle.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://unisettle.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
