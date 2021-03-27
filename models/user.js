const DBObject = require("./dbobject");
module.exports = class User extends DBObject{
    #id;
    #email;
    constructor(_id, _fullName, _em, _password){
        try {
            super();
            this.id = _id; //this is a call to setter for id
            this.fullName = _fullName;
            this.email = _em; //this is a call to setter
            this.password = _password;
        } catch (error) {
            throw error;
        }
        
    }
    get email(){
        return this.#email;
    }

    set email(em){
        if(em.split("@").length === 2){
            this.#email = em;
        }else{
            throw "Invalid Email";
        }
    }

    get id(){
        return this.#id;
    }

    set id(_id){
        if(typeof _id === "number" && _id > 0){
            this.#id = _id;
        }else{
            throw "Invalid Id";
        }
    }
     

}