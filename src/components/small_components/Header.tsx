interface HeaderProps {
    image?: string;
    children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ image, children }) => {
    return (
      <div className="relative w-full h-64 flex justify-center items-center">
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`}}
      />
      <h1 className="max-sm:text-base relative z-10 text-white">
          {children}
      </h1>
  </div>

    );
};
  
export default Header;
  