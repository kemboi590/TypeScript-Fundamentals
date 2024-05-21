// interface is implemented
//  different between an interface and type is that an interface can be implemented by a class whereas a type cannot
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

interface areaType {
  width: number;
  length: number;
}

const calCulateArea = (rect: areaType) => {
  return rect.width * rect.length;
};

console.log(calCulateArea({ width: 10, length: 20 }));


// extend an interface
interface volume extends areaType {
  height: number;
}

const calCulateVolume = (rect: volume) => {
  return rect.width * rect.length * rect.height;
};

console.log(calCulateVolume({ width: 10, length: 20, height: 30 }));