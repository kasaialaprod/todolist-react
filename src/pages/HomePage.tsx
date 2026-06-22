import { useState } from "react"
import { TodoCase } from "../components/TodoCase";


export function HomePage() {

    return (
        <>
            <header>
            <h1>Bienvenue dans vos tâches !</h1>
            </header>
            <main>
                < TodoCase/>
            </main>
        </>
    );
}