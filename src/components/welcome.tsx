import {useEffect} from "react";

function WelcomeMessage() {
    useEffect(()=>{
        console.log("Mensaje de bienvenida de parte de Edward🐺");
    }, [])
    return (
        <div className="w-screen bg-[#FCFCFD] h-screen flex justify-center py-10 px-4">
            <h1 className="text-[#3843D0] text-3x1 mt-10 font-semibold">
                Bienvenidos chavales!!😲😲😲 xd
            </h1>
        </div>
    );
}

export default WelcomeMessage; 