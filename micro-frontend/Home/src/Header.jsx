import React from "react";

const Header = ({ app }) => {
  const [count, setCount] = useState();
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Fidget Spinners World {app}
    </div>
  );
};

export default Header;
