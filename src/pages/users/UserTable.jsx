import { useUsers } from "../../contexts/UserContext";
import DynamicTable from "../../components/DynamicTable";

const UserTable = ({users}) => {
  const { handleDeleteUser } = useUsers();
  const userTableColumns = ["name", "email", "contact_number", "city"];

  const handleDelete = (id) => {
    handleDeleteUser(id);
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
