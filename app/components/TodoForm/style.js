const template = document.createElement('template')
template.innerHTML = `
<style>
    form {
        display: block;
        width: 100%;
        text-align: center;
    }

    form * {
        font-family: 'Helvetica', 'Arial', sans-serif;
    }

    label, span {
        display: block;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    input[type="text"] {
        display: block;
        width: 100%;
        height: 50px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    .color-button {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 10px;
        border-radius: 50%;
        border: none;
    }

    .color-button:hover {
        transform: scale(1.2);
    }

    .selected {
        transform: scale(1.2);
    }

    div {
       display: inline-block;
       width: 40%;
       min-width: 300px;
    }

    button[type="submit"] {
        display: inline;
        width: 50%;
        min-width: 300px;
        height: 100px;
        background: #222;
        border: 2px solid #fff;
    }

    button[type="submit"] span {
        font-size: 1.5rem;
        color: #fff;
        transition-duration: 1s;
    }

    button[type="submit"]:hover span {
        letter-spacing: 5px;
    }

    #red {
        background: #721817;
    }

    #blue {
        background: #2b4162;
    }

    #yellow {
        background: #fa9f42;
    }
</style>
`

export default template
