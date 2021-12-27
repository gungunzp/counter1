document.addEventListener("DOMContentLoaded", function () {
    const elems = {
        heared: document.querySelector('#heared'),
        answered: document.querySelector('#answered'),
        declined: document.querySelector('#declined'),
    };
    const totalEl = document.querySelector('#total');

    const minusBtnSelector = 'button:first-of-type';
    const plusBtnSelector = 'button:last-of-type';
   
    const data = {};

    const update = (param, updateValue) => () => {
        // check for non sub-zero (fatality) values
        if (!(!data[param] && updateValue < 0)) {
            data[param] += updateValue;

            elems[param].querySelector('span').innerHTML = data[param];

            totalEl.innerHTML = data.heared + data.answered + data.declined;
        }
    }

    for (let prop in elems) {
        // filling data obj with corresponding values
        data[prop] = Number(elems[prop].querySelector('span').innerHTML);

        // adding on click handlers
        elems[prop].querySelector(minusBtnSelector).addEventListener('click', update(prop, -1));
        elems[prop].querySelector(plusBtnSelector).addEventListener('click', update(prop, 1));
    }
});

