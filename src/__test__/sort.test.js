import sorting from '../sort';

test ('sort array and obj players', () => {
    const users = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
    ];
    const sortedUsers = sorting(users);
    const expectedUsers = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    expect(sortedUsers).toEqual(expectedUsers);
});