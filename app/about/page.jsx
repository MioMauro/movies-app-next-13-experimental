import Link from "next/link"

export default function AboutPage(){

// throw new Error("Failed to load")

    return(
        <div>
        <p>ABOUT PAGE</p>
            <Link href={`/`}>
                <h1>Back to home</h1>
            </Link>
        </div>
    )
}