import "./DeleteModal.css"

const DeleteModal = () => {
  return (
    <div className="delete-modal-container">
        <div className="delete-modal">
            <div className="delete-group">
                <form>
                    <h2>Delete confirmation</h2>
                    <p>Are you sure you want to delete Batman Arkham?</p>
                    <button className="delete-btn" type="submit">Delete</button>
                    <button className="cancel-btn">Cancel</button>
                </form> 
            </div>
        </div>

    </div>
  )
}

export default DeleteModal