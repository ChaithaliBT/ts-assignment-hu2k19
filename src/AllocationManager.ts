import Developer from './Developer';
import Project from './Project';
import Technology from './Technology';

export default interface AllocationManager {
    getAllocatedDeveloperTechnologiesForProject(projectId: number): { developerId: number, technology: Technology }[];
    getUnfulfilledRequirementsForProject(projectId: number): Technology[];
    getFreeDevelopersForTechnology(technology: Technology): Developer[];
    allocateDeveloperToProjectForTechnology(developer: Developer, project: Project, technology: Technology): void;
}
