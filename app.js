import { renderList, addItem } from './listManager.js';

document.getElementById("addBtn").addEventListener("click", () => addItem());
renderList();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(() => {
        console.log('Service Worker Registered');
    });
}