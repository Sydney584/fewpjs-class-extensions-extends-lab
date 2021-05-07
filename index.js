// Your code here
class Polygon {
    constructor (sides) {
        this.sides = sides;
        
    }
    get countSides() {
        return this.sides
    }
    get perimeter() {

    }
}

class Triangle extends Polygon {
    constructor() {

    }
}

class Square extends Triangle {
    constructor() {
        
    }
}