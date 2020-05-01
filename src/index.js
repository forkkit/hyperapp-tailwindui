import { h, app } from "hyperapp"

app({
  init: 0,
  view: state =>
    h("main", {class: "flex space-x-4"}, [
      h("span", {class: "inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded"}, state),
      h("button", { class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: state => state - 1 }, "-"),
      h("button", { class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: state => state + 1 }, "+")
    ]),
  node: document.getElementById("app")
})