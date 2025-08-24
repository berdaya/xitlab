'use server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function addToWaitlist(prevState: any, formData: FormData) {
  const email = formData.get('email');

  // Basic email validation
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return { message: 'Please enter a valid email address.', status: 'error' };
  }

  // Start the Google Sheets operation but don't wait for it
  // This is a "fire and forget" approach
  setImmediate(async () => {
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({ Email: email, Timestamp: new Date().toISOString() });
      
      console.log('Successfully added email to spreadsheet:', email);
    } catch (error) {
      console.error('Background spreadsheet operation failed:', error);
    }
  });

  // Return immediately with success message
  // The user doesn't need to wait for Google Sheets
  return { 
    message: 'Success! You have been added to the waitlist.', 
    status: 'success' 
  };
}