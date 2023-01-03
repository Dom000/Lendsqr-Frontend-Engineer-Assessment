import React from "react";
import { Params, useParams } from "react-router-dom";

function UserDetails() {
  const params: Params = useParams();
  console.log(params);

  return <div>{params.id}</div>;
}

export default UserDetails;
