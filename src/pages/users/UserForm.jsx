import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCity, FaUser } from "react-icons/fa";
import Drawer from "../../components/Drawer";
import FormGenerator from "../../components/FormElements/FormGenerator";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../features/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const { id } = useParams();
  const handleSubmit = (user) => {
    if (id) {
      dispatch(userActions.updateItem({item: user,id}));
    } else {

      dispatch(userActions.addItem({...user,id: String(Date.now())}));
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
  ];

  const getUser = async () => {
    if (id) {
      const user = await api.userApi.getUserById(id);
      setUser(user);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Drawer title={`${id ? "Update" : "Add"} User`}>
        <FormGenerator
          fields={userFormFields}
          onSubmit={handleSubmit}
          defaultValues={user}
        />
      </Drawer>
    </>
  );
};

export default UserForm;
