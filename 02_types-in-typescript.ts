// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
    a: 'John'
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuples
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: string = Size[2]; // Medium

enum Size2 { Small = 1, Medium = 2, Large = 3 };
let sizeNumber: number = Size.Small; // 1

// ANY - !!!!!!!!!! BE CAREFUL
let whatever: any = 'aghhhhhhhhhhh nooooooooooo!!!';
whatever = 5;
whatever = true;
whatever = Size.Small;
whatever = basket;

// VOID
let sing = (): void => {
    console.log('lalalalallala');
}

// NEVER
let error = (): never => {
    throw Error('oops');
}

// INTERFACES
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robot: RobotArmy) => {
    console.log('FIGHT!');
}
// Equivalent to write
let fightRobotArmy2 = (robot: { count: number, type: string, magic: string }) => {
    console.log('FIGHT!');
}

fightRobotArmy({ count: 1, type: 'dragon'});

type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// FUNCTIONS
let fightRobotArmy3 = (robot: RobotArmy): void => {
    console.log('FIGHT!');
}

let fightRobotArmy4 = (robot: { count: number, type: string, magic: string }): number => {
    console.log('FIGHT!');
    return 5;
}

// Classes
class Animal {
    public sing: string = 'allalalalal';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('RAAAWWWR');
lion.greet();
lion.sing;

// UNION
let confused: string | number | boolean = true;

// TYPE INFERENCE
let x = 4;
x = 5;
