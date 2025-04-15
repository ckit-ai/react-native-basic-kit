# React Native Basic Kit - Project Documentation

## Project Overview
This is a React Native mobile application with basic authentication and user profile features.

## Key Features
- User authentication (login/signup)
- User profile with avatar
- Menu with profile and logout options
- Circular avatar in the top-right corner

## Project Structure
- `/app` - Main application code
  - `/(auth)` - Authentication screens (login, signup)
  - `/(app)` - Application screens
  - `/context` - Context providers (AuthContext)
  - `_layout.tsx` - Root layout with navigation
- `/components` - Reusable components
  - `/ui` - GlueStack UI v2 components
  - `UserMenu.tsx` - User menu with avatar and options

## UI Components
- Uses GlueStack UI v2 components with proper import paths
- Components are added via CLI: `npx gluestack-ui add component-name`
- Uses NativeWind for styling

## Authentication
- The app uses a simple authentication context
- Login accepts any credentials (no validation)
- Authentication state is managed through AuthContext

## User Interface
- Circular avatar in the top-right corner when logged in
- Menu options: Profile and Logout
- Profile page shows user information with larger avatar

## Navigation
- Uses Expo Router for navigation
- Protected routes based on authentication state
- Login redirects to hello-world page
- Logout redirects to login page

## Important Notes
- No actual API integration - authentication is simulated
- User can log in with any email/password combination
- Profile information is currently hardcoded
- Avatar uses a placeholder image

## Development Instructions
1. Run the app with `npx expo start`
2. Login with any email and password
3. Access profile through the menu
4. Logout to return to login screen

## Adding New GlueStack UI Components
To add a new GlueStack UI component:
```bash
npx gluestack-ui add component-name
```

## Future Improvements
- Add actual API integration
- Implement user data persistence
- Add profile editing functionality
- Customize avatar upload
- Add more menu options as needed 