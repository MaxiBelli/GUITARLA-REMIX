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
  return (
    <main className="container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="content">
        <div className="cart">
            <h2>Articles</h2>
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
