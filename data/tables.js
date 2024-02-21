import { v4 as uuidv4 } from 'uuid';

export const tables = [
    {
        id: uuidv4(),
        name: 'On hold',
        color: 'bg-orange-600',
        tasks: [
            {
                id: uuidv4(),
                content: 'Task 1'
            },
            {
                id: uuidv4(),
                content: 'Task 2'
            },
            {
                id: uuidv4(),
                content: 'Task 3'
            },
            {
                id: uuidv4(),
                content: 'Task 3'
            },
            {
                id: uuidv4(),
                content: 'Task 3'
            },
        ]
    },
    {
        id: uuidv4(),
        name: 'In progress',
        color: 'bg-blue-800',
        tasks: [
            {
                id: uuidv4(),
                content: 'Task 1'
            },
            {
                id: uuidv4(),
                content: 'Task 2'
            },
            {
                id: uuidv4(),
                content: 'Task 3'
            }
        ]
    },
    {
        id: uuidv4(),
        name: 'Needs review',
        color: 'bg-yellow-600',
        tasks: [
            {
                id: uuidv4(),
                content: 'Task 1'
            },
            {
                id: uuidv4(),
                content: 'Task 2'
            },
            {
                id: uuidv4(),
                content: 'Task 3'
            }
        ]
    },
    {
        id: uuidv4(),
        name: 'Approved',
        color: 'bg-green-800',
        tasks: [
            {
                id: uuidv4(),
                content: 'Task 1'
            },
            {
                id: uuidv4(),
                content: 'Task 2'
            },
            {
                id: uuidv4(),
                content: 'Task 3'
            }
        ]
    }
]