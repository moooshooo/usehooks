import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOnline, setOnline] = useState(window.navigator.onLine) 

    useEffect(()=>{
        const handdleOnline = () => {
            console.log("Vi är uppkopplade")
            setOnline(true)
        }
        const handdleOffline = () => {
            console.log("Du är inte uppkopplad :( ")
            setOnline(false)
        }

        window.addEventListener("online", handdleOnline)
        window.addEventListener("offline",handdleOffline)

        return () => {
        window.addEventListener("online", handdleOnline)
        window.addEventListener("offline",handdleOffline)
        }

    })
 return isOnline
}
export default useOnline