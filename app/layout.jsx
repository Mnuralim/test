import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#FCFBFC]  mx-auto">
      <body>{children}</body>
    </html>
  );
}
