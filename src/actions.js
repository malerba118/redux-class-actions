export class Action {
  static toString() {
    return this.name
  }
}

export class IncrementAction extends Action {}

export class IncrementByAction extends Action {
  constructor(amount) {
    super()
    this.amount = amount
  }
}