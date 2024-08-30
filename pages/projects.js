import { headers } from "next/headers";
import {TOKEN, DATABASE_ID} from "../config";

export default function Projects()
{
    return(
        <>
            <h1>프로젝트</h1>
        </>
    )
}
export async function getStaticProps() {
    const options = {
        method : 'POST',
        headers : 'application/json',
        'Content-Type': 'application/json',
        Authorization : `Bearer ${TOKEN}`
    }
}