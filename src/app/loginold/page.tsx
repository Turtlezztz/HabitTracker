import {Button} from "@/components/ui/button";

export default function Page() {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2027] to-[#2C5364] h-screen z-[-1]"></div>
            <div className="flex justify-center justify-self-center items-center h-screen">

                <div className="flex flex-col border-black bg-secondary border-2 p-10 rounded w-96">
                    <h2 className="text-2xl">Login to your account</h2>
                    <p className="text-gray-600 mb-5">Don't have an account? <span className="text-blue-800 hover:underline hover:cursor-pointer">Create one here</span></p>
                    <input placeholder="email" type="email" className="border-2 border-black rounded mb-5 p-2"/>
                    <input placeholder="password" type="password" className="mb-5 border-2 rounded border-black p-2"/>
                    <Button>Log in</Button>
                    <p className=" hover:cursor-pointer hover:text-blue-800 hover:underline">Forgot password?</p>
                    <p className="text-center text-gray-600 my-3">or login with</p>
                    <div className="flex justify-center items-center">
                        <button className="px-2">placeholder</button>
                        <button className="px-2">placeholder</button>
                    </div>
                </div>
            </div>
        </>
    )
}