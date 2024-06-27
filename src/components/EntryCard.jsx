import React from 'react';

function EntryCard({ entry, setShowDetails, setSelectedEntry }) {
  const showDetails = () => {
    setShowDetails(true);
    setSelectedEntry(entry);
  };

  return (
    <div onClick={showDetails} className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{entry.title}</h3>
      <p>{entry.date}</p>
      <p>{entry.content}</p>
      {entry.image && typeof entry.image === 'object' && entry.image instanceof Blob && (
  <img
    src={URL.createObjectURL(entry.image)}
    alt={entry.title}
    className="w-20 h-auto mt-2"
  />
)}
    </div>
  );
}

export default EntryCard;