import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/cart.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export function meta() {
  return [
    { title: "GuitarLA - Shopping Cart" },
    {
      description: "Guitar sales, music, blog, shopping cart, store",
    },
  ];
}

function Cart() {
  const { cart } = useOutletContext();
  return (
    <main className="container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="content">
        <div className="cart">
          <h2>Articles</h2>
          {cart?.length === 0
            ? "Empty Cart"
            : cart?.map((product) => (
                <div key={product.id} className="product">
                  <div>
                    <img
                      src={product.image}
                      alt={`Product image of ${product.name}`}
                    />
                  </div>
                  <div>
                    <p className="name">{product.name}</p>
                    <p>Quantity:{product.quantity} </p>

                    <p className="price">
                      $ <span>{product.price}</span>
                    </p>
                    <p className="subtotal">
                      Subtotal: ${" "}
                      <span>{product.quantity * product.price}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <aside className="summary">
          <h3>Order Summary</h3>
          <p>Total to pay: $</p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
