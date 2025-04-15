# React Native Basic Kit - AI Assistant Guide

## Project Overview
This is a React Native mobile application starter kit with authentication, user profile, and navigation features. It uses modern React Native patterns and is built with the latest technology stack.

## For Cursor and Windsorf AI Assistants
This guide is designed specifically for AI-powered development tools like Cursor and Windsorf to better understand the project structure and assist with development.

## Key Technologies
- **React Native + Expo**: Cross-platform mobile framework
- **GlueStack UI v2**: Component library (uses import paths like `@/components/ui/component-name`)
- **NativeWind**: Tailwind CSS for React Native
- **Expo Router**: File-based routing system
- **TypeScript**: Type-safe JavaScript

## Important Design Decisions
- **GlueStack UI Integration**: Components must be added via CLI (`npx gluestack-ui add component-name`) 
- **Import Pattern**: Always use `@/components/ui/component-name` pattern (not `@gluestack-ui/themed`)
- **Auth Context**: Simple authentication state management, without actual API calls
- **Menu Design**: User menu appears as circular avatar in top right after login

## File Structure Guide
- `/app` - All screens and navigation (uses Expo Router file-based routing)
  - `/(auth)` - Authentication screens (login, signup)
  - `/(app)` - Protected application screens (requires login)
  - `/context` - React Context providers
  - `_layout.tsx` - Root layout with navigation wrapper
- `/components` - Reusable components
  - `/ui` - GlueStack UI v2 components (auto-generated)
  - `UserMenu.tsx` - Avatar menu with profile and logout options

## Component Implementation Details

### UserMenu
- Circular avatar in top-right corner
- Dropdown menu with Profile and Logout options
- Uses GlueStack UI Menu and Avatar components
- Connected to AuthContext for logout functionality

### Authentication Flow
- Login accepts any credentials (no validation required)
- Auth state stored in context using React's useState
- Protected routes redirect to login if not authenticated
- Logout clears auth state and redirects to login

### Icons
- Icons should be used as: `<Icon as={IconComponent} size="md" />`
- Not as: `<Icon as="IconName" />`
- Example: `<Icon as={EyeIcon} size="md" />`

## Common Tasks and Code Patterns

### Adding New GlueStack UI Components
```bash
npx gluestack-ui add component-name
```

### Proper Icon Usage
```tsx
import { Icon, EditIcon } from "@/components/ui/icon";

function Example() {
  return <Icon as={EditIcon} size="md" />;
}
```

### Modal Example
```tsx
import { Modal, ModalContent, ModalBackdrop } from "@/components/ui/modal";

function Example() {
  const [showModal, setShowModal] = React.useState(false);
  
  return (
    <>
      <Button onPress={() => setShowModal(true)}>Open Modal</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent>
          {/* Modal content here */}
        </ModalContent>
      </Modal>
    </>
  );
}
```

## Troubleshooting Tips for AI Assistants
- If component imports fail, check if the component has been added with `npx gluestack-ui add component-name`
- For styling issues, use inline styles or style prop with NativeWind classes
- Authentication issues often relate to the AuthContext implementation
- Navigation issues may require checking the Expo Router configuration

## Development Instructions
1. Run with `npx expo start`
2. Login with any credentials
3. Access profile and menu features
4. Logout to return to login screen

## Notes for Future Development
- API integration should replace the simple auth context
- User data should be persisted in AsyncStorage or a database
- Profile editing functionality should be implemented
- Avatar customization should be added 