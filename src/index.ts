import * as _ from 'lodash';
import './assets/style/index.css';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['안녕', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());