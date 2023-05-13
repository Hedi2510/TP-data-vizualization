document.getElementById('add-note').addEventListener('click', function() {
    var noteInput = document.getElementById('note-input');
    var note = noteInput.value;
    noteInput.value = '';

    var noteDiv = document.createElement('div');
    noteDiv.textContent = note;
    noteDiv.classList.add('note');

    document.getElementById('notes').appendChild(noteDiv);
});