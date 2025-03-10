import React from 'react';
import { Link } from 'react-router-dom';
import VLOGO from '../assets/vteralogo.png';

function Terms() {
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

      {/* Terms of Service Content */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Use of Services</h2>
            <p>
              Our platform provides a service that connects companies with freelance talent. You may use our services only as permitted by these terms and any applicable laws.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the service.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of Vitera and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Vitera, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a>
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

export default Terms; 