// Your code here
class Polygon {
    constructor (sides) {
        this.sides = sides;
        this.count = this.sides.length
        
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);

    }
}

class Triangle extends Polygon {
    constructor(sides) {
        super(sides);

    }
}

class Square extends Triangle {
    constructor() {

    }
}