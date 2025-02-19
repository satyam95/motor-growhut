import Bell from "../assets/Bell.svg";
import CaretDown from "../assets/CaretDown.svg";
const Header = () => {
  return (
    <div className="h-18 bg-white border-b border-[#E2E8F0] flex items-center">
      <div className="px-6 py-4 flex gap-6 w-full justify-end">
        <div className="flex items-center gap-1">
          <img
            src={Bell}
            alt="bell icon for notification"
            className="w-5 h-5"
          />
          <div className="font-medium text-sm text-black -tracking-[1%] bg-[#F9F9F9] w-7 h-7 rounded flex justify-center items-center">
            12
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="font-medium text-sm text-black -tracking-[1%]">
            AK Motors
          </div>
          <img src={CaretDown} alt="caret down icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
