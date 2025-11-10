import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import UserTable from "./UserTable";
import { useEffect } from "react";
import { fetchUsers } from "../../features/user/userSlice";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Users = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} onRetry={() => dispatch(fetchUsers())} />;
  }

  return (
    <div className="mt-4">
      <NavLink
        to="/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Users
      </NavLink>
      <UserTable />
      <Outlet />
    </div>
  );
};

export default Users;
