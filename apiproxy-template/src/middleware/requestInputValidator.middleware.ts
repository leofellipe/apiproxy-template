import { ObjectSchema } from 'joi'

export default function requestInputValidator<T>(body: unknown, joiSchema: ObjectSchema<T>) {
  const { error, value } = joiSchema.validate(body)

  if (error) {
    throw error
  }

  return value
}
