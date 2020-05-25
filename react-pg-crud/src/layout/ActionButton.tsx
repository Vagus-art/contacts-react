import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./ActionButton.module.css";

const { actionButton } = classes;

interface IActionButtonProps {
    action : () => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({action}) => {
  return (
  <button className={actionButton} onClick={action}>
      <FontAwesomeIcon icon={faUserPlus} />
  </button>
  );
};

export default ActionButton;