import Movie from "@/components/Movie"
import Link from "next/link"
import { Red_Hat_Text } from '@next/font/google'

const redHat = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['700', '600'],
  variable: '--font-redHat',
})

export default async function Home(){
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)

  return(<div>
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
      <Link href={`/`}>
        <h1 className="font-bold mb-4 ml-2">Back to home</h1>
      </Link>
    <div className="grid gap-16 grid-cols-fluid shadow-md p-2">
      
      {res.results.map((movie) => (        
        <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}      
    </div>
    </div>
  )
}
//'https://api.themoviedb.org/3/movie/popular'
/* eslint-disable @next/next/no-img-element */