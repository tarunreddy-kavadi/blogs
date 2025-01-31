import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })


// for the static SEO we use the function name need to be 'metadata'
export const metadata = {
  title: {
    default: 'Blog App',
    template: "%s | Blog Application"
  },
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}