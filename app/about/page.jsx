import Link from "next/link"
import { Red_Hat_Text } from '@next/font/google'
import { Solitreo } from '@next/font/google'

//Solitreo - Regular 400

const redHat = Red_Hat_Text({
    subsets: ['latin'],
    weight: ['700', '400'],
    variable: '--font-redHat',// not a good way!
})

const solitreo = Solitreo({
    subsets: ['latin'],
    weight: ['400'],    
})

export default function AboutPage(){

// throw new Error("Failed to load")

return(
<div className="bg-gray-300 p-4 rounded-xl">
    <p className={redHat.className}>ABOUT PAGE -movies details-</p>
    <Link href={`/`}>
    <h1 className="bg-green-500 text-bold inline-block p-1 rounded-lg m-2">Back to home</h1>
    <p className={solitreo.className}>Typography</p>
    </Link>
</div>
)
}