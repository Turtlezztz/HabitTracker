'use client'

import {Button} from "@/components/ui/button";
import {redirect} from "next/navigation";

export default function SignOutButton() {
    const redirectSignOut = () => {
        redirect("/auth/logout")
    }

    return (
        <Button onClick={redirectSignOut}>Sign out</Button>
    )
}