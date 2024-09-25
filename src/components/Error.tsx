import { ReactNode } from "react";

export default function Error({children} : {children: ReactNode}) {
    return (
        <p className="text-sm text-white my-4 bg-red-300 font-bold p-3 uppercase border-l-4 border-red-500">
            {children}
        </p>
    )
}
