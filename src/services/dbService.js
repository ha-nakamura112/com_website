import httpCommon from "./httpCommon";
class dbService{
    registerUser(data){
        return httpCommon.post('/register', data);
    }

    loginUser(data){
        return httpCommon.post('/login', data);
    }

    getData(){
        return httpCommon.post('/userdata');
    }

    change(test,test2){
        let formdata = new FormData();
        formdata.append("id",test);
        formdata.append("table",test2);
        return httpCommon.post('/change',formdata);
    }

    getPosts(){
        let formdata = new FormData();
        formdata.append("table","community_tb");
        return httpCommon.post('/postdata',formdata);
    }

    getPosts2(){
        let formdata = new FormData();
        formdata.append("table","market_td");
        return httpCommon.post('/postdata',formdata);
    }

    getPosts3(){
        let formdata = new FormData();
        formdata.append("table","job_tb");
        return httpCommon.post('/postdata',formdata);
    }

    block(key,action){
        let formdata = new FormData();
        formdata.append("key",key);
        formdata.append("request",action);
        return httpCommon.post('/block',formdata);
    }
    
}
export default new dbService();