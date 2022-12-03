<script setup>
/* 
    imports
*/
import { ref } from "vue";
import Note from "../components/Notes/Note.vue";

/* 
    notes
*/
const newNote = ref("")
const newNoteRef = ref(null)
const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();
  let note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = ''
  newNoteRef.value.focus()
};
const notes = ref([
  {
    id: "0",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi atquea, eligendi dolores necessitatibus esse, minus recusandae ab earum officiis pariatur velit repellat, quae nihil ex beatae delectus nemoratione!",
  },
  {
    id: "1",
    content: "Isso é uma pequena anotação",
  },
]);
</script>
<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-4">
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
    </div>
    <Note v-for="note in notes" :key="note.id" :note="note"/>
   <!--  <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        <div class="content">{{ note.content }}</div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>-->
  </div> 
</template>
