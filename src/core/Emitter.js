export class Emitter {
    constructor() {
        this.listeners = {}
    }
    // Уведомление слушателей
    // table.emit('table:select', {a:1})
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
listener(...args)
            console.log(event)
})
        return true
    }
    // Подписсываемя на уведомление
    // Добавляем нового слушателя
    // table.subscribe('table:select', () => {})
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] =
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}
const emitter = new Emitter()
const unsub = emitter.subscribe('toma', data => console.log('Sub:', data))
emitter.emit('Great', 25)
setTimeout(() => {
    emitter.emit('Toma', 'After 2 sec')
}, 2000)
setTimeout(() => {
    unsub()
}, 3000)
setTimeout(() => {
    emitter.emit('Toma', 'After 4 sec')
}, 4000)