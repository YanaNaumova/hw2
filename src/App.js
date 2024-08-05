import "./App.css";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";

let name = "Yana";
const goods = ["socks", "shirts", "gloves", "shorts", "t-shirts"];
const order = [
  { orderId: 123, status: "в пути" },
  { orderId: 124, status: "доставлен" },
  { orderId: 125, status: "в обработке" },
];

function App() {
  return (
    <div>
      <Greeting name={name} />
      <ShoppingList items={goods} />
      {order.map((item, index) => (
        <OrderStatus key={index} orderId={item.orderId} status={item.status} />
      ))}
    </div>
  );
}

export default App;
