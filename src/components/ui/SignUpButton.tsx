'use client'

import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";

export default function SignUpButton() {
    const redirectSignUp = () => {
        redirect("/auth/login?screenhint=signup")
    }

    return (
        <Button onClick={redirectSignUp}>Sign up</Button>
    )
}