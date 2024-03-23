import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onOpen, onClose, classes = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (onOpen) {
      modal.showModal()
    }

    return () => modal.close();
  }, [onOpen]);
  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className={`modal bg-stone-100 rounded-md border-0 p-4 w-4/5 max-w-2xl backdrop:shadow-neutral-900/50 ${classes}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
