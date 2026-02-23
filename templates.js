function footer(){
    const elements = Array.from(document.querySelectorAll('.footer'))

    if (elements.length === 0) return

    const str = '&copy; 2026 <a style="color: #fcde1f;" href="https://happyenergy.com.br/">Happy Energy</a> • Todos os direitos reservados'

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

function BackButton(){
    const container = document.getElementById('container')
    const button = document.createElement('button')
    const link = document.createElement('a')
    
    link.href = 'index.html'
    
    button.innerHTML = '<span class="material-icons icon">arrow_back</span> Voltar'
    button.style.width = '100%'
    button.type = 'button'
    
    link.appendChild(button)
    container.appendChild(link)
}

function definitions(){
    footer()
    header()
    BackButton()
    calcular()
}

function priceInputMask(value){
    // Remove tudo o que não é dígito
    value = value.replace(/\D/g, '');
    // Adiciona a vírgula antes dos dois últimos dígitos
    value = value.replace(/(\d{2})$/, ',$1');
    // Adiciona o ponto a cada três dígitos antes da vírgula
    value = value.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    return value;
}