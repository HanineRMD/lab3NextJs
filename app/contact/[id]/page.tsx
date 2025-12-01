"use client" // add this for client rendering and interactivity
import { useParams } from "next/navigation";
export default function Contact() {
const params = useParams();
const id = params?.id;
return (
<>
<div>Contact Page</div>
<h2>Contact ID: {id}</h2>
</>
);
}