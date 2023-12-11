import Link from "next/link";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const metadata:Metadata = {
    title:'面板标题'
}


export default function Page({ params }:Props) {
    console.log(params)
    return (
        <div>
            <h2>挺好的</h2>
            <Link href='/news/'>2222</Link>
        </div>

    )
}