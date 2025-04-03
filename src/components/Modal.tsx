import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 w-screen h-screen bg-gbBlack bg-opacity-90"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center text-gbBlack">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
          <IoMdCloseCircle
            className="text-4xl absolute text-gbWhite cursor-pointer top-2 right-2"
            onClick={onClose}
          />
          <IoMdCloseCircle
            className="text-4xl text-gbBlack cursor-pointer"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
