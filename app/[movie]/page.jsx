import Image from "next/image"

export default async function MovieDetail({ params }){
  const { movie } = params
  console.log(params)
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate : 60 }})

  const res = await data.json()
  return(
    <div>
    <div>
      <h2 className="text-4xl">{res.title}</h2>
      <h2 className="text-4xl">{res.release_date}</h2>
      <h2 className="text-sm">Runtime: {res.runtime} minutes</h2>
      <h2 className="bg-green-500 inline-block my-2 py-2 px-4 rounded">{res.status}</h2>
          <Image className="my-12 w-full"
          src={imagePath + res.backdrop_path}
          alt="images"
          width={800}
          height={800}
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