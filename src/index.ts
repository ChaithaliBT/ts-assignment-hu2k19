import Developer from './models/Developer';
import { developerStore } from './stores';
import Technology from './Technology';

const d = new Developer();

d.id = 1;
d.knownTechnologies = [Technology.JAVA, Technology.PYTHON];

developerStore.add(d);

console.log(developerStore.getById(1));

