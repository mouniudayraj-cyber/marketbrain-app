export const metadata = {
  title: "MarketBrain",
  description: "AI Powered Stock Analysis Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
