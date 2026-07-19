import "./DeleteDiag.css";

function DeleteDiag({

    isOpen,

    onClose,

    onDelete

}) {

    if (!isOpen) {

        return null;

    }

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Delete Incident</h2>

                <p>

                    Are you sure you want to delete this incident?

                </p>

                <p>

                    This action cannot be undone.

                </p>

                <div className="modal-actions">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="delete-btn"
                        onClick={onDelete}
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteDiag;