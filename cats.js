let id = 0;

document.getElementById('attach').addEventListener('click', () =>{
    let newDate = new Date();
    let table = document.getElementById('waitlist');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
    row.insertCell(1).innerHTML = document.getElementById('new-name').value;
    row.insertCell(2).innerHTML = document.getElementById('new-age').value;
    let actions = row.insertCell(3);
    actions.appendChild(removeButton(id++));
    document.getElementById('new-name').value = '';
});

function removeButton(id) {
    let bttn = document.createElement('button');
    bttn.className = 'btn-btn-secondary';
    bttn.id =id;
    
}


