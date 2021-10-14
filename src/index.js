import Elm from './Main.elm';

console.log(Elm);

console.log('Elm and Tailwind with Snowpack');

const app = Elm.Main.init({
    node: document.getElementById('app'),
  });