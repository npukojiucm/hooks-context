import {useContext, useEffect, useState} from "react";
import { UserContext } from "./UserContext.jsx";

export default function List() {
    const [users, setUsers] = useState([]);
    const { setUserId } = useContext(UserContext);

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
        fetch(url)
            .then(response => response.json())
            .then(data => setUsers([
                ...data
            ]))
    }, []);

    const itemsList = users.map(user =>
        <li className="list-item" key={user.id} data-id={user.id} data-name={user.name}>
            {user.name}
        </li>
    )

    const handlerOnClickItem = (e) => {
        const { id } = e.target.dataset;

        return setUserId({
            userId: id,
        })
    }

    return (
        <ul className="list-users" onClick={handlerOnClickItem}>
            {itemsList}
        </ul>


    )
}
