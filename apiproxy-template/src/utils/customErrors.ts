export class GenericRouteError extends Error {
  constructor(public code: number, msg: string) {
    super(msg)

    Object.setPrototypeOf(this, new.target.prototype)
  }
}
