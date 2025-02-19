import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import OrdersTable from "./components/OrdersTable";

interface Order {
  date: string;
  orderId: string;
  dealership: string;
  customerName: string;
  serviceType: string;
  modeOfOrder: "Online" | "Offline";
  status: "In progress" | "Completed";
}

export interface FilterOptions {
  dealership: string;
  serviceType: string;
  modeOfOrder: string;
  status: string;
}

const MOCK_ORDERS: Order[] = [
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Online",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Offline",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Offline",
    status: "Completed",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Offline",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Offline",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Online",
    status: "In progress",
  },
  {
    date: "23-05-2025",
    orderId: "V-545454",
    dealership: "AK Motors",
    customerName: "Aman upadhyay",
    serviceType: "General Service",
    modeOfOrder: "Online",
    status: "Completed",
  },
];

function App() {
  const [filters, setFilters] = useState<FilterOptions>({
    dealership: "All",
    serviceType: "All",
    modeOfOrder: "All",
    status: "All",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = useMemo(() => {
    return MOCK_ORDERS.filter((order) => {
      const matchesSearch =
        order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters =
        (filters.dealership === "All" ||
          order.dealership === filters.dealership) &&
        (filters.serviceType === "All" ||
          order.serviceType === filters.serviceType) &&
        (filters.modeOfOrder === "All" ||
          order.modeOfOrder === filters.modeOfOrder) &&
        (filters.status === "All" || order.status === filters.status);

      return matchesSearch && matchesFilters;
    });
  }, [MOCK_ORDERS, filters, searchQuery]);

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex h-screen bg-[#F9F9F9]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className=" flex-1 px-6 py-4 overflow-auto">
          <h2 className="font-medium text-2xl text-black -tracking-[1%]">
            All Order
          </h2>
          <div className="flex-1 pt-6">
            <div className="bg-white p-5 rounded-lg">
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onSearch={handleSearch}
              />
              <div className="pt-6">
                <OrdersTable orders={filteredOrders} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
