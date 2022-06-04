import { useState } from "react";

// try lazy next time
const Button: React.FC = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const fetchData = (await import("./constants" /* webpackChunkName: 'Names' */)).default;
    setData(() => fetchData);
  };

  return (
    <div>
      <button onClick={fetchData}>this is a button</button>
      {data && JSON.stringify(data)}
    </div>
  );
};
export default Button;
