/*
 * @Author: shenYuan
 * @Date: 2020-04-23 18:03:32
 * @LastEditTime: 2020-04-23 18:07:33
 * @Description: 描述
 */
export class AbstractBaseAttr {
	constructor({ power, body, attack, bold }) {
		this.power = power
		;(this.bold = body), (this.attack = attack)
		this.bold = bold
	}
}
