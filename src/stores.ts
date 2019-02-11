import ArrayModelStore from './ArrayModelStore';
import Allocation from './models/Allocation';
import Developer from './models/Developer';
import Project from './models/Project';

export const developerStore = new ArrayModelStore<Developer>();
export const projectStore = new ArrayModelStore<Project>();
export const allocationStore = new ArrayModelStore<Allocation>();
