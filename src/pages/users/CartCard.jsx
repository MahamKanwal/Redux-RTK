import { useDispatch } from "react-redux";
import { userActions } from "../../features/user/userSlice";
import { formatPrice } from "../../utils/helperFunctions";
import { FaTrash } from "react-icons/fa";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const totalPrice = item.quantity * item.price;
  return (
    <tr>
      <td className="px-4 py-5">
        <div className="flex items-center gap-4">
          <img
            src={item.product_image}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-800 capitalize">
              {item.product_name}
            </h3>
            <p className="text-sm text-red-600">{item.brand}</p>
            <p className="text-xs text-blue-600">{item.category}</p>
          </div>
        </div>
      </td>

      <td className="text-center px-4 py-3">
        <div className="flex items-center justify-center gap-2">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => dispatch(userActions.decreaseQty(item.id))}
          >
            −
          </button>
          <span className="px-3 py-1 border rounded bg-gray-100">
            {item.quantity}
          </span>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => dispatch(userActions.increaseQty(item.id))}
          >
            +
          </button>
        </div>
      </td>
      <td className="text-center font-medium px-4 py-3">
        {formatPrice(item.price)}
      </td>
      <td className="text-center font-medium text-gray-900 px-4 py-3">
        {formatPrice(totalPrice)}
      </td>
      <td
        className="text-center px-4 py-3"
        onClick={() => dispatch(userActions.removeFromCart(item.id))}
      >
        <FaTrash className="text-blue-500" />
      </td>
    </tr>
  );
};

export default CartCard;
