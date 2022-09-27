import { Form } from "./components"

const Shotstack = {
    render: (container: Element) => new Form({ target: container })
}

let element = document.querySelector("#shotstack-form-field")
element && Shotstack.render(element)

export default Shotstack