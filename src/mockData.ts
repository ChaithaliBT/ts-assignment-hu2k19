import Technology from './Technology';

const MOCK_DATA = {
    DEVELOPERS: [
        {
            id: 1,
            name: 'Kick Buttowski',
            knownTechnologies: [Technology.JAVA, Technology.PYTHON, Technology.JAVASCRIPT],
        },
        {
            id: 2,
            name: 'Courage C.D',
            knownTechnologies: [Technology.PYTHON],
        },
    ],
    PROJECTS: [
        {
            id: 1,
            requiredTechnologies: [Technology.JAVA]
        },
        {
            id: 2,
            requiredTechnologies: [Technology.PYTHON, Technology.JAVASCRIPT]
        }
    ]
};

export default MOCK_DATA;
