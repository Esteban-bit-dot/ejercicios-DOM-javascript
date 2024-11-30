/* script.js */
function searchTable() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const table = document.getElementById('data-table');
    const rows = table.getElementsByTagName('tr');
    let count = 0;

    for (let i = 1; i < rows.length; i++) {
        const cell = rows[i].getElementsByTagName('td')[0];
        if (cell) {
            const cellText = cell.textContent || cell.innerText;
            if (cellText.toLowerCase().indexOf(searchInput) > -1) {
                rows[i].style.display = '';
                count++;
            } else {
                rows[i].style.display = 'none';
            }
        }
    }

    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = `El término "${searchInput}" se encontró ${count} veces.`;
}
