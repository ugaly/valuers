import API from "../api";


export default class AuthService{
    static login(payload){
        return API.ax.post('auth/login',payload).catch(e=>console.log(e))
    }

    static getBilling(){
        return API.ax.get('billing/list/').catch(e=>console.log(e))
    }

    static setBilling(data){
        return API.ax.post('billing/create/bill',data).catch(e=>console.log(e))
    }

    static getIndividual(){
        return API.ax.get('registration/read/list/individual').catch(e=>console.log(e))
    }

    static getCompany(){
        return API.ax.get('registration/read/list/companies').catch(e=>console.log(e))
    }

    



   
   
   
   
}