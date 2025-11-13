import DynamicTable from "../../components/DynamicTable";
import { useDispatch } from "react-redux";
import { userActions } from "../../features/user/userSlice";

const UserTable = ({users}) => {
  // const { handleDeleteUser } = useUsers();
  const dispatch = useDispatch();
  const userTableColumns = ["name", "email", "contact_number", "city"];

  const handleDelete = (id) => {
    // handleDeleteUser(id);
    dispatch(userActions.deleteItem(id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <DynamicTable
        columns={userTableColumns}
        data={users}
        onDelete={handleDelete}
        onEditLink={"/edit"}
      />
    </div>
  );
};

export default UserTable;
