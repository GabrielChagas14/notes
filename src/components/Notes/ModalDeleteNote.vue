<script setup>
/* 
  imports
*/
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "../../stores/storeNotes";

/*
  props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId : {
    type: String,
    required: true
  }
});

/* 
  emits
*/
const emit = defineEmits(["update:modelValue"]);

/* 
  store
*/
const storeNotes = useStoreNotes()

/* 
  close modal
*/

const closeModal = () => {
  console.log("aaa");
  emit("update:modelValue", false);
};

/* 
  click outside to close
*/

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

/* 
  keyboard control
*/
const handleKeyBoard = e => {
  if (e.key === 'Escape') closeModal()
}
onMounted(()=>{
  document.addEventListener('keyup', handleKeyBoard)
})
onUnmounted(()=>{
  document.removeEventListener('keyup', handleKeyBoard)
})
</script>

<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button">Cancel</button>
        <button @click="storeNotes.deleteNote(noteId)" class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>
