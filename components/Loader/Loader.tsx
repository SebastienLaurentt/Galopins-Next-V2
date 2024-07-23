import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingLines
      strokeColor="green"
      strokeWidth="5"
      animationDuration="0.5"
      width="32"
      visible={true}
    />
  );
};

export default Loader;
