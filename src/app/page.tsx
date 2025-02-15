import {Button} from "@/components/ui/button";
import NavBar from "@/app/navBar";

export default function Page() {

    return (
        <>
            <NavBar/>

            <link rel="stylesheet" href="globals.css"/>
            <div className="justify-self-center justify-items-center">
                <h1 className=" mt-32 font-bold text-5xl">Habit tracker refined</h1>
                <Button className="mt-10">Get started</Button>
            </div>
            <div id="landingPage" className=" flex  justify-center mt-10">
                <div className="border-primary bg-secondary border-2 p-5 w-1/3 rounded hover:brightness-75 hover:cursor-pointer hover:scale-105 transition mr-10">
                    <h2 className="text-3xl font-bold mt-5">What is this?</h2>
                    <p className="mt-5">This is a habit tracker that allows you to track your habits. It is a refined
                        version of the original habit tracker. It is a single page application that uses React and
                        Tailwind CSS.</p>
                </div>
                <div className="border-primary bg-secondary border-2 p-5 w-1/3 rounded hover:brightness-75 hover:cursor-pointer hover:scale-105 transition">
                    <h2 className="text-3xl font-bold mt-5">What can I do?</h2>
                    <p className="mt-5">You can add habits, delete habits, and mark habits as complete. You can also
                        filter habits by their completion status.</p>
                </div>
            </div>
        </>
    )
}

