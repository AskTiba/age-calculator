import icon from "../assets/icon-arrow.svg";

const Button = () => {
  return (
    <div className="flex items-center px-[50px]">
      <hr className="border border-Light-grey w-[570px]" />
      <button className="">
        <img className="bg-Purple rounded-full p-[12px]" src={icon} alt="" />
      </button>
    </div>
  );
};

export default Button;
