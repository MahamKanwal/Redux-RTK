import { NavLink, Outlet } from "react-router-dom";
import UserTable from "./UserTable";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useGetUsersQuery } from "../../features/user/userApi";

const Users = () => {
  const {data, isLoading, isError , error , refetch} = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.error} onRetry={refetch} />;
  }

  return (
    <div className="mt-4">
      <NavLink
        to="/users/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Users
      </NavLink>
      <UserTable users={data} />
      <Outlet />
    </div>
  );
};

export default Users;
