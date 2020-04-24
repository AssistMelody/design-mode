/*
 * @Author: shenYuan
 * @Date: 2020-04-23 10:40:21
 * @LastEditTime: 2020-04-24 19:16:20
 * @Description: 工厂模式
 */

/**
 * 简单工厂模式,
 */
function simpleFactory1() {
	class Product {
		constructor(name) {
			this.name = name
		}
	}
	class factory {
		create(name) {
			return new Product(name)
		}
	}
	const factoryMode = new factory()
	console.log(factoryMode.create('lll'))
	console.log(factoryMode.create('222'))
}
function simpleFactory2() {
	class Product {
		constructor(name) {
			this.name = name
		}
	}
	class feizao extends Product {
		constructor(name) {
			super(name)
		}
	}
	class xiangzao extends Product {
		constructor(name) {
			super(name)
		}
	}
	class factory {
		createFeizao(name) {
			return new feizao(name)
		}
		createXiangzao(name) {
			return new xiangzao(name)
		}
	}
	const factoryMode = new factory()
	console.log(factoryMode.createXiangzao('非皂'))
	console.log(factoryMode.createXiangzao('香皂'))
}
simpleFactory1()
simpleFactory2()
