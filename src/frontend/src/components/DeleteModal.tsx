import "./DeleteModal.css";

interface DeleteModalProps {
  onDelete: () => void;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onDelete, onClose }) => {
  return (
    <div className="delete-modal-container">
      <div className="delete-modal">
        <div className="delete-group">
          <form>
            <h2>Delete confirmation</h2>
            <p>Are you sure you want to delete this game?</p>
            <button type="button" className="delete-btn" onClick={onDelete}>
              Delete
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
