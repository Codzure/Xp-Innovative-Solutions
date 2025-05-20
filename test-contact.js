const https = require('https');

const TEST_EMAIL = 'test@example.com';
const TEST_NAME = 'Test User';
const TEST_MESSAGE = 'This is a test message from the test script';

// For testing against local development server
const API_URL = 'http://localhost:3000/api/contact';
// For testing against production
// const API_URL = 'YOUR_VERCEL_URL/api/contact';

const postData = JSON.stringify({
  name: TEST_NAME,
  email: TEST_EMAIL,
  message: TEST_MESSAGE
});

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  },
  timeout: 5000 // 5 seconds timeout
};

console.log('Testing contact form submission...');

const req = https.request(API_URL.replace('http:', 'https:'), options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('Response:', response);
      
      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log('✅ Test passed! Message sent successfully.');
      } else {
        console.error(`❌ Test failed with status: ${res.statusCode}`);
      }
    } catch (e) {
      console.error('Error parsing response:', e);
    }
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.on('timeout', () => {
  console.error('Request timed out');
  req.destroy();
});

// Write data to request body
req.write(postData);
req.end();
