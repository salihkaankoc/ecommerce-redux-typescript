import "./globals.css";
import Navbar from "./components/Navbar";
import ReduxProvider from "./providers/ReduxProvider";

export const metadata = {
  title: "E-Commerce System",
  description: "Next.js + Redux E-Commerce Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
