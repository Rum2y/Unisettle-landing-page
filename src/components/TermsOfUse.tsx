import { Mail, Globe } from "lucide-react";

const TermsOfUse = () => {
  return (
    <section id="terms" className="py-24 bg-[#0DA596] text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
            Terms of Use
          </h2>

          <div className="bg-white rounded-lg p-8 text-[#0DA596] space-y-6">
            <p className="font-medium">Effective Date: 31st July, 2025</p>

            <p>
              Welcome to <strong>Unisettle</strong> ("we", "our", "us"). These
              Terms of Use ("Terms") govern your access to and use of the
              Unisettle mobile application ("App") and related services. By
              using Unisettle, you agree to these Terms. If you do not agree,
              please discontinue use of the App.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-4">1. Overview</h3>
              <p>
                Unisettle is designed to help international students settle more
                easily when they arrive in Alberta, Canada. It offers guides and
                resources for essential tasks like applying for a SIN, obtaining
                an Alberta ID, finding housing, and locating local services.
                Users may post their businesses, and business owners can
                subscribe to a monthly plan to have their business featured in
                the App.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">2. Eligibility</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unisettle is open to anyone.</li>
                <li>You must be at least 13 years old to use the App.</li>
                <li>
                  You agree to comply with all applicable laws and regulations.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">3. User Accounts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may need to create an account to post or feature your
                  business.
                </li>
                <li>
                  You are responsible for keeping your login details secure.
                </li>
                <li>
                  You must provide accurate and up-to-date information when
                  registering.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">4. Business Listings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting a business is free.</li>
                <li>
                  Featured business subscriptions offer greater visibility and
                  are billed monthly.
                </li>
                <li>
                  Business listings must comply with all applicable laws and
                  must not promote illegal or offensive content.
                </li>
                <li>
                  We reserve the right to remove any listing that violates these
                  Terms.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                5. Subscription & Payments
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Subscriptions are billed monthly at the rate shown in-App.
                </li>
                <li>Payments are processed via our chosen payment provider.</li>
                <li>Fees are non-refundable unless required by law.</li>
                <li>
                  You can cancel anytime; cancellation takes effect at the end
                  of your billing cycle.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                6. User Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do not use the App for illegal purposes.</li>
                <li>Do not post false or misleading information.</li>
                <li>Do not infringe on others’ intellectual property.</li>
                <li>
                  Do not upload harmful software or attempt to disrupt the App.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                7. Intellectual Property
              </h3>
              <p>
                The Unisettle App, including its code, design, graphics, and
                content, is owned by [Your Name/Company] and protected by
                copyright law. Users retain ownership of their own uploaded
                business listings but grant us a non-exclusive, worldwide,
                royalty-free license to display and promote that content within
                the App.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">8. Disclaimers</h3>
              <p>
                Unisettle provides general guidance only. While we aim for
                accuracy, we do not guarantee all information is up-to-date or
                suitable for your needs. Use of the App is at your own risk and
                is provided "as is" without warranties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                9. Limitation of Liability
              </h3>
              <p>
                To the fullest extent permitted by law, we are not liable for
                any indirect, incidental, or consequential damages arising from
                your use of the App.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">10. Termination</h3>
              <p>
                We may suspend or terminate your access without notice if you
                violate these Terms. You may stop using the App at any time.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">11. Governing Law</h3>
              <p>
                These Terms are governed by the laws of Alberta, Canada. Any
                disputes will be handled exclusively in Alberta courts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                12. Changes to These Terms
              </h3>
              <p>
                We may update these Terms from time to time. Significant changes
                will be communicated via the App or email. Continued use after
                changes means you accept the revised Terms.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">13. Contact Us</h3>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>Email: </span>
                  <a
                    href="mailto:unisettleapp@gmail.com"
                    className="hover:underline"
                  >
                    unisettleapp@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>Website: </span>
                  <a
                    href="https://unisettle.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://unisettle.ca
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

export default TermsOfUse;
