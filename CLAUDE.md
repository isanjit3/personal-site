# Project Commands & Guidelines

## Build Commands
- **Dev**: `pnpm dev` - Start dev server with Turbopack
- **Build**: `pnpm build` - Build for production
- **Start**: `pnpm start` - Run production build
- **Lint**: `pnpm lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Strict mode enabled, use proper type annotations
- **Components**: Follow shadcn/ui conventions (New York style)
- **Imports**: Use path aliases (@/* for src/*)
  - @/components, @/lib/utils, @/components/ui, @/lib
- **Formatting**: 
  - Use ESLint with Next.js core-web-vitals preset
  - Follow Tailwind CSS best practices with CSS variables
- **Icons**: Use Lucide icon library
- **State Management**: Use React hooks pattern
- **Error Handling**: Use try/catch for async operations
- **Naming**: PascalCase for components, camelCase for functions/variables

## Project Structure
- UI components in src/components/ui
- Utility functions in src/lib/utils.ts
- Page components in src/app/{route}/page.tsx