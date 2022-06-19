const $inputNameTask = document.querySelector('#ipt')
const $btnAddTask = document.querySelector('#add-item')
const $btnClearAllList = document.querySelector('#clear-list')

const $textEmpty = document.querySelector('.text-empty')
const $iptCheckTask = document.querySelector('#check')
const $btnDeleteItem = document.querySelector('#delete-item')

const $itemsContainer = document.querySelector('.list')


$btnAddTask.addEventListener('click', () => {

    if ($inputNameTask.value == '') {
        alert('Ingresa una tarea')
    } else {
        const $newItem = document.createElement('li')
        $newItem.classList.add('task')

        $newItem.innerHTML = `
        <div class="task__info">
            <input id="check" type="checkbox">
            <span>${$inputNameTask.value}</span>
        </div>
            
        <button id="delete-item" class="btn btn--clear btn--clear-item"><i class="bi bi-x"></i></button>
        `

        $itemsContainer.append($newItem)

        
        $inputNameTask.value = ''
        
        if ($itemsContainer.children.length === 0) {
            $textEmpty.classList.replace('d-none', 'text-empty')
            alert('g')
        } else {
            $textEmpty.classList.replace('text-empty', 'd-none')
        }
    }
    
    
})


$itemsContainer.addEventListener('click', (e) => {
    // btn delete
    if (e.target.getAttribute('id') == 'delete-item') {

        $itemsContainer.removeChild(e.target.parentElement)

        if ($itemsContainer.children.length == 0) {
            $textEmpty.classList.replace('d-none', 'text-empty')
        }
    }


    // ipt task
    if (e.target.getAttribute('id') == 'check') {
        e.target.nextElementSibling.classList.toggle('check')
    }
})



$btnClearAllList.addEventListener('click', () => {
    $itemsContainer.innerHTML = ``
    
    if ($itemsContainer.children.length == 0) {
        $textEmpty.classList.replace('d-none', 'text-empty')
    }
})