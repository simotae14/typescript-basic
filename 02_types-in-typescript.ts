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