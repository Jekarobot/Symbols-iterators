import Team from '../iterator';

test('Team можно перебирать', () => {
    const team = new Team([
        { name: 'Лучник',
          type: 'Bowman',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10},

        { name: 'Маг',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 10,
          defence: 40},

        { name: 'Мечник',
          type: 'Swordsman',
          health: 80,
          level: 1,
          attack: 10,
          defence: 40},
    ]);
    
    let characters = [];

    for (const character of team) {
        characters.push(character);
    }

    let expected = [
        { name: 'Лучник',
          type: 'Bowman',
          health: 50,
          level: 1,
          attack: 40,
          defence: 10},
        { name: 'Маг',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 10,
          defence: 40},
        { name: 'Мечник',
          type: 'Swordsman',
          health: 80,
          level: 1,
          attack: 10,
          defence: 40},
    ];
    expect(characters).toEqual(expected);
})