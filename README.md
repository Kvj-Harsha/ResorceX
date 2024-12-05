
# ResorceX

ResorceX is a modern web application designed to manage and share various types of resources efficiently. This project leverages technologies like Next.js, Tailwind CSS, and Firebase.

## Features

- **User Authentication**: Secure sign-in and sign-up pages.
- **Dashboard**: Organized resource management (files, notes, codes, etc.).
- **File Upload & Preview**: Upload files and preview them directly in the application.
- **Resource Categorization**: Group resources into assignments, notes, and codes.
- **Real-Time Data**: Powered by Firebase for real-time updates.
- **Responsive Design**: Optimized for all devices.

## Project Structure

- **`app/`**: Contains all the route-specific pages and components.
- **`public/`**: Stores static assets such as images and GIFs.
- **`_components/`**: Reusable components for UI.
- **`_utils/`**: Utility scripts for common functionalities.
- **Configuration files**: 
  - `firebase.json`: Firebase configuration.
  - `tailwind.config.js`: Tailwind CSS setup.
  - `package.json`: Node.js dependencies.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Firebase CLI (for deploying to Firebase)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ResorceX.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ResorceX
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

### Deployment

For deploying the app to Firebase:

1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy using Firebase CLI:
   ```bash
   firebase deploy
   ```

## License

This project is licensed under the MIT License.
