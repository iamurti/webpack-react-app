# webpack-react-app

This project is a small React application created as a quick reference and practice for setting up Webpack from scratch.

## Features

- Custom Webpack configuration for React and CSS
- Example functional component using hooks (`useState`)
- Babel for JSX transpilation
- Hot reload with `webpack-dev-server`

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server (development mode):
   ```sh
   npm run dev
   ```
   This will start the app in development mode with hot reload enabled.

3. Start the server with the default script (also development mode):
   ```sh
   npm start
   ```

4. Build the project for production:
   ```sh
   npm run build
   ```
   This will generate optimized files in the `build` folder, ready for deployment.

## Project Structure

- `src/App.js`: Main component with a counter
- `src/index.js`: React entry point
- `webpack.config.js`: Webpack configuration
- `package.json`: Dependencies and scripts

## Purpose

This project serves as a quick reference for configuring Webpack in modern React projects and reviewing key concepts such as loaders, plugins, and presets.

---

**Author:** murti
