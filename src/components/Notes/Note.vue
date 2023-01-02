<script setup>
import { computed, reactive } from "vue";
import { useStoreNotes } from "../../stores/storeNotes";
import ModalDeleteNote from "./ModalDeleteNote.vue";
import { useDateFormat } from "@vueuse/core"
/* 
    props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/* 
  store
*/
const storeNotes = useStoreNotes();

/* 
  date formated
*/

const dateFormatted = computed(()=>{
  let date = new Date(parseInt(props.note.date))
  return useDateFormat(date,  'MM-DD-YYYY | HH:mm').value
})

/* 
  characters length
*/
const charactersLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

/* 
  modals
*/
const modals = reactive({
  deleteNote: false,
});
</script>
<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ charactersLength }} </small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        @click.prevent="modals.deleteNote = true"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <modal-delete-note v-model="modals.deleteNote" v-if="modals.deleteNote" :noteId="note.id" />
  </div>
</template>
