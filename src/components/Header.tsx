import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
      <nav className="border-b border-blue-600/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <Link to="/" className="flex items-center space-x-3">
                <Search className="w-8 h-8" />
                <span className="text-2xl font-bold">Keyword Matching Types</span>
              </Link>
            </div>
            <div className="flex justify-center mt-4 md:mt-0">
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-base hover:text-blue-200 transition">About</a>
                <a href="#faqs" className="text-base hover:text-blue-200 transition">FAQs</a>
                <a href="#contact" className="text-base hover:text-blue-200 transition">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Keyword Match Type Tool for Search Ads
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Transform your keywords into different match types for search advertising platforms. 
            Compatible with Google Ads and Microsoft Ads!
          </p>
          <div className="flex space-x-4 justify-center">
            <span className="px-4 py-2 bg-blue-600/30 rounded-full text-base">
              Google Ads
            </span>
            <span className="px-4 py-2 bg-blue-600/30 rounded-full text-base">
              Microsoft Ads
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}