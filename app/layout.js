export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-black text-white min-h-screen">
        <nav className="p-4 border-b border-white/20 flex justify-between">
          <a href="/feed" className="font-bold">Home</a>
          <a href="/create-post">Create Post</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}