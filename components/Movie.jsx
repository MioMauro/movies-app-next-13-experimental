import Image from "next/image"
import Link from "next/link"
import { Red_Hat_Text } from '@next/font/google'

const redHat = Red_Hat_Text({
    subsets: ['latin'],
    weight: ['700', '600'],
    variable: '--font-redHat',
})

export default function Movie({title, id, poster_path, release_date}){
    const imagePath = "https://image.tmdb.org/t/p/original"
return (    
    <div className="shadow-xl bg-slate-100 rounded">
        <h1 className="{`${redHat.className}`} font-bold text-center m-4 text-2xl text-green-800">{title}</h1>
        <h2 className="text-gray-700 font-semibold ml-3">Out in: {release_date}</h2>
        <Link href={`/${id}`}>
        <Image className="rounded-lg m-auto mt-4 mb-6"
        src={imagePath + poster_path} 
        alt={title}
        width={400}
        height={300}
        />
        </Link>        
    </div>
    
)
}