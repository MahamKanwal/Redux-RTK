import { NavLink, Outlet } from "react-router-dom";
import UserTable from "./UserTable";
import { useEffect } from "react";
import { userActions } from "../../features/user/userSlice";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useStore } from "../../hooks/useStore";


const Users = () => {
  const {users, dispatch} =   useStore("users");
  const { loading, items, error } = users;

  useEffect(() => {
    dispatch(userActions.fetchItems());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} onRetry={() => dispatch(userActions.fetchItems())} />;
  }

  return (
    <div className="mt-4">
      <NavLink
        to="/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Users
      </NavLink>
      <UserTable users={items}/>
      <Outlet />
    </div>
  );
};

export default Users;
