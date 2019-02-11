import Developer from "./Developer";
import { developerStore } from "./stores";

const d = new Developer();

d.id = 1;
d.knownTechnologies = ['java', 'python'];

developerStore.add(d);

console.log(developerStore.getById(1));