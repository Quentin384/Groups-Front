import { Group } from '../models/group.model';

export const MOCK_GROUPS: Group[] = [
  {
    id: '42',
    name: 'Team Phoenix',
    members: [
      {
        id: 'u1',
        firstName: 'Alice',
        lastName: 'Martin',
        photo: '/assets/images/alice.jpg',
        languageLevel: 'B2',
        techLevel: 4,
        isFormerDwwn: true,
        profile: 'timide',
        age: 28
      },
      {
        id: 'u2',
        firstName: 'Bob',
        lastName: 'Dupont',
        photo: '/assets/images/bob.jpg',
        languageLevel: 'A2',
        techLevel: 2,
        isFormerDwwn: false,
        profile: 'extraverti',
        age: 31
      }
    ]
  }
];
