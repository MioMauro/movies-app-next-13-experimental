import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams(){
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function MovieDetail({ params }){
  const { movie } = params
  console.log(params)
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate : 4 }})
  
  const res = await data.json()

  return( 
    <div className="m-auto w-5/6"> 
      <Link href={`/`}>
        <h1 className="font-bold">Back to home</h1>
      </Link>
    <div className="w-2/4 m-auto mt-12 shadow-md p-2 bg-slate-100 rounded">
      <h2 className="text-6xl">{res.title}</h2>
      <h2 className="text-4xl">{res.release_date}</h2>
      <h2 className="text-sm">Runtime: {res.runtime} minutes</h2>
      <h2 className="bg-green-300 inline-block my-2 py-1 px-4 rounded">{res.status}</h2>
          <Image className="my-12 w-full rounded-lg shadow-xl"
          src={imagePath + res.backdrop_path}
          alt="images"
          width={500}
          height={500}
          priority
          >
          </Image>
          <div>
          <p>{res.overview}</p>
          </div>
    </div>
    </div>  
  )
}