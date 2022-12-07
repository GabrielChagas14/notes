<script setup>
import { defineProps, computed } from 'vue';
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
  emits
*/

const emit = defineEmits(['deleteClicked'])
/* 
  characters length
*/
const charactersLength = computed(()=>{
  let description = props.note.content.length > 1 ? 'characters' : 'character' 
  return `${props.note.content.length} ${description}`
})

/* 
  handle delete clicked
*/

const handleDeleteClicked = () => {
  emit('deleteClicked', props.note.id)
}
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
      <a href="#" class="card-footer-item">Edit</a>
      <a
      @click.prevent="handleDeleteClicked" 
      href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
