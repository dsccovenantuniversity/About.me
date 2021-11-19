class Student{
  
  int level;
  String name;
  String programme;

  Student(this.level, this.name, this.programme){
    print("My name is ${this.name}, a ${this.level} ${this.programme} student");
  }
}

Student Flutter = new Student(400, "Aderemi Alo", "Computer Science");