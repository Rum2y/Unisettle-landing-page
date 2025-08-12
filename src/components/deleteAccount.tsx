import { Mail, Globe } from "lucide-react";

const DeleteAccount = () => {
  return (
    <section
      id="delete-account"
      className="py-24 bg-[#0DA596] text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
            Delete Your UniSettle Account
          </h2>

          <div className="bg-white rounded-lg p-8 text-[#0DA596] space-y-6">
            <p className="font-medium">Effective Date: 31st July, 2025</p>

            <p>
              If you wish to delete your UniSettle account, this page outlines
              the steps and what happens to your data once your account is
              removed.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                1. How to Delete Your Account
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Open the UniSettle app.</li>
                <li>
                  Go to <span className="font-medium">Profile → Settings</span>.
                </li>
                <li>
                  Tap on <span className="font-medium">Delete Account</span> and
                  confirm your choice.
                </li>
                <li>
                  If you cannot access the app, email us using the contact
                  details below.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                2. What Happens After Deletion
              </h3>
              <p className="mb-4">When your account is deleted:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Your personal information (name, email, profile data) will be
                  permanently removed.
                </li>
                <li>
                  Your uploaded business listings, reviews, and analytics data
                  will be deleted.
                </li>
                <li>
                  Some minimal data may be retained for legal or security
                  purposes (e.g., payment transaction records) for a maximum of
                  30 days.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">3. Contact Us</h3>
              <p className="mb-4">
                If you have any issues deleting your account, contact us at:
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

export default DeleteAccount;
