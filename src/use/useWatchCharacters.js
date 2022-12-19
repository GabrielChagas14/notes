import { watch } from "vue";
export function useWatchCharacters (el) {
    watch(el, (newValue, oldValue) => {
        if(newValue.length === 100){
          alert('Only 100 characters allowed')  
        }
    });
}