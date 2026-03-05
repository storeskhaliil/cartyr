import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
  <header>
  <UserButton />
</header>
  {children}</body>
      </html>
    </ClerkProvider>
  );
}
