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
      <body className='bg-red-500 mx-32 my-12'>


      <nav className='flex border gap-9'>
      <Link href={`/`}>
        <h1 className={`${redHat.className}`}><span>LOGO</span></h1>
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
