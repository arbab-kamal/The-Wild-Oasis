import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddGuest() {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens="add-guest"
          renderButton={(openFn) => (
            <Button onClick={openFn}>Add new guest</Button>
          )}
        />

        <Modal.Window
          name="add-guest"
          renderContent={(closeFn) => (
            <CreateGuestForm onCloseModal={closeFn} />
          )}
        />
      </Modal>
    </div>
  );
}

export default AddGuest;
