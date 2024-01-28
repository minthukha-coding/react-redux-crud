import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";
import { Button } from "bootstrap";

function Home() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}))
  }
  return (
    <div className="container">
      <h2>CRUD With JsonServer & react redux</h2>
      <Link to="/create" type="button" className="btn btn-success">
        Crate
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>
                <Link to={`/edit/${users.id}`} type="button" className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <button onClick={()=>handleDelete(users.id)} type="button" className="btn btn-sm btn-danger ms-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
