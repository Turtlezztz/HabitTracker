'use client'
import {Button} from "@/components/ui/button";


export default function NavBar() {

    const navigateHome = () => {
        window.location.href="/";
    }

    const loggedIn = false

    if (loggedIn) {
        return (
            <div>

            </div>
        )
    }

    return (
            <>
                <div className="w-screen h-16 bg-secondary flex justify-between items-center p-5">
                    <h1 className="text-3xl font-bold text-primary text-lef hover:cursor-pointer" onClick={navigateHome}>Habit tracker</h1>
                    <div>
                        <button className="mr-5 text-gray-500 hover:text-black transition">Sign up</button>
                        <Button>Login</Button>
                    </div>
                </div>
            </>
        )
}