import { useGlobalContext } from "./context";

const Modal = ()=>{
    const {isModalOpen, closeModal, correct, questions} = useGlobalContext();

    return(
        <div className={isModalOpen ? 'modal-container isOpen' : 'modal-container'}>
            <div class="modal-content">
                <p>Quiz Over</p>
                <p>you answered {Math.round((correct*100/questions.length))}% of the questions correctly</p>
                <button className="close-btn" onClick={closeModal}>play again</button>
            </div>
        </div>
    )
}

export default Modal;