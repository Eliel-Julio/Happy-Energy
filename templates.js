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
    const str = '<img src="https://happyenergy.com.br/wp-content/uploads/2024/06/logotipo-happy-solar-AZUL.webp"><h1>'

    if (elements.length === 0) return

    elements.forEach(el => {
        let h1 = el.getAttribute('content') || 'Bem-vindo à Happy Energy';
        el.innerHTML = str+h1+'</h1>'
    })
    return

}

function definitions(){
    footer()
    header()
}