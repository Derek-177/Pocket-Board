const form = document.getElementById("note-form");
const input = document.getElementById("note-input");
const board = document.getElementById("board");
const empty = document.getElementById("empty");
const count = document.getElementById("count");
const STORAGE_KEY = "pocket-board-notes";

let notes = load();

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    /* storage unavailable: notes still work for this visit */
  }
}

function render() {
  board.innerHTML = "";

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.className = "note" + (note.done ? " done" : "");

    const text = document.createElement("p");
    text.textContent = note.text;

    const actions = document.createElement("div");
    actions.className = "note-actions";

    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.textContent = note.done ? "Undo" : "Done";
    doneBtn.addEventListener("click", () => {
      note.done = !note.done;
      save();
      render();
    });

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      notes = notes.filter((n) => n.id !== note.id);
      save();
      render();
    });

    actions.append(doneBtn, removeBtn);
    li.append(text, actions);
    board.appendChild(li);
  });

  empty.hidden = notes.length > 0;
  count.textContent = notes.length + (notes.length === 1 ? " note" : " notes");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  notes.unshift({ id: Date.now(), text: value, done: false });
  input.value = "";
  input.focus();
  save();
  render();
});

document.getElementById("clear-done").addEventListener("click", () => {
  notes = notes.filter((n) => !n.done);
  save();
  render();
});

document.getElementById("clear-all").addEventListener("click", () => {
  if (notes.length && confirm("Remove every note from the board?")) {
    notes = [];
    save();
    render();
  }
});

render();
