class Dom {
    constructor(selector) {
        // #app
        this.$el = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector
    }
    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
        }
        return this.$el.outerHTML.trim()
    }
    clear() {
        this.html('')
        return this
    }
    on(eventType, callback) {
        // this.$$listeners[eventType] = callback
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }
    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
    }
    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }
    get data() {
        return this.$el.dataset
    }
    // Возвращает ближайщий родительский элемент css-сулектора
    closest(selector) {
        return $(this.$el.closest(selector))
    }
    // Возвращает размер элемента или его позицию
    getCoords() {
        return this.$el.getBoundingClientRect()
    }
    css(styles = {}) {
        Object.keys(styles).forEach(key => this.$el.style[key] = styles[key])
    }
}

// ВОЗВРАЩАЕТ DOM
export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes='') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}