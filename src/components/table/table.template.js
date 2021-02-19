const CODES = {
    A: 65, // Number A - use method charCodeAt
    Z: 90 // Number Z
}
function createRow(content, rowNumber) {
    return `
    <div class="row">
    <div class="row-info">${rowNumber ? rowNumber : ''}</div>
    <div class="row-data">${content}</div>
</div>`
}

// eslint-disable-next-line no-unused-vars
function createCell(cell) {
    return `
    <div class="cell" contenteditable>${cell}</div>
`
}
function createCol(col) {
    return `
    <div class="column">${col}</div>`
}
function toChar(el, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    // eslint-disable-next-line no-debugger
    debugger
    const colsCount = CODES.Z - CODES.A + 1 // number of columns
    const rows = []
    console.log(rows)
    // eslint-disable-next-line no-unused-vars
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')
    rows.push(createRow(cols))
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(createCell)
            .join('')
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}