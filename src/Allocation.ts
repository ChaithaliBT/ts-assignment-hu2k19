import Model from './Model';
import Technology from './Technology';

export default class Allocation extends Model {
    developerId: number;
    projectId: number;
    technology: Technology;

    constructor(developerId: number, projectId: number, technology: Technology) {
        super();
        this.developerId = developerId;
        this.projectId = projectId;
        this.technology = technology;
    }
}
