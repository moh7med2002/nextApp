import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider';
import { ChildProviders } from './redux/childProvider';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'blog app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <ChildProviders>
            <Navbar/>
            <main>
            {children}
            </main>
          </ChildProviders>
        </Providers>
      </body>
    </html>
  )
}