/*
 * @Author: shenYuan
 * @Date: 2020-04-23 18:02:20
 * @LastEditTime: 2020-04-23 18:02:20
 * @Description: 描述
 */

import { AbstractBaseAttr } from './属性'

export class BlueStone extends AbstractBaseAttr {
	constructor(power) {
		super({ power })
	}
}
export class YellowStone extends AbstractBaseAttr {
	constructor(attack) {
		super({ attack })
	}
}
export class RedStone extends AbstractBaseAttr {
	constructor(body) {
		super({ body })
	}
}
export class GreenStone extends AbstractBaseAttr {
	constructor(bold) {
		super({ bold })
	}
}
