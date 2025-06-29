## Component Structure (Atomic Design)

- Components are organized into **Atoms**, **Molecules**, and **Organisms**.
- Each component resides in its own folder with the following structure:
  - `types.ts`: Type definitions for the component.
  - `[component-name].tsx`: Component implementation.
  - `index.ts`: Export the component.
- All components must include a `className` prop for custom styling.

