import { BookFactory } from './factories/bookFactory';
import { NovelFactory } from './factories/novelFactory';
import { ComicsFactory } from './factories/comicsFactory';



function Client(factory:BookFactory){
    const book = factory.createBook();
    const genre = factory.selectGenre();

    console.log(book.giveName());
    console.log(genre.givePlot());
}

console.log("let's start the Novel Factory");
Client(new NovelFactory());
console.log("let's start the Comics Factory");
Client(new ComicsFactory());