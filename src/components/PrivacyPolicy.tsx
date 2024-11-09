import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: November 09, 2024</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              Our keyword match tool does not collect any personal information. All keyword conversions are processed locally in your browser, and we do not store or transmit any of your keywords or generated results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Since we don't collect any personal information, there is no usage or sharing of data. Your keyword data remains private and is only accessible on your local device during the session.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              We comply with the requirements of COPPA (Children's Online Privacy Protection Act) and similar regulations worldwide. If we discover that we have collected personal information from a child under 13 without parental consent, we will delete that information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Google Analytics</h2>
            <p className="text-gray-600 leading-relaxed">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects standard internet log information and visitor behavior information in a way that doesn't identify anyone. This information includes:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Geographic location (country and city level)</li>
              <li>Referring website or source</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-2">
              You can opt-out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on or by enabling "Do Not Track" in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Google AdSense</h2>
            <p className="text-gray-600 leading-relaxed">
              We display advertisements through Google AdSense on our website. Google AdSense uses cookies and similar technologies to:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Serve personalized ads based on your browsing history and interests</li>
              <li>Limit the number of times you see an ad</li>
              <li>Measure the effectiveness of advertisements</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-2">
              You can learn more about Google's advertising cookies and privacy practices in the <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Help Center</a>. You can also customize your ad preferences or opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              Apart from Google Analytics and AdSense cookies, we do not use any additional cookies or tracking mechanisms. Essential cookies required for the tool's functionality are processed entirely client-side.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Besides Google Analytics and AdSense, we do not integrate with any other third-party services that could collect or process your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Updates to Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date. We encourage you to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our privacy policy, please contact us at support@keywordmatchingtypes.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}