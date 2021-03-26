const DBObject = require("./dbobject");
module.exports = class User extends DBObject{
    // #id = 1;
    constructor(_id, _fullName, _email, _password){
        super();
        this.id = _id;
        this.fullName = _fullName;
        this.email = _email;
        this.password = _password;
    }

     

}