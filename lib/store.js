const uniqid = require('uniqid');
console.log(uniqid());

module.exports = class Store{
    
    constructor(){
        this.store = [];
        // this.name = name;
        // this.type = type;
        // this._id = require('uniqid');
        // console.log(uniqid());
    }
    save(object){
        // this.name = name;
        // this.type = type;
        object._id = uniqid();
        this.store.push(object);
        return object;
    }

    getId(id){
        return this.store.find(obj =>{
            if(obj._id === id) return obj;
            else return null ;
        });
    }

    //     if(this.id === id){
    //         return this;
    //     } 
    //     else {
    //         return null;
    //     }
    // }
    getAll(){
        return this.store.slice(); 
    }
    remove(id){

    }


};//end store class

 




