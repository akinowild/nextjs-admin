'use client'
import A from './compoments/a'
import B from './compoments/b'
import {useState} from "react";

export default function Page() {
    const [number=false,setNumber] = useState()
  return <main className="flex min-h-screen flex-col p-6">
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        { number && <A  />}

        <B />
        <button onClick={()=>setNumber(!number)}>
            点击
        </button>
      </div>
  </main>;
}