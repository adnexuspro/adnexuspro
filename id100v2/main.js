document.querySelectorAll(`input[hidden="hidden"], [data-testid="continue-button"]`).forEach(item => {
    item.addEventListener('click', function (e) {
        document.querySelectorAll('input[hidden="hidden"], [data-testid="continue-button"]').forEach(item => {
            item.closest('label')?.classList.remove('active')
        })
        // Store the reference to 'this' in another variable
        var that = this;

        this.closest('label')?.classList.add('active');

        if (this.classList.contains('skip')) {
          console.log('check')
            that.closest('.step').querySelector('.error') ? that.closest('.step').querySelector('.error').style.display = 'none' : null
        } else if (this.closest('label').classList.contains('invalid')) {
            that.closest('.step').querySelector('.error').style.display = 'block'
            return
        } else {
            that.closest('.step').querySelector('.error') ? that.closest('.step').querySelector('.error').style.display = 'none' : null
        }


        setTimeout(function () {

            document.querySelector('.header').style.display = 'none'
            // Use the stored reference to 'this' here
            that.closest('.step').style.display = 'none'
            that.closest('.step').nextElementSibling.style.display = 'flex'
            if (that.closest('.step').nextElementSibling.classList.contains('step_loader')) {
                setTimeout(function () {
                    window.location.href = document.querySelector('#offer-link').getAttribute('href')
                }, 3000)
            }

        }, 500);
    });
});

