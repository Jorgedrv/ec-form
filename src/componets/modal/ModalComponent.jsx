import { Modal } from "react-bootstrap";

const ModalComponent = ({size, title, children, show, handleModal}) => {
    return (
        <Modal size={size} show={show}>  
            <Modal.Header closeButton onClick={handleModal}>  
                <Modal.Title>{title}</Modal.Title>  
            </Modal.Header>  
            <Modal.Body>  
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default ModalComponent;