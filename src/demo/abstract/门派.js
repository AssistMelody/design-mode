class AbstractMenpai {
	constructor(name, wayEnum) {
		this.name = name
		this.type = 0
		this.wayEnum = wayEnum
	}
	get way() {
		return this.wayEnum[this.type]
	}
	changeType() {
		this.type = Number(!this.type)
		console.log(this.type)
	}
}

export class Yujian extends AbstractMenpai {
	constructor() {
		super('御剑', {
			0: '神虹',
			1: '飞星',
		})
	}
}
export class ZhanFeng extends AbstractMenpai {
	constructor() {
		super('斩风', {
			0: '酩酊',
			1: '弹铗',
		})
	}
}
