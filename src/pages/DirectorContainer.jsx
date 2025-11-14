import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const DirectorContainer = () => {
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/directors")
            .then((r) => {
                if (!r.ok) {
                    throw new Error("failed to fetch directors");
                }
                return r.json();
            })
            .then(setDirectors)
            .catch(console.log);
    }, []);

    const addDirector = (newDirector) => {
        setDirectors((prev) => [...prev, newDirector]);
    };

    const updateDirector = (updatedDirector) => {
        setDirectors((prev) =>
            prev.map((d) => (d.id === updatedDirector.id ? updatedDirector : d))
        );
    };

    const removeDirector = (id) => {
        setDirectors((prev) => prev.filter((d) => d.id !== id));
    };

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>

                <Outlet
                    context={{
                        directors,
                        addDirector,
                        updateDirector,
                        removeDirector,
                    }}
                />
            </main>
        </>
    );
};

export default DirectorContainer;
