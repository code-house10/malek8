import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tranzit - Transport & Logistic Services",
  description: "Tranzit - Transport & Logistic Services - Your Partner in Precision Logistics",
  icons: {
    icon: "/assets/img/fevicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />

        {/* Theme CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Fontawesome */}
        <link rel="stylesheet" href="/assets/fontawsome/css/fontawesome.css" />
      </head>
      <body>
        {children}

        {/* Bootstrap Bundle only - No jQuery needed */}
        <script src="/assets/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  );
}
