const uniqid = require('uniqid');
console.log(uniqid());

module.exports = class Store{
    
    constructor(){
        this.store = [];

    }
    save(object){

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


    getAll(){
        return this.store.slice(); 
    }
    remove(id){
        
        for(let i = 0; i < this.store.length; i++) {
            if(this.store[i]._id === id) {
                this.store.splice(i, 1);
                return { removed:true };
            } else {
                return { removed:false };
            }
        
        }
    }


};//end store class

 




