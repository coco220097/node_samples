//モジュール化
const itemModule = require('./items')
const controlModule = require('./control')

var items = itemModule.items
controlModule.show(items)