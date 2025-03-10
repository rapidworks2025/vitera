import React from 'react';
import { Link } from 'react-router-dom';
import VLOGO from '../assets/vteralogo.png';

function Impressum() {
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

      {/* Impressum Content */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-display mb-4">
              Impressum
            </h1>
            <p className="text-lg text-gray-600">Legal Information</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Company Information</h2>
            <p>
              <strong>Vitera GmbH</strong><br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Germany
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p>
              Email: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a><br />
              Phone: +49 30 1234567<br />
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Registration</h2>
            <p>
              Commercial Register: Amtsgericht Berlin-Charlottenburg<br />
              Registration Number: HRB 123456<br />
              VAT Identification Number: DE123456789
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Responsible for Content</h2>
            <p>
              According to § 55 Abs. 2 RStV:<br />
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Germany
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p>
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
            
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG (German Telemedia Act). According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
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

export default Impressum; 