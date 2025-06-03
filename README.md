# JEE Main App

This project is a modern web application designed to provide a seamless and interactive experience for users preparing for the JEE Main examination. The application is built with a focus on performance, scalability, and maintainability, leveraging the latest technologies in the frontend ecosystem.

## Tech Stack

- **Next.js**: Utilized as the React framework for server-side rendering, static site generation, and optimized routing.
- **React 19**: The core UI library, enabling component-based architecture and efficient state management.
- **TypeScript**: Ensures type safety and improved developer experience throughout the codebase.
- **Tailwind CSS**: Provides a utility-first approach to styling, allowing rapid UI development with a consistent design system.
- **Zustand**: Lightweight state management for React, used for managing global app state.
- **Radix UI**: Unstyled, accessible UI primitives for building high-quality design systems.
- **Lucide React**: Icon library for consistent and scalable SVG icons.
- **PostCSS**: Used for processing CSS with plugins, integrated with Tailwind CSS.
- **Styled JSX**: Scoped CSS for React components, enhancing modularity.

## Project Structure

- `/app`: Contains Next.js app directory, including pages, layouts, and global styles.
- `/components`: Reusable UI components such as buttons, badges, select menus, toasts, and theming utilities.
- `/data`: Static JSON data files, e.g., subject and chapter information.
- `/hooks`: Custom React hooks for features like responsive design and toast notifications.
- `/lib`: Utility functions and helpers used throughout the application.
- `/public`: Static assets including SVGs and images.
- `/store`: Zustand store configuration for global state management.
- `/styles`: Global and component-level CSS files.

## Features

- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Theme Support**: Light and dark mode toggling with persistent user preference.
- **Sidebar Navigation**: Easily accessible sidebar for navigating between subjects and chapters.
- **Toast Notifications**: User feedback via customizable toast messages.
- **Select Menus**: Accessible and customizable dropdowns for user input.
- **State Management**: Efficient and scalable state handling using Zustand.
- **SVG Icons**: Consistent iconography using Lucide React.

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   pnpm start
   ```

## Customization

- **Adding Subjects/Chapters**: Update the JSON files in `/data` to add or modify subjects and chapters.
- **Styling**: Modify Tailwind config or global CSS files in `/styles` for custom themes and styles.
- **Components**: Extend or create new components in `/components/ui` as needed.

## Contributing

Contributions are welcome! Please follow best practices for code quality, commit messages, and pull requests.

## License

This project is for educational and demonstration purposes.
