const template = document.createElement('template')
template.innerHTML = `
<form autocomplete="off">
    <label for="text-input">The Todo</label>
    <input id="text-input" type="text" maxlength="75">
    <div>
        <span>Pick a color</span>
        <button id="red" class="color-button" value="#721817" type="button"></button>
        <button id="blue" class="color-button" value="#2b4162" type="button"></button>
        <button id="yellow" class="color-button" value="#fa9f42" type="button"></button>
     </div>
    <button id="submit" type="submit"><span>Submit Todo</span></button>
</form>
`

export default template
