'use client'

// Components
import List from "./partials/list"

// Hooks
import useSessionStorage from "@/app/hooks/use-session-storage"

export default function Frequency() {
    
    const user = useSessionStorage("userData")
    
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold p-4">👀 Presenças & Faltas</h1>
            <List user={user} />
        </div>
    )
}