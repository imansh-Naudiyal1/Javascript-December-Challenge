// Select elements
const titleInput = document.getElementById("note-title");
const descInput = document.getElementById("note-description");
const addBtn = document.querySelector(".btn-add");
const notesGrid = document.querySelector(".notes-grid");
const searchBar = document.querySelector(".search-bar");

// Load notes from localStorage OR empty array
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Save notes to localStorage
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Display all notes on screen
function renderNotes() {
    notesGrid.innerHTML = ""; 

    notes.forEach((note, index) => {
        const card = document.createElement("div");
        card.className = "note-card";

        card.innerHTML = `
            <h3 class="note-title">${note.title}</h3>
            <p class="note-description">${note.description}</p>
            <div class="note-actions">
                <button class="btn btn-edit" onclick="editNote(${index})">Edit</button>
                <button class="btn btn-delete" onclick="deleteNote(${index})">Delete</button>
            </div>
        `;

        notesGrid.appendChild(card);
    });
}

// Add Note
addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (title === "" || description === "") {
        alert("Please fill both fields");
        return;
    }

    notes.push({ title, description });

    saveNotes();
    renderNotes();

    titleInput.value = "";
    descInput.value = "";
});

// Delete Note
function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

// Edit Note
function editNote(index) {
    const newTitle = prompt("Edit title:", notes[index].title);
    const newDesc = prompt("Edit description:", notes[index].description);

    if (newTitle && newDesc) {
        notes[index].title = newTitle;
        notes[index].description = newDesc;

        saveNotes();
        renderNotes();
    }
}

// Search Notes
searchBar.addEventListener("input", () => {
    const text = searchBar.value.toLowerCase();

    document.querySelectorAll(".note-card").forEach(card => {
        const title = card.querySelector(".note-title").textContent.toLowerCase();
        const desc = card.querySelector(".note-description").textContent.toLowerCase();

        if (title.includes(text) || desc.includes(text)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Load existing notes on page load
renderNotes();
