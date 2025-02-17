import {Button} from "@/components/ui/button";

export default function Page() {
    return (
        <>
            <div className="flex justify-center justify-self-center items-center h-screen">

                <div className="flex flex-col border-black border-2 p-10 rounded w-96">
                    <h2 className="text-2xl mb-2">Login to your account</h2>
                    <input placeholder="email" className="border-2 border-black rounded mb-5 pl-1"/>
                    <input placeholder="password" className="mb-5 border-2 rounded border-black pl-1"/>
                    <Button>Log in</Button>
                    <p className="text-center text-gray-600 my-3">------- or login with --------</p>
                    <button>placeholder</button>
                    <button>placeholder</button>
                    <p className=" hover:cursor-pointer hover:text-blue-800 hover:underline">Forgot password?</p>
                </div>
            </div>
        </>
    )
}