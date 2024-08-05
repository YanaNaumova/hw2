function OrderStatus(props) {
  return (
    <div>
      Заказ # {props.orderId}: {props.status}
    </div>
  );
}

export default OrderStatus;
