import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCity, FaUser } from "react-icons/fa";
import Drawer from "../../components/Drawer";
import FormGenerator from "../../components/FormElements/FormGenerator";
import { useParams } from "react-router-dom";
import {
  useAddUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
} from "../../features/user/userApi";

const UserForm = () => {
  const { id } = useParams();

  // RTK Query Hooks
  const { data } = useGetUserByIdQuery(id, { skip: !id });
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (user) => {
    if (id) {
      // UPDATE USER
      await updateUser({ id, ...user });
    } else {
      // CREATE USER
      await addUser(user);
    }
  };

  const userFormFields = [
    {
      name: "name",
      icon: <FaUser className="text-blue-500" />,
      required: true,
      min: 3,
    },
    {
      name: "contact_number",
      icon: <IoMdCall className="text-red-500" />,
      type: "number",
      required: true,
      min: 10,
    },
    {
      name: "email",
      icon: <MdEmail className="text-green-500" />,
      type: "email",
      required: true,
      pattern: /^\S+@\S+\.\S+$/,
    },
    {
      name: "city",
      icon: <FaCity className="text-yellow-500" />,
      type: "select",
      required: true,
      options: [
        "karachi",
        "lahore",
        "islamabad",
        "quetta",
        "peshawar",
        "hyderabad",
      ],
    },
    { name: "user_image", type: "image", required: true },
  ];

  return (
    <Drawer title={`${id ? "Update" : "Add"} User`}>
      <FormGenerator
        fields={userFormFields}
        onSubmit={handleSubmit}
        defaultValues={data}
      />
    </Drawer>
  );
};

export default UserForm;
