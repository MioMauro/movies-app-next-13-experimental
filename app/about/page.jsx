import Link from "next/link"
import { Red_Hat_Text } from '@next/font/google'



const redHat = Red_Hat_Text({
    subsets: ['latin'],
    weight: ['700', '600'],
    variable: '--font-redHat',
})

export default function AboutPage(){

// throw new Error("Failed to load")

    return(
        <div className="bg-gray-300 ">
        <p>ABOUT PAGE</p>
            <Link href={`/`}>
                <h1 className="{`${redHat.className}`}">Back to home</h1>
                <p className="font-bold text-lg">Typography</p>
            </Link>
        </div>
    )
}