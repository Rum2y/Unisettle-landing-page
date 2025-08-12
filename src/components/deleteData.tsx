import { Mail, Globe } from "lucide-react";

const DeleteData = () => {
  return (
    <section
      id="delete-data"
      className="py-24 bg-[#0DA596] text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
            Request Data Deletion
          </h2>

          <div className="bg-white rounded-lg p-8 text-[#0DA596] space-y-6">
            <p className="font-medium">Effective Date: 31st July, 2025</p>

            <p>
              UniSettle allows you to request the deletion of specific data
              without closing your account. This page explains how to submit
              such a request.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                1. Data You Can Delete
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Uploaded business listings</li>
                <li>Reviews and ratings</li>
                <li>Search history</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">
                2. How to Request Deletion
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Open the UniSettle app.</li>
                <li>
                  Go to{" "}
                  <span className="font-medium">
                    Profile → Settings → Manage My Data
                  </span>
                  .
                </li>
                <li>Select the type of data you wish to delete and confirm.</li>
                <li>
                  If you cannot access your account, email us using the contact
                  details below.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">3. Data Retention</h3>
              <p>
                Deleted data is permanently removed within 30 days, except where
                required to retain for legal or security reasons.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">4. Contact Us</h3>
              <p className="mb-4">
                If you have any issues requesting data deletion, contact us at:
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

export default DeleteData;
