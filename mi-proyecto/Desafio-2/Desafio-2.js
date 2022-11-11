
const {promises: fs} = require('fs')
class Contenedor {
    constructor (ruta){
        this.ruta = ruta
    }
    async save(producto){
      let data = null
      try {
      const data = await fs.promises.readFile ('./Productos.txt', 'utf-8')
      } catch (error){
        return error
      }

      let id = 0
      let dataObj = null
      if (data.length == 0){
        id = 1
        //fs.writeFileSync ('./Productos.txt', JSON.stringify({id, title, price}))
        //console.log ("agregue un objeto nuevo porque no habia nada")
      }else{
        let dataObj = JSON.parse (data)
         id = dataObj[dataObj.length - 1].id +1
        //fs.appendFileSync ('./Productos.txt', JSON.stringify({id, title, price}))
        //console.log ("ya tenia algo, agreue un porducot nuevo")
      }
  
      const newObjt = {id: id, ...producto}

      //push a dataObj

      //try
      fs.writeFileSync ('./Productos.txt', JSON.stringify(newObjt, null, 2))
     //catch

    } 
}    