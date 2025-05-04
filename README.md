# 💻 Virtual AI Assistance

[![Stars](https://img.shields.io/github/stars/rahul72pal/virtual-ai-assistance?style=flat-square)](https://github.com/rahul72pal/virtual-ai-assistance/stargazers)
[![Forks](https://img.shields.io/github/forks/rahul72pal/virtual-ai-assistance?style=flat-square)](https://github.com/rahul72pal/virtual-ai-assistance/network)
[![License](https://img.shields.io/github/license/rahul72pal/virtual-ai-assistance?style=flat-square)](LICENSE.md)

This project aims to assist users in interview preparation and provide guidance on cracking interviews. Users can create interview profiles specifying role, tech stack, experience level, and interview questions. The application offers additional features to enhance the interview preparation process.

## 🚀 Technologies Used

This project leverages the following technologies:

* **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Radix UI
* **Backend:** Firebase (Firebase Admin SDK), @vapi-ai/web (for AI integration), @ai-sdk/google (potentially for Google AI integration)
* **State Management:** React Hook Form, Zod
* **Styling:** Tailwind CSS, Lucide React (icons)
* **Utilities:** Day.js, clsx, tailwind-merge, tailwindcss-animate

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rahul72pal/virtual-ai-assistance.git
   ```
2. Navigate to the project directory:
   ```bash
   cd virtual-ai-assistance
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🏃 Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the application in development mode. You can access it at `http://localhost:3000`.

2. Build the application for production:
   ```bash
   npm run build
   ```

3. Start the production server:
   ```bash
   npm run start
   ```

## 📁 File Structure

The project follows a standard Next.js app structure. Key directories include:

* `app/`: Contains the Next.js app's pages and components.
* `components/`: Reusable UI components.
* `constants/`: Application constants and configurations.
* `firebase/`: Firebase related code.
* `lib/`: Utility functions and helpers.
* `public/`: Static assets.

## 脚本 (Scripts)

The following scripts are defined in `package.json`:

* `dev`: Starts the development server using Turbopack.
* `build`: Builds the application for production.
* `start`: Starts the production server.
* `lint`: Runs ESLint to check code style and potential errors.

## 📜 License

This project is currently unlicensed.

## 🤝 Contributing and Contact

Contributions are welcome! Please open an issue or submit a pull request. You can contact the project owner, rahul72pal, through GitHub.
