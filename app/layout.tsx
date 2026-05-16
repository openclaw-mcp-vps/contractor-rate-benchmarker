import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractorRate — Real-time Freelancer Rate Benchmarker",
  description: "Track actual paid rates across Upwork, Toptal, and more by skill and location. Negotiate with confidence."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="036ad8bc-6795-4c7d-8f46-a10ac90c5565"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
