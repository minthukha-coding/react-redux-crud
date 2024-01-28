import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { addUser } from "../redux/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const users = useSelector((state)=> state.users);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sumbitHandaler = (event) => {
    event.preventDefault();
    dispatch(addUser({id: users[users.length - 1].id + 1,name,email}))
    navigate('/');
  }
  return (
    <div>
      <form className="container" onSubmit={sumbitHandaler}>
        <h4>Create User</h4>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setemail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;