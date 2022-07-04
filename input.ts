const input = document.getElementById('input') as HTMLInputElement;


input.addEventListener('input', (event) => {
    const text = document.getElementById('texto') as HTMLParagraphElement;
    const typedInput = event.currentTarget as HTMLInputElement;
    text.innerHTML = typedInput.value;
})




