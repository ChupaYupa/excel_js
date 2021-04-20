import { storage } from "../core/utils";

export function toHTML(key) {
  const model = storage(key);
  const id = key.split(":")[1];
  return `<li class="db__record">
          <a href="#excel/${id}">${model.title}</a>
          <strong>${new Date(model.dateOpened).toLocaleDateString()}
          ${new Date(model.dateOpened).toLocaleTimeString()}</strong>
        </li>`;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key);
    if (!key.includes("excel")) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function creacteRocordsTable() {
  const keys = getAllKeys();
  console.log("keys", keys);
  if (!keys.length) {
    return `<p>вы пока не создали не одной таблицы</p><div class="db__list-header">`;
  }
  return `
  <div class="db__list-header">
    <span>Название</span>
    <span>Дата открытия</span>
      </div>
      <ul class="db__list">
        ${keys.map(toHTML).join("")}
      </ul>
      </div>
      `;
}
