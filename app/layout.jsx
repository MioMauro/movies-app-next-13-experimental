import './globals.css'
import { Red_Hat_Text } from '@next/font/google'
import Link from 'next/link'

const redHat = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['700', '600'],
  variable: '--font-redHat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className=' mx-32 my-12'>
      <nav className='flex gap-9 mb-6 bg-gray-100 p-4 rounded'>
      <Link href={`/`}>
        <h1 className={`${redHat.className}`}><span>POPULAR FILM</span></h1>
      </Link>
        <ul>
          <li className={`${redHat.className}`}>
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
      {children}
      </body>
    </html>
  )
}
