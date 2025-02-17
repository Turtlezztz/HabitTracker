'use client'

import { Button } from "./button";
import {redirect} from "next/navigation";

export default function LoginButton() {
    const redirectLogin = () => {
        redirect("/auth/login")
    }
    return (
        <Button onClick={redirectLogin}>Log in</Button>
    )
}