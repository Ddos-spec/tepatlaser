/**
 * @file src/utils/tracking.js
 * @description Utility functions for advanced tracking, including Enhanced Conversions.
 */

/**
 * Hashes a string using the SHA-256 algorithm.
 * This is required by Google for Enhanced Conversions to protect user privacy.
 * @param {string} str The string to hash.
 * @returns {Promise<string>} A promise that resolves with the hex-encoded hash.
 */
async function sha256(str) {
  const textAsBuffer = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashAsHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashAsHex;
}

/**
 * Prepares and pushes enhanced conversion data to the dataLayer.
 * This function should be called when a conversion event occurs and user data is available.
 *
 * @param {object} userData - The user data to be sent.
 * @param {string} [userData.email] - The user's email address.
 * @param {string} [userData.phone] - The user's phone number.
 */
export async function trackEnhancedConversion(userData) {
  if (!window.dataLayer) {
    console.error('dataLayer is not available.');
    return;
  }

  const enhancedConversionData = {};

  // IMPORTANT:
  // The following are placeholders. In a real-world scenario, you would
  // replace these with actual user data captured from a form or another source.
  // For this implementation, we are demonstrating the structure.
  const {
    email = "PLACEHOLDER_EMAIL@example.com",
    phone = "PLACEHOLDER_PHONE" // e.g., "+628123456789"
  } = userData;

  // Google requires the data to be normalized and then hashed.
  if (email && email !== "PLACEHOLDER_EMAIL@example.com") {
    // Normalize email: remove dots from gmail and convert to lowercase
    const normalizedEmail = email.toLowerCase();
    enhancedConversionData.email_sha256 = await sha256(normalizedEmail);
  }

  if (phone && phone !== "PLACEHOLDER_PHONE") {
    // Normalize phone: remove all non-numeric characters and include country code.
    const normalizedPhone = `+${phone.replace(/\D/g, '')}`;
    enhancedConversionData.phone_number_sha256 = await sha256(normalizedPhone);
  }

  // Only push to dataLayer if we have some data to send.
  if (Object.keys(enhancedConversionData).length > 0) {
    window.dataLayer.push({
      event: 'enhanced_conversion',
      enhanced_conversion_data: enhancedConversionData
    });

    console.log('Enhanced Conversion Data Pushed:', enhancedConversionData);
  } else {
    console.warn('trackEnhancedConversion called, but no user data was provided to process.');
  }
}

/**
 * Adds event listeners to all tracked links (WhatsApp, Phone) to trigger
 * the enhanced conversion tracking with placeholder data.
 *
 * In a real implementation, you would modify this to capture actual user data
 * before calling trackEnhancedConversion.
 */
export function initializeEnhancedConversionTracking() {
    document.addEventListener('click', (event) => {
        // Use event delegation to check if a tracked link was clicked
        const clickedElement = event.target.closest('[data-gtm-id]');

        if (clickedElement) {
            const gtmId = clickedElement.getAttribute('data-gtm-id');

            if (gtmId === 'whatsapp-click' || gtmId === 'phone-click') {
                console.log(`Tracked link clicked: ${gtmId}. Preparing conceptual enhanced conversion data.`);

                // CONCEPTUAL: In a real scenario, you would first capture user data here.
                // For example, by showing a modal asking for their phone number.
                // Since we have no form, we will proceed with placeholder data to demonstrate
                // that the function is being called correctly.
                const conceptualUserData = {
                    // This phone number should be dynamically captured from the user.
                    // Using a placeholder to show the functionality.
                    phone: '081234567890', // Using a placeholder phone number
                };

                trackEnhancedConversion(conceptualUserData);
            }
        }
    });
}
