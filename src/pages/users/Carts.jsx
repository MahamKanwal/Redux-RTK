import { NavLink } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import CartCard from "./CartCard";
import { formatPrice } from "../../utils/helperFunctions";

const Carts = () => {
  const { users } = useStore("users");
  const { cartItems } = users;
  const totalQty = cartItems.reduce((a, c) => a + c.quantity, 0);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden mt-6 text-black">
      <div className="flex justify-around m-5">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <p className="text-xl font-bold">{totalQty} Items</p>
      </div>
      <hr />
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-xs">
              <th>PRODUCT DETAIL</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>SUBTOTAL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <CartCard key={idx} item={item} />
            ))}
          </tbody>
        </table>
        {!cartItems.length && (
          <NavLink
            className="rounded-lg px-6 py-2 text-md bg-blue-500 mx-auto my-10 block w-fit text-white"
            to="/productcards"
          >
            Back To Shopping
          </NavLink>
        )}

        <div className="w-60 border rounded-lg p-5 ml-auto mb-3 mr-5">
          <div className="flex justify-between my-1 text-sm">
            <p className="text-gray-600">Subtotal:</p>
            <p className="font-semibold">{formatPrice(totalPrice)}</p>
          </div>
          <div className="flex justify-between my-2 text-sm">
            <p className="text-gray-600">Shipping:</p>
            <p className="font-semibold">{formatPrice(500)}</p>
          </div>
          <hr />
          <div className="flex justify-between my-2">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold text-blue-600">
              {formatPrice(totalPrice + 500)}
            </p>
          </div>
          <button className="bg-blue-600 text-white w-full py-2 rounded-lg mt-2">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
