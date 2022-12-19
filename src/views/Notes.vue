<script setup>
/* 
    imports
*/
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
import { useWatchCharacters } from "../use/useWatchCharacters.js"
/* 
  store
*/
const storeNotes = useStoreNotes();
/* 
    notes
*/
const newNote = ref("");
const addEditNoteRef = ref(null);
const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
/* 
  watch
*/
useWatchCharacters(newNote)
</script>
<template>
  <div class="notes">
    <add-edit-note
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </add-edit-note>
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>
