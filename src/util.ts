export const getString = (value: string | Uint8Array) =>
  typeof value === 'string' ? value : new TextDecoder().decode(value)

export const getJson = (value: string | Uint8Array) => JSON.parse(getString(value))

export const fromJson = (value: any) => Buffer.from(JSON.stringify(value)).toString('base64')
