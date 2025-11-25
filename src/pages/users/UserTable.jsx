import DynamicTable from "../../components/DynamicTable";
import { useDispatch } from "react-redux";
import { userActions } from "../../features/user/userSlice";

const UserTable = ({ users }) => {
  const dispatch = useDispatch();
  const userTableColumns = [
    "user_image",
    "name",
    "email",
    "contact_number",
    "city",
  ];

  const handleDelete = (id) => {
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
