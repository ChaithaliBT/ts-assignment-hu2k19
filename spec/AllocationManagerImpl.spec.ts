import AllocationManagerImpl from '../src/AllocationManagerImpl';
import ArrayModelStore from '../src/ArrayModelStore';
import Allocation from '../src/models/Allocation';
import Developer from '../src/models/Developer';
import Project from '../src/models/Project';
import Technology from '../src/Technology';

describe('AllocationManagerImpl', function () {
    describe('getFreeDevelopersForTechnology', function () {
        it('should give empty array when no developer exists for technology', function () {
            const developerStore = new ArrayModelStore<Developer>();
            const projectStore = new ArrayModelStore<Project>();
            const allocationStore = new ArrayModelStore<Allocation>();
            const alloc_manager = new AllocationManagerImpl(projectStore, developerStore, allocationStore);

            const freeDevelopersForJava = alloc_manager.getFreeDevelopersForTechnology(Technology.JAVA);

            expect(freeDevelopersForJava).toEqual([]);
        });
    });

    describe('getFreeDevelopersForTechnology', function () {
        it('should give free developers for technology', function () {
            const developerStore = new ArrayModelStore<Developer>();
            developerStore.add(new Developer({ id: 1, name: 'Kick', knownTechnologies: [Technology.JAVA] }));
            developerStore.add(new Developer({ id: 2, name: 'Nick', knownTechnologies: [Technology.JAVA] }));

            const projectStore = new ArrayModelStore<Project>();
            const allocationStore = new ArrayModelStore<Allocation>();
            const alloc_manager = new AllocationManagerImpl(projectStore, developerStore, allocationStore);

            const freeDevelopersForJava = alloc_manager.getFreeDevelopersForTechnology(Technology.JAVA);

            expect(freeDevelopersForJava).toEqual([
                new Developer({ id: 1, name: 'Kick', knownTechnologies: [Technology.JAVA] }),
                new Developer({ id: 2, name: 'Nick', knownTechnologies: [Technology.JAVA] }),
            ]);
        });
    });

});
