import Model from './Model';
import Technology from './Technology';

export default class Project extends Model {
    name: string;
    requiredTechnologies: Technology[];
}
