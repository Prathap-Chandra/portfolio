// src/app/layout.tsx (Main Entry)

import ServerLayout from "./layout.server"; // The server-side layout
import ClientLayout from "./layout.client";        // The client-side layout (Google Analytics)

export default function CombinedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ServerLayout>
      <ClientLayout>
        {children}
      </ClientLayout>
    </ServerLayout>
  );
}
