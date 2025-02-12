import NavBar from "@/app/navBar";

export default function Page() {
    return (
        <>
            <NavBar/>
            <div>
                <input placeholder="Enter an item..."/>
                <ul>
                    <li>Pancakes</li>
                    <li>Waffles</li>
                </ul>
            </div>
        </>
    )
}