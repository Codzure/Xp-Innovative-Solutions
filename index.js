// This file is required for Vercel to properly detect the project as a Node.js project
// The actual API endpoints are in the api/ directory

console.log('Vercel serverless functions are ready');

// Export a basic handler for the root path
export default function handler(req, res) {
  res.status(200).json({ message: 'API is running' });
}
