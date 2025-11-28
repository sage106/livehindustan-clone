export function handleAPIError(error) {
  console.error('API Error:', error);
  
  if (error.response) {
    // Server responded with error
    return {
      success: false,
      message: 'सर्वर से जवाब में त्रुटि',
      statusCode: error.response.status
    };
  } else if (error.request) {
    // No response received
    return {
      success: false,
      message: 'सर्वर से कोई जवाब नहीं मिला',
      statusCode: null
    };
  } else {
    // Error in request setup
    return {
      success: false,
      message: 'अनुरोध भेजने में त्रुटि',
      statusCode: null
    };
  }
}

export function validateNewsData(data) {
  if (!data) return false;
  if (!data.title || data.title.trim() === '') return false;
  if (!data.category || data.category.trim() === '') return false;
  return true;
}