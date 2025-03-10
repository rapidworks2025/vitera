import React from 'react';
import { Link } from 'react-router-dom';
import VLOGO from '../assets/vteralogo.png';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-text">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={VLOGO} alt="Vitera Logo" className="h-8 w-auto" />
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              At Vitera, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. The Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Vitera. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy; 