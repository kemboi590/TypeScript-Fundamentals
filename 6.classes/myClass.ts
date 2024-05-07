// class User {
//   public email: string = "jesg"
//   private name: string;
//   private readonly city: string = "Kutus";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     kemboi.city
//   }
// }

class User {
  // properties can be private or public
  protected _courseCount = 1;
  readonly city: string = "Kutus";
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }

  //   declartion of private methods
  private deleteToken() {
    console.log("Token deleted");
  }

  get getUserEmail(): string {
    return `${this.name} email is ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNumber: number) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;

    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNumber;
  }
}

// inheritance
class subUser extends User {
  // cannot acquire private property -> protected classes can be accessed on extended classes.
  isFamily: boolean = true;
  set changeCourseCount(num: number) {
    if (num <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = num;
  }
}

const kemboi = new User("bk@gmail.com", "Brian Kemboi");
console.log(kemboi.getUserEmail); //getter
kemboi.courseCount = 22; //setter
console.log(kemboi.courseCount);

const Del = new subUser("del@gmail.com", "Delphine Nyamusi");
Del.changeCourseCount = 2; //setter
console.log(Del.courseCount);
