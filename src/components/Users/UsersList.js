import React from "react";

import Card from "../UI/Card";

import classes from "./UserList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={classes.users}>
        <h2>No Users Found!</h2>
      </Card>
    );
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
