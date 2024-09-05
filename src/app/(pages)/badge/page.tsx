// page.tsx

import Badge from '@/components/sections/badge'; // Import your GradientReveal component
import { ModeToggle } from '@/components/sections/theme-toggle';

export default function Page() {
  return (
    <div className="h-screen">
      <Badge />
      <ModeToggle />
    </div>
  );
}