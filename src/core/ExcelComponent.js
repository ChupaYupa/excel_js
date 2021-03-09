import {DomListener} from '@core/DomListener'
export class ExcelComponent extends DomListener {
    constructor($root, options ={}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []
        this.prepare()
    }

// настраеваем компонент до init
prepare(){}

// возвращаем шаблон компонента
toHTML() {
    return ''
}
// уведомляем слушателей
$emit(event, ...args) {
        this.emitter.emit(event, ...args)
}
// подписываемся на событие
$on(event, fn) {
       const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
}
// инициализируем компонент
// добавляем DOM слушателей
init() {
        this.initDomListeners()
}
// удаляем компонент
// чистим слушателей
destroy() {
        this.removeDomListeners()
    this.unsubscribers.forEach(unsub => unsub)
}
}