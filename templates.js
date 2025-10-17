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

/**
 * Calcula o custo final com base no valor unitário (custo) e na quantidade de módulos.
 * Aceita números ou strings com vírgula/point e valida entradas.
 * Retorna um Number (total) ou NaN se as entradas forem inválidas.
 * Exemplo: calculateFinalCost('1234,50', '10') => 12345
 */
function calculateFinalCost(custo, quantidade){
    // normaliza entrada: aceita strings com vírgula
    const parse = v => {
        if (typeof v === 'string') v = v.replace(/\s+/g, '').replace(',', '.')
        return Number(v)
    }

    const c = parse(custo)
    const q = parse(quantidade)

    // valida
    if (!isFinite(c) || !isFinite(q) || c < 0 || q < 0) return NaN

    return c * q
}