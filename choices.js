document.addEventListener('DOMContentLoaded', function() {
    const selector = document.querySelector('.choices')

    const choices = new Choices(selector, {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices header_choices',
        },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const selector = document.querySelector('.choices-second')

    const choices = new Choices(selector, {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices header_choices',
        },
    });
});


