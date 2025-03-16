import { environment } from 'src/environments/environment'; // Import the environment file

export const config = {
  // Base API URL (for development and production)
  apiUrl: environment.apiUrl, // This will be different depending on the environment (dev or prod)
  
  // API endpoints
  apiEndpoints: {
    getUsers: '/api/users',
    getUsersByRole: '/api/users/role/',
    getUserById: '/api/users/',
    getUserBySort: '/api/users/sorted',
    getUserBySsn: '/api/users/ssn/'
  },
  
  appTitle: 'User Grid Application'

};
