import CloseButton from "react-bootstrap/CloseButton";
import "./Chip.scss";
const Chip = ({ label, type, action }) => {
  return (
    <div
      className={`Chip${type} d-flex justify-content-center align-items-center`}
    >
      {label}
      {type === "filter" && label && (
        <CloseButton className="close" onClick={(e) => action()} />
      )}
    </div>
  );
};

export default Chip;
