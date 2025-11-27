import DynamicTable from "../../components/DynamicTable";
import { useDeleteUserMutation } from "../../features/user/userApi";

const UserTable = ({ users }) => {
  const [deleteUser] = useDeleteUserMutation();
  const userTableColumns = [
    "user_image",
    "name",
    "email",
    "contact_number",
    "city",
  ];

  const handleDelete = (id) => {
  deleteUser(id);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <DynamicTable
        columns={userTableColumns}
        data={users}
        onDelete={handleDelete}
        onEditLink={"/users/edit"}
      />
    </div>
  );
};

export default UserTable;
