import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Details() {
  const { userId } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (userId !== null) {
      const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId.userId}.json`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setUser({
            ...data,
            details: {
              ...data.details,
            },
          });
        });
    }
  }, [userId]);

  const userElement = !Object.keys(user).length ? (
    <ul className="user-info__list"></ul>
  ) : (
    <ul className="user-info__list">
      <li className="list-item user-img">
        <img src={user.avatar} alt="" />
      </li>
      <li className="list-item user-name">{user.name}</li>
      <li className="list-item user-city">{user.details.city}</li>
      <li className="list-item user-company">{user.details.company}</li>
      <li className="list-item user-position">{user.details.position}</li>
    </ul>
  );

  return <>{userElement}</>;
}
