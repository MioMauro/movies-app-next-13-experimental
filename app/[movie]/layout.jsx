import Link from "next/link"

export default function RootLayout({ children }) {
return (
    <html lang="en">
        <head />
            
        <body className="m-auto w-5/6">
            <Link href={`/`}>
                <h1 className="font-bold">Back to home</h1>
            </Link>
            {children}
        </body>        
</html>
)
}