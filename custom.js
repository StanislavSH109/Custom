var selector = document.querySelectorAll("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new window.JustValidate('.form', {
    colorWrong: '#FF5C00',
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         email: {
            email: "Укажите ваш e-mail", 
            required: "Укажите ваш e-mail"
         },
         name: "Как вас зовут?",
         phone: {
           required: "Укажите ваш телефон",
         }
       }
    });