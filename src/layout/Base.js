import Navbar from "../components/Navbar";

const Base = ({ children }) => {
  return (
    <div className="w-screen h-4/5">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Base;
