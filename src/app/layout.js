import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProviders from '@/providers/ThemeProviders'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uncle Sula',
  description: 'Technical stuffs inept',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProviders>
              <div className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProviders>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
