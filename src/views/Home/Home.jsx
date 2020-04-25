import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as UserAction from "./UserAction";
function Home() {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const { getUsers } = UserAction;

  const getUsersList = async () => {
    await dispatch(getUsers());
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div className="App">
      <div style={{ marginTop: "25px", marginBottom: "30px" }}></div>
      <div>Home Component</div>
      <ol>
        {users.map((data) => {
          return (
            <li key={data.id}>
              <h2>{data.email}</h2>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Home;
