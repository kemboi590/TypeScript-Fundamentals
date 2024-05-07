// interface is implemented
interface TakeNotes {
  noteId: number;
  title: string;
  content: string;
}

interface CreateStory {
  createStory(): void;
}

class CreateNote implements TakeNotes {
  constructor(
    public noteId: number,
    public title: string,
    public content: string
  ) {}
}

class Notemate implements TakeNotes, CreateStory {
  constructor(
    public noteId: number,
    public title: string,
    public content: string,
    public isMember: boolean
  ) {}

  createStory(): void {
    console.log("Your story was created");
  }
}

const notemate = new Notemate(1, "Typescript", "It has types", false);
console.log(notemate);
notemate.createStory(); // calling a method
