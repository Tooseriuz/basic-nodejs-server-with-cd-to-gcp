export const createUser = {
  type: 'object',
  required: ['name'],
  properties: {
    name: { type: 'string' }
  }
}