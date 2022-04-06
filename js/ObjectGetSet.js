let person = {
    firstName:"Vishal",
    lastName:"Gupta",
    age:26,
    degree:"B.Tech.",
    get getValue(){
        return this.age;
    },
    set setValue(val){
        return this.age = val;
    },

    mydegree:function(){
        return this.degree;
    }
}

person.setValue = 40;

console.log(person.getValue);
console.log(person.mydegree());