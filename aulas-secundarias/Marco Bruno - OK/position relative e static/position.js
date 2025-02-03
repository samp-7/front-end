const $elementExampleFirst = document.querySelector('.elementExample_first')

// constante 

const $elementExampleLast = document.querySelector('.elementExample_last')

// evento click 

$elementExampleFirst.addEventListener('click', function(event) {
    this.classList.toggle('elementExample_isActive')
    $elementExampleLast.classList.add('elementExample_isActive')
})

$elementExampleLast.addEventListener('click', function(event) {
    this.classList.toggle('elementExample_isActive')
    $elementExampleFirst.classList.add('elementExample_isActive')
})

// que porra é essa scr