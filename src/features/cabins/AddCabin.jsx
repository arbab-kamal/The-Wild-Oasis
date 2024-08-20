import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens="cabin-form"
          renderButton={(openFn) => (
            <Button onClick={openFn}>Add new cabin</Button>
          )}
        />
        <Modal.Window
          name="cabin-form"
          renderContent={(closeFn) => (
            <CreateCabinForm onCloseModal={closeFn} />
          )}
        />
      </Modal>
    </div>
  );
}

export default AddCabin;
