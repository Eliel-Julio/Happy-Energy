function footer(){
    const elements = Array.from(document.querySelectorAll('.footer'))

    if (elements.length === 0) return

    const str = '&copy; 2025 <a style="color: #fcde1f;" href="https://happyenergy.com.br/">Happy Energy</a> • Todos os direitos reservados'

    elements.forEach(el => {
        el.innerHTML = str
    })

    return
}

function header(){
    
    const elements = Array.from(document.querySelectorAll('.header'))
    const imgSrc = 'https://happyenergy.com.br/wp-content/uploads/2024/06/logotipo-happy-solar-AZUL.webp'
    if (elements.length === 0) return

    elements.forEach(el => {
    const img = document.createElement('img')
    const a = document.createElement('a')
    a.href = 'index.html'
    a.appendChild(img)
    img.src = imgSrc
    const h1 = document.createElement('h1')
    const text = el.getAttribute('content') || 'Bem-vindo à Happy Energy'
    h1.textContent = text
    el.innerHTML = ''
    el.appendChild(a)
    el.appendChild(h1)
})

return
}

function definitions(){
    footer()
    header()
}