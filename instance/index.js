function Person(name, age) {
    this.name = name
    this.age = age
    this.origin = "japan"
}

Person.prototype.olderThan = function(p){
    return this.age > p.age;
}

var a = new Person("ankh", 33);
var m = new Person("morita", 27);

a.olderThan(m)
m.olderThan(a)


