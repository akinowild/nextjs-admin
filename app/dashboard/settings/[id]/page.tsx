import Link from "next/link";
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const metadata:Metadata = {
    title:'1111'
}


export default function Page({ params }:Props) {
    const {id} = params
    return (
        <div>
            <h2>挺好的{id}</h2>
        </div>

    )
}