import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            At Sri Jayarama Constructions, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information such as your name, email address, phone number, and property preferences when you fill out forms on our website. We also collect non-personal information such as browser type, IP address, and pages visited to improve our user experience.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            The information we collect is used to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Respond to your inquiries and schedule site visits.</li>
            <li>Send updates about our projects, offers, and news.</li>
            <li>Improve our website functionality and customer service.</li>
            <li>Process transactions and manage your account.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Disclosure</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide you with advance notice or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
          <p className="mb-4">
            Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect some features of the site.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:constructions@srijayarama.com" className="text-primary hover:underline">constructions@srijayarama.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
