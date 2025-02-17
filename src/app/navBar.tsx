'use server'

import {auth0} from "@/lib/auth0";
import LoginButton from "@/components/ui/LoginButton";
import SignUpButton from "@/components/ui/SignUpButton";
import SignOutButton from "@/components/ui/SignOutButton";


export default async function NavBar() {
    const session = await auth0.getSession();

    if (!session) {
        return (
            <>
                <div className="w-screen h-16 bg-secondary flex justify-between items-center p-5">
                    <h1 className="text-3xl font-bold text-primary text-lef hover:cursor-pointer"
                        >Habit tracker</h1>
                    <div>
                        <SignUpButton/>
                        <LoginButton/>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-screen h-16 bg-secondary flex justify-between items-center p-5">
                <h1 className="text-3xl font-bold text-primary text-lef hover:cursor-pointer"
                    >Habit tracker</h1>
                <div>
                    <SignOutButton/>
                </div>
            </div>
        </>
    )

}