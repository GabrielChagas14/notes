<script setup>
/* 
    imports
*/
import { ref } from "vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";

const noteContent = ref("");
</script>
<template>
  <div class="edit-note">
    <add-edit-note
      v-model="noteContent"
      bgColor="link"
      placeholder="Edidt note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
        @click="$router.push('/')"
          class="button is-link is-light mr-2"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </add-edit-note>
  </div>
</template>
