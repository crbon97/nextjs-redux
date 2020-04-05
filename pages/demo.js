import React from "react";
import { useSelector } from "react-redux";
export default function demo() {
  const { users } = useSelector((state) => state.usersReducer);
  console.log(users);

  return (
    <div>
        <p> demo</p>
        <p> demo</p>
        <p> demo</p>
        <p> demo</p>
      {users.map((props, index) => {
        return <li key={index}>{props.name}</li>;
      })}
    </div>
  );
}
