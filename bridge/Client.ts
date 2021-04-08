import City from "./CityAbstraction/city";
import LondonCity from "./CityAbstraction/londonCity";
import ParisCity from "./CityAbstraction/ParisCity";
import PragaCity from "./CityAbstraction/PragaCity";
import Comics from "./StoreImplementation/Comics";
import Toys from "./StoreImplementation/Toy";

function Client(store){
    //  let londonCity: City = new LondonCity()
    //  londonCity.Store = store;
    //  return londonCity.searchStore();

     let pragaCity: City = new PragaCity()
     pragaCity.Store = store;
     return pragaCity.searchStore();

    //  let parisCity: City = new ParisCity()
    //  parisCity.Store = store;
    // return parisCity.searchStore();

}

let toys:Toys = new Toys("DC Land","human-sized-spiderman",200,"Jonx Manufactory");
console.log(Client(toys));
let comics:Comics = new Comics("DC Land","Flash Comics",20,"Gardner Fox");
console.log(Client(comics));


