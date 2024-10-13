interface HeaderProps {
    image: string;
    children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ image, children }) => {
    return (
      <div
        className="w-full h-64 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 style={{ textShadow: "3px 3px 2px rgba(2, 2, 2, 2)" }}>
        {children}
        </h1>
      </div>
    );
};
  
export default Header;
  