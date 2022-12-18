<script setup>
import { computed } from "vue";
import { useStoreNotes } from "../../stores/storeNotes";
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

/* 
  characters length
*/
const charactersLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});
</script>
<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">{{ note.content }}</div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ charactersLength }} </small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">Edit</RouterLink>
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>
