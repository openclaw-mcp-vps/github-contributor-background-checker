import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitVerify — GitHub Contributor Background Checker',
  description: 'Verify GitHub contributors for hiring compliance. Automated sanctions screening, employment history checks, and red flag analysis before onboarding.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d26f71f3-fa41-462e-a1a2-5f1f0c736e23"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
