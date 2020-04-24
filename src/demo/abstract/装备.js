/*
 * @Author: shenYuan
 * @Date: 2020-04-23 18:02:20
 * @LastEditTime: 2020-04-23 18:32:41
 * @Description: 描述
 */

import { AbstractBaseAttr } from './属性'

export class zhuangbei extends AbstractBaseAttr {
	constructor(name, attr, stoneObject, fumoObject) {
		super(attr)
		this.name = name
		this.stoneObject = stoneObject
		this.fumoObject = fumoObject
		this.stone = Array.length(2)
		this.fumo = Array.length(1)
	}
}

export class close extends zhuangbei {
	constructor(name, attr, allowStone, allowFumo) {
		super(name, attr, allowStone, allowFumo)
	}
}
export class shoe extends AbstractBaseAttr {
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
