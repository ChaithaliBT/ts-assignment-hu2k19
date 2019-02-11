import AllocationManager from './AllocationManager';
import Allocation from './models/Allocation';
import Developer from './models/Developer';
import Project from './models/Project';
import ModelStore from './ModelStore';
import Technology from './Technology';

export default class AllocationManagerImpl implements AllocationManager {

    constructor(
        private projectStore: ModelStore<Project>,
        private developerStore: ModelStore<Developer>,
        private allocationStore: ModelStore<Allocation>) { }

    getUnfulfilledRequirementsForProject(projectId: number): Technology[] {
        const requiredTechnologies = this.projectStore.getById(projectId).requiredTechnologies;
        const fulfilledTechnologies = new Set(this.getFulfilledRequirementsForProject(projectId));
        return requiredTechnologies.filter(technology => !fulfilledTechnologies.has(technology));
    }

    getAllocatedDeveloperTechnologiesForProject(projectId: number): { developerId: number, technology: Technology }[] {
        return this.allocationStore
            .filter(alloc => alloc.projectId === projectId)
            .map(alloc => ({ developerId: alloc.developerId, technology: alloc.technology }));
    }

    getFreeDevelopersForTechnology(technology: Technology): Developer[] {
        return this.developerStore
            .filter(developer => developer.knownTechnologies.some(t => t === technology))
            .filter(developer => !this.getAllocatedDeveloperIds().some(id => id === developer.id));
    }

    allocateDeveloperToProjectForTechnology(developer: Developer, project: Project, technology: Technology): void {
        this.allocationStore.add(new Allocation(developer.id, project.id, technology));
    }

    private getAllocatedDeveloperIds(): number[] {
        return this.allocationStore.all().map(developer => developer.id);
    }

    private getFulfilledRequirementsForProject(projectId: number): Technology[] {
        return this.allocationStore
            .filter(alloc => alloc.projectId === projectId)
            .map(alloc => alloc.technology);
    }
}
