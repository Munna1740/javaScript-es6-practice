class Parents{
    constructor(fatherName){
    this.fatherName =  "Anowar";
  }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getName(){
        return this.name+ " "+ this.fatherName;
    }
}
const baby1 = new Child("Munna");
console.log(baby1);
console.log(baby1.getName());
