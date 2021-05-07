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
let polygon = new Polygon([5, 5, 5])
console.log(polygon)

class Triangle extends Polygon {
    constructor(sides) {
        super(sides);

    }
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}
let triangle = new Triangle([5, 5, 5])
let triangle2 = new Triangle([15, 10, 1])
console.log(triangle)
console.log(triangle2)
triangle.isValid
triangle2.isValid
triangle.perimeter
triangle2.perimeter

class Square extends Polygon {
    constructor(sides) {
        super(sides)

    }
    get isValid() {
        if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))

    }
    get area() {
        if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]


    }
}
let square = new Square([5, 5, 5, 5])
console.log(square)