import React, { useState, useEffect } from 'react';
import AddEntryModal from './AddEntryModal';
import EntryList from './EntryList';
import EntryDetailModal from './EntryDetailModal';

function Homepage() {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);


//   AI generated Code

  useEffect(() => {
    // Load entries from localStorage on component mount
    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEntries(storedEntries);
  }, []);

  const addEntry = (newEntry) => {

    newEntry.id = Date.now();

    // Update state with the new entry
    setEntries(prevEntries => {
      const updatedEntries = [...prevEntries, newEntry];
      // Update localStorage with the updated entries array
      localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
      return updatedEntries;
    });
  };

  return (
    <>
      <header className="p-8">
        <div className="flex justify-between items-center">
          <img src="src/assets/theo-colored.svg" className="h-14 w-auto" alt="Logo" />
          <div className="border-2 rounded-xl p-2 flex gap-4">
            <input placeholder="Search" className="border" />
            <button onClick={() => setShowModal(prev => !prev)} className="rounded-full border-2 border-black p-1">+</button>
          </div>
          <button>Profile</button>
        </div>
      </header>

      <main className='p-8'>
        <AddEntryModal showModal={showModal} setShowModal={setShowModal} addEntry={addEntry} />
        <EntryList entries={entries} setShowDetails={setShowDetails} setSelectedEntry={setSelectedEntry} />
        <EntryDetailModal showDetails={showDetails} setShowDetails={setShowDetails} selectedEntry={selectedEntry} />
      </main>
    </>
  );
}

export default Homepage;
