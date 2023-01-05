import { useEffect, useState } from "react";
import { Outlet, Params, useParams } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderLayout from "../../components/userelements/HeaderLayout";
import { getSingleUser } from "../../services/api";

function UserDetails() {
  const [user, setUser] = useState(null);
  const { id }: Params = useParams();
  console.log(user);
  const loadData = async () => {
    const userData = await getSingleUser(id);

    setUser(userData);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div style={{ marginBottom: 30 }}>
        <HeaderLayout user={user} />
      </div>
      <Outlet />
    </div>
  );
}

export default UserDetails;
