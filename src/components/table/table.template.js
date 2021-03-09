const CODES = {
    A: 65, // Number A - use method charCodeAt
    Z: 90 // Number Z
}
function createRow(content, rowNumber) {
    const resize = rowNumber ? '<div class="row-resize" ' +
        'data-resize="row"></div>' : ''
    return `
    <div class="row" data-type="resizable">
    <div class="row-info">
    ${rowNumber ? rowNumber : ''}
    ${resize}
</div>
    <div class="row-data">${content}</div>
</div>`
}
// function createCell(_, col) {
// return `<div
//     class="cell"
//     contenteditable
//     data-col="${col}"
//     // data-id="${row}:${col}">
// </div>
// `
// }
                // OR
function createCell(row) {
    return function(_, col) {
        return `<div 
    class="cell" 
    contenteditable 
    data-col="${col}" 
    data-type="cell"
    data-id="${row}:${col}">
</div>
`
    }
}
function createCol(col, index) {
    return `
    <div class="column" data-type="resizable" data-col="${index}">${col}
    <div class="col-resize" data-resize="col"></div></div>`
}
function toChar(el, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1 // number of columns
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol)
        .join('')
    rows.push(createRow(cols))
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            // .map((_, col) => createCell(row, col))
            .fill('')
            .map(createCell(i))
            .join('')
        rows.push(createRow(cells, i+1))
    }
    return rows.join('')
}