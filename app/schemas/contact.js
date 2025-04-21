import { withDefaults } from '@warp-drive/schema-record';

const Contact = withDefaults({
    type: 'contact',
    fields: [
      { kind: 'field', name: 'first-name' },
      { kind: 'field', name: 'last-name' },
      { kind: 'field', name: 'company-name' },
      { kind: 'field', name: 'notes' },
      { kind: 'field', name: 'connections' },
      { kind: 'field', name: 'addresses' },
      { kind: 'field', name: 'title' },
      {
        kind: 'derived',
        name: 'name',
        type: 'concat',
        options: { fields: ['firstName', 'lastName'], separator: ' ' }
      },
      {
        kind: 'hasMany',
        name: 'pets',
        type: 'pet',
        options: {
          async: false,
          inverse: 'owner',
          polymorphic: true
        }
      }
    ]
  })

const Dog = withDefaults({
    type: 'dog',
    fields: [
      { kind: 'field', name: 'name' },
      {
        kind: 'belongsTo',
        name: 'owner',
        type: 'user',
        options: {
          async: false,
          inverse: 'pets',
          as: 'pet',
        }
      }
    ]
  })

export function register(schema) {
  schema.registerResources([
    Contact,
    Dog,
  ]);
}
