// WARNING: Exposing your API key directly in the frontend code is a security risk. 
// Consider using a backend function (like a Vercel Serverless Function) 
// to handle the Airtable submission securely.
const AIRTABLE_API_KEY = 'patWqxBE4qRbUEebl.c03e4f56d77c4e8eed790c87a034516ac5d70e04c49b50a6800469b72b1634e3'; 
const AIRTABLE_BASE_ID = 'appxC2eIWqO8Rayfi';
const AIRTABLE_TABLE_NAME = 'Contact Us'; // Make sure this exactly matches your table name in Airtable

const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

/**
 * Submits contact form data to Airtable.
 * 
 * @param {object} formData - The form data.
 * @param {string} formData.name - User's name.
 * @param {string} formData.email - User's email.
 * @param {string} [formData.company] - User's company (optional).
 * @param {string} formData.message - User's message.
 * @returns {Promise<object>} - The Airtable API response.
 * @throws {Error} - Throws an error if the submission fails.
 */
export const submitContactToAirtable = async ({ name, email, company = '', message }) => {
  // console.log("Submitting to Airtable:", { name, email, company, message }); // Removed log

  try {
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          // Ensure these field names EXACTLY match your column names in Airtable
          'Name': name,
          'Email': email,
          'Company': company,
          'Message': message,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Airtable Error Details:", errorData); // Kept error log for production debugging
      throw new Error(`Failed to submit data to Airtable: ${response.statusText} (Status: ${response.status})`);
    }

    const responseData = await response.json();
    // console.log("Airtable Response:", responseData); // Removed log
    return responseData;

  } catch (error) {
    console.error("Error submitting contact form to Airtable:", error); // Kept error log for production debugging
    throw error; // Re-throw the error to be handled by the calling component
  }
}; 