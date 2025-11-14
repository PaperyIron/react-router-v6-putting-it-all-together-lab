import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
    const { directors } = useOutletContext();

    const displayDirectors = directors.map((d) => (
        <li key={d.id}>
            <Link to={`${d.id}`}>{d.name}</Link>
        </li>
    ));

    return (
        <div>
            <h2>All Directors</h2>
            <ul>{displayDirectors}</ul>
            <Link to="new">Add a New Director</Link>
        </div>
    );
};

export default DirectorList;
