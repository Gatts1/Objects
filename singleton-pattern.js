class Singleton {
  constructor(value){
  if(Singleton.instance){
    return Singleton.instance;
    }
    this.value = value;
   Singleton.instance = this;
  }
}

// const new1 = new Singleton("comida");
// const new2 =  new Singleton("study");

// console.log(new1);
// console.log(new2);


