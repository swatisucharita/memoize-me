import { useEffect } from "react"

const APOD = ({apod, loadApod}) => {
    useEffect(() => {
        console.log("Load APOD triggered");
        loadApod();
    }, [loadApod]);

    console.log("Rerendered");
    return (
        <div>
            {apod.hdurl && <img alt={apod.title} src={apod.hdurl} height="800"></img>}
            <p>{apod.explanation}</p>
        </div>
    )
};

export default APOD;