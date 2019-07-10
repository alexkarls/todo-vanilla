const template = document.createElement('template')
template.innerHTML = `
<style>
#outer-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    height: 50px;
    font-family: 'Helvetica', 'Arial', sans-serif;
}

#color {
    display: inline-block;;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    background: #000; /* Set by JavaScript */
}

#inner-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 90%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #000;
}

#inner-container * {
    display: inline-block;
    margin: 0;
    padding: 0;
}

#inner-container p {
    width: 80%;
    margin: 10px;
    font-size: 1.2rem;
    word-break: break-word;
}

#inner-container button {
    width: 20%;
    height: 100%;
    border: none;
    border-left: 1px solid #000;
    background: #0b6e4f;
}

#inner-container button span {
    font-size: 2rem;
    color: #fff;
    transition-duration: 1s;
}

#inner-container button:hover span {
    font-size: 1.6rem;
    color: #000;
}

/*
Media Queries
Supports around 75 length in a Todo with min-width set to 300px...
*/

@media screen and (max-width: 1000px) {
  #outer-container {
    height: 75px;
  }
}

@media screen and (max-width: 800px) {
  #outer-container {
    height: 100px;
  }
}

@media screen and (max-width: 600px) {
  #outer-container {
    height: 150px;
  }
}
</style>
`

export default template
