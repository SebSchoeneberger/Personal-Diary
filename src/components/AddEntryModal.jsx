import { useState, } from "react";

function AddEntryModal ({showModal, setShowModal, addEntry}) {
    const [entryCount, setEntryCount] = useState(1);

function handleSubmit (e) {
    e.preventDefault();

    const formData = new FormData(e.target)
    const newEntry = {
        id: entryCount,
        title: formData.get('title'),
        date: formData.get('date'),
        content: formData.get('content'),
        image: formData.get('image') || null,
    };
    
    // console.log(entryObject);
    addEntry(newEntry);

    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    localStorage.setItem("diaryEntries", JSON.stringify([...storedEntries, newEntry]));

    setEntryCount(prev => prev + 1);

    setShowModal(prev =>!prev);
}

    if (showModal) {

    return (
    <>
        <h2>Add a Diary Entry</h2>

        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" name="title" />

            <label>Date</label>
            <input type="date" name="date" />

            <label>Content</label>
            <input type="text" name="content" />

            <label>Upload a Image</label>
            <input type="file" name="image" />
            <br/> 
            <br/> 

            <button type="submit" >Add Entry</button>
        </form>
        
    </>
    )
} else{
    return null;
};
}

export default AddEntryModal;