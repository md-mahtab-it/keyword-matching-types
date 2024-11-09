export default function Content() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About Our Keyword Tool</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            Our Keyword Match Type Tool is designed specifically for search advertising professionals who want to optimize their PPC campaigns. This tool streamlines the process of converting keywords into various match types supported by major search advertising platforms like Google Ads and Microsoft Advertising.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're managing small campaigns or handling enterprise-level accounts, our tool helps you save time and reduce errors in keyword management. The tool supports all standard match types including broad match, modified broad match, phrase match, and exact match.
          </p>
        </div>
      </section>

      <section id="faqs" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">What are keyword match types?</h3>
            <p className="text-gray-600">
              Keyword match types are different ways to specify how closely a search query needs to match your keyword for your ad to appear. Each match type serves a different strategic purpose in your advertising campaigns.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Which match types does this tool support?</h3>
            <p className="text-gray-600">
              Our tool supports all major match types used in search advertising:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Broad Match (default match type)</li>
              <li>Modified Broad Match (using + symbol)</li>
              <li>Phrase Match (using quotation marks)</li>
              <li>Exact Match (using square brackets)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">How do I use the separator options?</h3>
            <p className="text-gray-600">
              The separator options determine how multi-word keywords are joined:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              <li>Space: Words are separated by spaces (default)</li>
              <li>Nothing: Words are joined together without separation</li>
              <li>Dash: Words are separated by hyphens</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Can I use this tool for both Google Ads and Microsoft Ads?</h3>
            <p className="text-gray-600">
              Yes! The tool is designed to work with both Google Ads and Microsoft Advertising (formerly Bing Ads). The match type syntax is compatible with both platforms, making it versatile for all your search advertising needs.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-6">
            Have questions about our keyword tool? Need help with your PPC campaigns? We're here to help! Reach out to our team for support or suggestions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Support Hours</h3>
              <p className="text-gray-600">
                Monday - Friday<br />
                9:00 AM - 5:00 PM EST
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Email Support</h3>
              <p className="text-gray-600">
                For general inquiries:<br />
                support@keywordmatchingtypes.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}