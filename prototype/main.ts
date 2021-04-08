class Lesson{
    name:string;
    objectName: string;
    duration: number;
    room:number;

    public clone(): this {
        const clone = Object.create(this);
        clone.name = this.name;
        clone.objectName = this.objectName;
        clone.duration = this.duration;
        clone.room = this.room;

        return clone;
    }   
}

export function Client(){
    const lesson1 = new Lesson();
    lesson1.name = "Joe Smth";
    lesson1.objectName = "Math";
    lesson1.duration = 90;
    lesson1.room = 505

    const lesson2 = lesson1.clone();
    lesson2.room = 405;

    if (lesson1.name === lesson2.name) {
        console.log('You successfully cloned name field!');
    } else {
        console.log('Smth went wrong.');
    }

console.log(lesson1);
console.log(lesson2);
console.log(lesson1 == lesson2);
}
Client();