'use client'
import Cover from './compoments/cover/page'
import {useState} from "react";
import './assets/css/index.scss'

export default function Page() {
    const [number=false,setNumber] = useState()
    return <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <Cover />
        </div>
    </main>;
}
