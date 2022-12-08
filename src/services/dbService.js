import httpCommon from "./httpCommon";
class dbService{
    registerUser(data){
        return httpCommon.post('/register', data);
    }
    loginUser(data){
        return httpCommon.post('/login', data);
    }
    
}
export default new dbService();