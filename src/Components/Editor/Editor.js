
import { addSound, editSound } from "../Records/FetchRecords";

const Editor = ({
    image, setImage, title, setTitle, 
    category, setCategory, soundLink, 
    setSoundLink, showWarning, setShowWarning, 
    editing, setEditing, setSounds, itemId
}) => {

    

    return (
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content secondModal">
                    <div className="modal-header">
                        <h2 className="modal-title mx-auto fs-5 editorTitle">
                            Vinyl Record Editor
                        </h2>
                        <i className="bi bi-x-circle fs-3" data-bs-dismiss="modal" />
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                    <form className="p-4 p-md-5 mt-3 border rounded-3 secondModalForm">
                        
                            <input 
                                type="text" 
                                className="inputEditor mb-3"  
                                placeholder="Enter image source link..."
                                value={image}
                                onChange={(e) => setImage(e.target.value)} 

                            />
                            
                        
                        
                            <input 
                                type="text" 
                                className="inputEditor mb-3" 
                                placeholder="Enter name of sound..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}  

                            />
                            
                        
                        
                            <input 
                                type="text" 
                                className="inputEditor mb-3"  
                                placeholder="Enter sound category..."
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}  

                            />
                            
                        
                        
                            <input 
                                type="text" 
                                className="inputEditor mb-3"  
                                placeholder="Enter sound source link..."
                                value={soundLink}
                                onChange={(e) => setSoundLink(e.target.value)}  

                            />
                            
                        
                        <button 
                        className="btn btn-lg btn-primary mt-3 editorBtn" 
                        type="button"
                        onClick={
                                    editing ? () => editSound(
                                        itemId, image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setEditing, setSounds
                                    ) : () => {
                                        if ( !image || !title || !category || !soundLink ) {
                                            setShowWarning(true);
                                            setTimeout(() => setShowWarning(false), 3000); // show warning for 3 seconds
                                        } else {
                                            setShowWarning(false);
                                            addSound(
                                                image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setSounds
                                            );
                                        }
                                    }
                                }
                            >
                            {editing ? 'Add changes to sound' : 'Add your new sound'}
                        </button>
                        {showWarning && (
                            <div className="alert alert-danger mt-1 text-center lead" role="alert">
                                Please, fill out all the inputs first.
                            </div>
                        )}
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                            className="btn btn-primary editorBtn" 
                            data-bs-target="#exampleModalToggle" 
                            data-bs-toggle="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;