// abstarct classs are closely related to interfaces but differ: abstract classes can be inherited by extend key word, whereas interfaces uses impelements.
// asbtarct classe uses abract keywords which would be implemented later
// a method can have its implemetation on definition

abstract class TakeSurvey {
  constructor(public title: string, public content: string) {
    this.title = title;
    this.content = content;
  }
  // abstract method
  abstract survey(): void;

  // method with implementation
  getNumber(): number {
    return 29;
  }
}

class blog extends TakeSurvey {
  constructor(
    public title: string,
    public content: string,
    public surveyId: number //
  ) {
    super(title, content);
  }

  survey(): void {
    console.log("Survey taken");
  }
}

const bg = new blog("title", "content", 1);
console.log(bg.getNumber());

//3:35
