document.querySelector('form').addEventListener('input', function(event) {
            event.preventDefault();
            if(event.target.classList.contains('priceInputMask')){
                event.target.value = priceInputMask(event.target.value);
            }
            calcular();
        });