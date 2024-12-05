import healthCheck from '../app';

test.each([
    [{name: 'мечник', health: 10}, 'critical'],
    [{name: 'маг', health: 100}, 'healthy'],
    [{name: 'лучник', health: 45}, 'wounded'],
])
('testing life players status and amount', (player, expected) => {
    const result = healthCheck(player);
    expect(result).toEqual(expected);
});