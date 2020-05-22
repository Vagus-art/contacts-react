import React from "react";
import classes from "./ModalMenu.module.css";
import { IModalMenuProps } from "../interfaces";

const {
  modalMenu,
  modalMenuOverlay,
  modalMenuContent,
} = classes;

const ModalMenu: React.FC<IModalMenuProps> = ({
  closeFunc,
  active,
  children,
}) => {
  return (
    <>
      {active && (
        <div className={modalMenu}>
          <div className={modalMenuOverlay} onClick={() => closeFunc()}></div>
          <div className={modalMenuContent}>{children}</div>
        </div>
      )}
    </>
  );
};

export default ModalMenu;
