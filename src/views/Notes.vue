<script setup>
/* 
    imports
*/
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";
import { useStoreNotes } from "../stores/storeNotes";
/* 
  store
*/
const storeNotes = useStoreNotes();
/* 
    notes
*/
const newNote = ref("");
const addEditNoteRef = ref(null)
const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea()
};
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
    <!--  <div class="card has-background-success-dark p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div> -->
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>
