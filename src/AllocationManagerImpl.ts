import Allocation from './Allocation';
import AllocationManager from './AllocationManager';
import Developer from './Developer';
import Project from './Project';
import { allocationStore, developerStore, projectStore } from './stores';
import Technology from './Technology';

export default class AllocationManagerImpl implements AllocationManager {

    constructor() { }

    getUnfulfilledRequirementsForProject(projectId: number): Technology[] {
        const requiredTechnologies = projectStore.getById(projectId).requiredTechnologies;
        const fulfilledTechnologies = new Set(this.getFulfilledRequirementsForProject(projectId));
        return requiredTechnologies.filter(technology => !fulfilledTechnologies.has(technology));
    }

    getAllocatedDeveloperTechnologiesForProject(projectId: number): { developerId: number, technology: Technology }[] {
        return allocationStore
            .filter(alloc => alloc.projectId === projectId)
            .map(alloc => ({ developerId: alloc.developerId, technology: alloc.technology }));
    }

    getFreeDevelopersForTechnology(technology: Technology): Developer[] {
        return developerStore
            .filter(developer => developer.knownTechnologies.some(t => t === technology))
            .filter(developer => !this.getAllocatedDeveloperIds().some(id => id === developer.id));
    }

    allocateDeveloperToProjectForTechnology(developer: Developer, project: Project, technology: Technology): void {
        allocationStore.add(new Allocation(developer.id, project.id, technology));
    }

    private getAllocatedDeveloperIds(): number[] {
        return allocationStore.all().map(developer => developer.id);
    }

    private getFulfilledRequirementsForProject(projectId: number): Technology[] {
        return allocationStore
            .filter(alloc => alloc.projectId === projectId)
            .map(alloc => alloc.technology);
    }
}
