import "./FormModal.css"

const FormModal = () => {
  return (
    <div className="form-modal-container">
        <div className="form-modal">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="action">Action</option>
                        <option value="shooter">Shooter</option>
                        <option value="fighting">Fighting</option>
                        <option value="puzzle">Puzzle</option>
                        <option value="survival-horror">Survival horror</option>
                        <option value="platform">Platform</option>
                        <option value="sports">Sports</option>
                        <option value="metroidvania">Metroidvania</option>
                        <option value="adventure">Adventure</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date of include</label>
                    <input type="date" name="date"/>
                </div>
                <button type="submit" className="form-submit-btn">Submit</button>
                <button className="form-cancel-btn">Cancel</button>
            </form>
        </div>

    </div>
  )
}

export default FormModal