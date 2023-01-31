'use client'

export default function Error({ error, reset }) {
    return (
        <div>
            {error.message}
            <button className="bg-green-400 rounded p-1" onClick={() => reset()}>Reload</button>
        </div>
    )
}