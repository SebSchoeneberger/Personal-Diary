import EntryCard from "./EntryCard";
import { useState } from "react";
import EntryDetailModal from "./EntryDetailModal";

function EntryList ({entries, setShowDetails, setSelectedEntry}) {


    return (
        <div className="grid grid-cols-4 gap-4">
        
        {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          setShowDetails={setShowDetails}
          setSelectedEntry={setSelectedEntry}
        />
      ))}
        </div>
    );
}

export default EntryList;