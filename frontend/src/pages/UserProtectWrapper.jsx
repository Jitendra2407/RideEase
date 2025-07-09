// import React, { useContext } from "react";
// import { UserDataContext } from "../context/userContext";
// import { useNavigate } from "react-router-dom";

// const UserProtectWrapper = ({ children }) => {
//   const token = localStorage.getItem("token");
//   console.log("token", token);
//   const navigate = useNavigate();

//   if (!token) {
//     navigate("/login");
//   }

//   return <>{children}</>;
// };

// export default UserProtectWrapper;


import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        setUser(response.data.user);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/login");
    })
  }, [token, navigate]);

  if(isLoading){
    return (
      <div>Loading...</div>
    )
  }

  // Avoid rendering anything while redirecting
  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
