import { h, app } from 'hyperapp'

const buttonClassNames =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
const counterClassName =
  'inline-block bg-gray-400 text-white font-bold py-2 px-4 rounded'

app({
  init: 0,
  view: (state) =>
    h('main', { class: 'space-x-4' }, [
      h('span', { class: counterClassName }, state),
      h(
        'button',
        { class: buttonClassNames, onClick: (state) => state - 1 },
        '-'
      ),
      h(
        'button',
        { class: buttonClassNames, onClick: (state) => state + 1 },
        '+'
      ),
    ]),
  node: document.getElementById('app'),
})
