
function Notes(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [notes, setNotes] = useState([]);

    const addNote = () =>{
        if(title.trim() && description.trim()){
            setNotes([...notes, {title, description}]);
            setTitle("");
            setDescription("");
        }
    };

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };
    return(
        <div className = "container">
            <h2> Notes App</h2>
            <input type="text" placeholder="Title" value="{title}" onChange={(e) => setTitle(e.target.value)}
            />
            <textarea placeholder="Description" value="{description}" onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button onClick={addNote}>Add Note</button>

            <h3>My notes</h3>
            {notes.length === 0 ? (
                <p>No notes available</p>
            ) : (
                <ul>
                    {notes.map((note, index) =>(
                        <li key={index}>
                            <strong>{note.title}</strong>

                        </li>
                    ))}
                </ul>
            )}      
        </div>
    );

}
