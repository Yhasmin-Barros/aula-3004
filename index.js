const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (request, response) => {
    //response.send('Testando!!!');
    response.render('home', {nome : "Yhasmin"});
});


app.get('/tabuada/:numero', (request, response) => {
    let resultado = [];
    const numero = request.params ['numero']; //params = número do parametro, requisição(request) recebe "numero", "/" é o parametro
    //  que recebe//

    for (let cont = 1; cont<11; cont++){
        //resultado.push(cont * 5);
        resultado.push(cont * numero);
    }
    response.render('tabuada', {valores : resultado}); //valores: -cada propriedade que eu passar para ele vira valores//
    //npm install é para garantir que está tudo ok//
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000')
})