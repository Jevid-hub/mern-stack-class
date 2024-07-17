class person {
    constructor(name,age) {
        this.name = name 
        this.name = age 
    }
    greet() {
        console.log('hi ${this.name}')
    }
    eat() {
        console.log('${this.name} is eating')
    }
}
let personl = new person("jevid",10)
console.log(personl.name)
console.log(personl.age)
personl1.eat()
personl2.greet()



class book {
    constructor(title,author,pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    title() {
        console.log('${this.title} the book')
    }
    author() {
        console.log('${this.author} Roan')
    }
    pages() {
        console.log('${this.pages} 20')
    }

}

