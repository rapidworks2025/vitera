import React from 'react';

function ImpressumContent({ t }) { // Pass translations if needed for consistency
  return (
    <div className="space-y-6 text-gray-700">
      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Information</h3>
        <p>Vitera Solutions GmbH</p>
        <p>Jülicher Straße 72a</p>
        <p>52070 Aachen</p>
        <p>Germany</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
        <p>Email: <a href="mailto:contact@vitera.it" className="text-primary hover:underline">contact@vitera.it</a></p>
        <p>Phone: +49 176 55728669</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Registration</h3>
        <p>Commercial Register: District Court of Aachen</p>
        <p>Registration Number: HRB 28597</p>
        <p>VAT Identification Number: TBD</p> {/* Update when available */}
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsible for Content</h3>
        <p>According to § 55 para. 2 RStV:</p>
        <p>Amadeus Küppers</p>
        <p>Jülicher Straße 72a</p>
        <p>52070 Aachen</p>
        <p>Germany</p>
      </section>
    </div>
  );
}

export default ImpressumContent; 