import { useState } from "react";
import ChevronLeft from "../assets/chevron-left.svg";
import QrCode from "../assets/QrCode.svg";
import Buildings from "../assets/Buildings.svg";
import Handshake from "../assets/Handshake.svg";
import Briefcase from "../assets/Briefcase.svg";
import TreasureChest from "../assets/TreasureChest.svg";
import GitPullRequest from "../assets/GitPullRequest.svg";
import FolderNotch from "../assets/FolderNotch.svg";
import Wrench from "../assets/Wrench.svg";
import FolderSimplePlusActive from "../assets/FolderSimplePlusActive.svg";

const menuItems = [
  { icon: QrCode, label: "Dashboard", isActive: false },
  { icon: Buildings, label: "Dealerships", isActive: false },
  { icon: Handshake, label: "Customers", isActive: false },
  { icon: FolderSimplePlusActive, label: "All Orders", isActive: true },
  { icon: Briefcase, label: "Employees", isActive: false },
  { icon: TreasureChest, label: "Inventory", isActive: false },
  { icon: GitPullRequest, label: "Vehicle Directory", isActive: false },
  { icon: FolderNotch, label: "Services Database", isActive: false },
  { icon: Wrench, label: "Settings", isActive: false },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`${
        isCollapsed ? "w-16 px-3" : "w-64 px-4"
      } h-screen bg-white border-r border-gray-200 flex flex-col relative transition-all duration-300 ease-in-out`}
    >
      <button
        className="absolute -right-2.5 top-15 bg-white border border-[#E2E8F0] rounded-full w-5 h-5 hover:bg-gray-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img src={ChevronLeft} className="w-4 h-4 text-gray-600" />
      </button>
      <div className="h-[110px]"></div> {/** Logo Space */}
      <div className="flex flex-col gap-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-2 rounded-lg ${
              item.isActive && "bg-[#FFE8E8]"
            }`}
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            {!isCollapsed && (
              <span
                className={`text-sm font-normal -leading-[1%] ${
                  item.isActive == true ? "text-[#DF1F26]" : "text-[#727272]"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
