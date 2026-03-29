// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Media Tracker</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}