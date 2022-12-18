import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "0",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi atquea, eligendi dolores necessitatibus esse, minus recusandae ab earum officiis pariatur velit repellat, quae nihil ex beatae delectus nemoratione!",
        },
        {
          id: "1",
          content: "Isso é uma pequena anotação",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();
      let note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
  },
});
