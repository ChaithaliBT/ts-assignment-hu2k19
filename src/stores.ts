import Allocation from './Allocation';
import ArrayModelStore from './ArrayModelStore';
import Developer from './Developer';
import Project from './Project';

export const developerStore = new ArrayModelStore<Developer>();
export const projectStore = new ArrayModelStore<Project>();
export const allocationStore = new ArrayModelStore<Allocation>();
