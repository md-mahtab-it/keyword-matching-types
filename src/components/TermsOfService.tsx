import React from 'react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using this keyword tool, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed">
              This tool is provided free of charge for personal and commercial use. You may use the generated keywords in your advertising campaigns without attribution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              The tool is provided "as is" without any warranties. We do not guarantee the accuracy or completeness of keyword conversions. Use the results at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="text-gray-600 leading-relaxed">
              We shall not be held liable for any damages arising from the use of this tool. This includes but is not limited to errors, omissions, or advertising campaign performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Revisions</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update these terms of service at any time. Continued use of the tool following any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these terms, please contact us at support@keywordmatchingtypes.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}