import logo from "/Talent.svg";
import menu from "/menu.svg";
import Button from "../atoms/Button";

const Header = () => {
  return (
    <div className="container flex items-center justify-between w-full mb-16" >
      <img  src={logo} className="h-6 w-auto object-contain object-center cursor-pointer" alt="logo icon" />
      <img src={menu} className="h-3 w-auto object-contain object-center cursor-pointer" alt="logo icon" />
      <Button title="Get it done" />
    </div>
  )
}

export default Header
