import React from 'react';

function EntryDetailModal({ selectedEntry, showDetails, setShowDetails }) {
  if (!showDetails || !selectedEntry) {
    return null;
  }

  return (
    <div className=" text-black fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-md max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{selectedEntry.title}</h2>
        <p className="mb-2"><strong>Date:</strong> {selectedEntry.date}</p>
        <p className="mb-4"><strong>Content:</strong> {selectedEntry.content}</p>
        {selectedEntry.image && <img src={URL.createObjectURL(selectedEntry.image)} alt={selectedEntry.title} className="w-full h-auto mb-4" />}
        <button onClick={() => setShowDetails(false)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Close</button>
      </div>
    </div>
  );
}

export default EntryDetailModal;