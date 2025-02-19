interface Order {
  date: string;
  orderId: string;
  dealership: string;
  customerName: string;
  serviceType: string;
  modeOfOrder: "Online" | "Offline";
  status: "In progress" | "Completed";
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable = ({ orders }: OrdersTableProps) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="border border-[#F9F9F9] bg-[#F9F9F9] rounded">
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Date
          </th>
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Order ID
          </th>
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Dealership
          </th>
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Customers Name
          </th>
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Service type
          </th>
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Mode of Order
          </th>
          <th className="px-3 py-2 text-left text-sm font-normal text-[#727272] -tracking-[1%]">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              {order.date}
            </td>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              {order.orderId}
            </td>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              {order.dealership}
            </td>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              {order.customerName}
            </td>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              {order.serviceType}
            </td>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              {order.modeOfOrder}
            </td>
            <td className="px-3 py-4 text-black text-sm font-normal -tracking-[1%]">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-sm font-normal gap-1
                ${
                  order.status === "Completed"
                    ? "bg-green-100 text-[#14B34E]"
                    : "bg-blue-100 text-[#4976F4]"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    order.status === "Completed"
                      ? "bg-[#14B34E]"
                      : "bg-[#4976F4]"
                  }`}
                />
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
