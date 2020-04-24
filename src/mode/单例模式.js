/*
 * @Author: shenYuan
 * @Date: 2020-04-23 14:27:30
 * @LastEditTime: 2020-04-24 18:12:14
 * @Description: 描述
 */
class Single {
	constructor(num) {
		this.cart = num
	}
	add(num) {
		this.cart += num
	}
	reduce(num) {
		this.cart -= num
	}
	login() {
		console.log('登陆')
	}
	static getInstance(num) {
		if (!this.instance) {
			this.instance = new Single(num)
		}
		return this.instance
	}
}

let obj1 = Single.getInstance(10)
let obj2 = Single.getInstance(20)

console.log(obj1.cart, obj2.cart)
obj1.add(3)
console.log(obj1.cart, obj2.cart)
