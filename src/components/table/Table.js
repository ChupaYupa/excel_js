import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import {resizeHandler} from "@/components/table/table-reseze";
// eslint-disable-next-line max-len
import {isCell, matrix, nextSelection, shouldResize} from "@/components/table/table_function";
import {TableSelection} from "@/components/table/TableSelection";
import {$} from "@core/dom";

export class Table extends ExcelComponent{
    static className = 'excel__table'
    constructor($root, options) {
        super($root, {
            listeners: ['mousedown', 'keydown'],
            ...options
        });
    }
    prepare() {
        this.selection = new TableSelection()
    }

    toHTML() {
        return createTable(20)
    }
    init() {
        super.init();
        this.selectCell(this.$root.find('[data-id="0:1"]'))

        this.$on('formula:input', text => {
            this.selection.current.text(text)
        })
        this.$on('formula:done', () => {
            this.selection.current.focus()
        })
    }
    selectCell($cell) {
        this.selection.select($cell)
        this.$emit('table:select', $cell)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        } else if (isCell(event)) {
           const $target = $(event.target)
            if (event.shiftKey) {
                const $cells = matrix($target, this.selection.current)
                    .map(id => this.$root.find(`[data-id="${id}"]`))
                this.selection.selecctGroup($cells)
            } else {
                this.selection.select($target)
            }
        }
    }
    onKeydown(event) {
        const keys = [
            'Enter',
            'Tab',
            'ArrowRight',
            'ArrowDown',
            'ArrowLeft',
            'ArrowUp'
        ]
        // eslint-disable-next-line no-unused-vars
        const {key} = event
        if (keys.includes(key) && !event.shiftKey){
            event.preventDefault()
            const id = this.selection.current.id(true)
            const $next = this.$root.find(nextSelection(key, id))
            this.selectCell($next)
        }
    }
    onInput(event) {
        this.$emit('table:input', $(event.target))
    }
}

