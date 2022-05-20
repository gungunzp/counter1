document.addEventListener("DOMContentLoaded", function () {
    const elems = {
        declined: document.getElementById('declined'),
        answered: document.getElementById('answered'),
        heared: document.getElementById('heared'),
        total: document.getElementById('total'),
    };

    const minusBtnSelector = 'button:first-of-type';
    const plusBtnSelector = 'button:last-of-type';

    const data = {
        declined: 0,
        answered: 0,
        heared: 0,
        total: 0,
    }

    const update = (key, value) => {
        data[key] = +value;
        elems[key].querySelector('span').innerHTML = value;
        localStorage.setItem(key, value);
    }

    const updateCounter = (param, updateValue) => () => {
        // check for non sub-zero values
        if (!(!data[param] && updateValue < 0)) {
            update(param, data[param] + updateValue);
            update('total', data.total + updateValue);
        }
    }

    // initialization
    for (let prop in data) {
        update(prop, localStorage.getItem(prop) || data[prop]);

        // adding on click handlers for update buttons
        if (prop !== 'total') {
            elems[prop].querySelector(minusBtnSelector).onclick = updateCounter(prop, -1);
            elems[prop].querySelector(plusBtnSelector).onclick = updateCounter(prop, 1);
        }
    }

    // reset
    document.getElementById('reset').addEventListener('click', () => {
        if (!!data.total && window.confirm('Ви впевнені, що хочете видалити всі дані?')) {
            for (let prop in data) {
                update(prop, 0);
                // localStorage.clear();
            }
        }
    });

    // share
    document.getElementById('share').onclick = () => console.table(data);
});

