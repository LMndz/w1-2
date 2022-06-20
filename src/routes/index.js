const {Router } = require('express');
const { reject } = require('underscore');
const router = Router();
const _ = require('underscore');
const datos = require('../facturas');

console.log(datos);

router.get('/', (req, res) => {
  return res.json(datos);
});

router.get('/:ci',  (req, res) => {
    const {ci} = req.params;
    try{
       _.each(datos, (dato, i) => {
        res.json(datos.filter(dato => dato.client.ci == ci));
        
        }
       )
    }
  
  catch (e) {
      // Don't do anything here
  }
  
});

router.post('/', (req, res) => {
    {
        const id = datos.length + 1;
        const newDato = {id, ...req.body};
        datos.push(newDato);
        return res.json(datos);
    }
});

module.exports = router;




//Fetch
/*
fetch('https://nicolepract1.herokuapp.com/'
        ).then( response => response.json())
        .then( data => console.log(data));
*/


//Async/await axios
 /*
 async function getUser() {
  try {
    const response = await axios.get('https://nicolepract1.herokuapp.com/');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
*/