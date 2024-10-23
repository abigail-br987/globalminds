
import SocialIcons from "./SocialIcons";
function Footer() {
  return (
    <div className="text-gbWhite rounded-lg w-full sm:grid sm:grid-cols-3 sm:gap-3 bg-gbBlack p-6">
      <div className="max-sm:hidden space-y-5">
        <h3>Contáctanos</h3>
        <p>Num +5199999999</p>
        <p>@correoelectronico</p>
      </div>
      <div className=" space-y-5 flex flex-col text-center items-center max-sm:w-full justify-center">
        <h3>GLOBAL MINDS</h3>
        <ul className="flex space-x-5">
          <li>FAQs</li>
          <li>Programas</li>
          <li>Contáctanos</li>
        </ul>
        <SocialIcons/>
      </div>
      <div className="max-sm:hidden text-right space-y-5">
        <h3>Apoya</h3>
        <p>Se parte de ________ fkefaewpfkewa kofpewkfopafkekfew</p>
        <button className="bg-white text-gbBlack font-bold">Dona Aquí</button>
      </div>
    </div>
  );
}

export default Footer;
