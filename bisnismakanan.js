document.querySelectorAll('.produk-item').forEach(item => {
    const ratingElement = item.querySelector('.rating');
    const stars = ratingElement.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-value');
            ratingElement.setAttribute('data-rating', ratingValue);

            // Menghapus kelas 'selected' dari semua bintang
            stars.forEach(s => s.classList.remove('selected'));

            // Menambahkan kelas 'selected' pada bintang yang dipilih
            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.add('selected');
            }

            alert(`Terima kasih! Anda memberikan rating ${ratingValue} bintang.`);
        });
    });
});('.beli-button').forEach(button => {
    button.addEventListener('click', () => 
        
        {
        alert('Terima kasih telah membeli produk kami!');
    });
});