# React Native Basic Kit 🚀

A powerful and modern React Native starter kit powered by CKIT.ai. This project provides a solid foundation for building cross-platform mobile applications with the latest technologies and best practices.

<div align="center">
  <img src="https://img.shields.io/badge/CKIT.ai-Free%20Project-blue" alt="CKIT.ai Free Project" />
  <img src="https://cursor.sh/brand/logo-dark.svg" alt="Cursor Logo" width="200" />
  <img src="https://raw.githubusercontent.com/gluestack/gluestack-ui/main/img/gluestack-logo.svg" alt="GlueStack UI Logo" width="200" />
</div>

<div align="center">
  <h3>Cursor and Windsorf Ready!</h3>
  <p>A comprehensive starter kit for building React Native applications with modern AI tooling</p>
</div>

## 🛠️ Technologies & Tools

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/Gluestack_UI-4A90E2?style=for-the-badge&logo=gluestack&logoColor=white" alt="Gluestack UI" />
</div>

## 🚀 Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## 📁 Project Structure

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## 🔄 Reset Project

When you're ready to start fresh, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## 📚 Learn More

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## 🤝 Join the Community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## 📝 License

This project is part of the CKIT.ai free starter kit collection. Feel free to use it for your personal and commercial projects.

---

<div align="center">
  <p>Made with ❤️ by CKIT.ai</p>
</div>

## Features

- 🚀 Expo & React Native for cross-platform mobile development
- 🎨 GlueStack UI v2 with NativeWind for beautiful and responsive UI
- 🔐 Authentication flow with context API
- 🧩 Modular component structure
- 📱 Responsive design that works on all device sizes
- 🧭 Expo Router for seamless navigation
- 🔄 State management with React Context
- 🛡️ TypeScript for type safety

## 🤖 For AI Assistants

This project includes an [AI.md](./AI.md) file specifically designed for AI assistants. If you're using Cursor, Windsorf, or another AI-powered coding tool, this file provides detailed information about:

- Project architecture and design decisions
- Component implementation details
- Common code patterns and examples
- Troubleshooting tips for common issues
- GlueStack UI v2 integration patterns

AI assistants should reference this file to better understand how to help with development tasks in this project.

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- Expo CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-native-basic-kit.git

# Navigate to the project directory
cd react-native-basic-kit

# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure

```
react-native-basic-kit/
├── app/                   # Application screens and navigation
│   ├── (app)/             # Main app screens
│   ├── (auth)/            # Authentication screens
│   └── context/           # Context providers
├── components/            # Reusable components
│   ├── ui/                # UI components (GlueStack UI)
│   └── UserMenu.tsx       # User menu component
├── assets/                # Images, fonts, etc.
├── constants/             # App constants
└── hooks/                 # Custom hooks
```

## Adding UI Components

This project uses GlueStack UI v2. To add a new component:

```bash
npx gluestack-ui add component-name
```

## Development Tools

### AI-powered Development

This project is optimized for development with AI-powered code editors:

#### Cursor

[Cursor](https://cursor.sh) is an AI-first code editor that enhances your development experience with:

- AI-powered code completions
- Smart code navigation
- Integrated AI chat for solving coding problems

#### Windsorf

Windsorf is another AI-powered development tool that works well with this codebase, offering:

- Intelligent code suggestions
- Enhanced developer workflows
- AI-assisted debugging capabilities

### NativeWind

Styling in this project is done with [NativeWind](https://nativewind.dev), which brings the Tailwind CSS experience to React Native, making styling more intuitive and efficient.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
