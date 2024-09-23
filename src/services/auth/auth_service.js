import API from "../api";


export default class AuthService {
    static login(payload) {
        return API.ax.post('auth/login', payload).catch(e => console.log(e))
    }


    //--------------------Billing-------------------------------------
    static getBilling() {
        return API.ax.get('billing/list/').catch(e => console.log(e))
    }

    static setBilling(data) {
        return API.ax.post('billing/create/bill', data).catch(e => console.log(e))
    }

    static cancelBill(data) {
        return API.ax.post('billing/cancel/bill', data).catch(e => console.log(e))
    }

    static getBillPayment(bill_id) {
        return API.ax.get(`billing/${bill_id}/payments`).catch(e => console.log(e))
    }

    static getReceipt(bill_id) {
        return API.ax.get(`documents/generate/receipt/${bill_id}`).catch(e => console.log(e))
    }


    static getBillReconciliation() {
        return API.ax.get('billing/list/recon').catch(e => console.log(e))
    }

    static getParticulars() {
        return API.ax.get('billing/list/particulars').catch(e => console.log(e))
    }





    //----------------------------Registration------------------------
    // static getCompany(page, pageSize) {
    //     return API.ax.get(`registration/read/list/companies?page=${page}&pageSize=${pageSize}`)
    //       .catch(e => console.log(e));
    //   }


    static getCompany(page, pageSize) {
        return API.ax.get(`registration/read/list/companies`)
          .catch(e => console.log(e));
      }
      

    // static getIndividual() {
    //     return API.ax.get('registration/read/list/individual').catch(e => console.log(e))
    // }

    static getIndividual(pageNumber, pageSize) {
        return API.ax.get(`registration/read/list/individual?page=${pageNumber}&size=${pageSize}`)
          .catch(e => console.error("API error:", e));
      }
      

    static getRegistrationInfo(id) {
        return API.ax.get(`registration/read/info?individualId=${id}`).catch(e => console.log(e))
    }


    static getExamResults(id) {
        return API.ax.get(`registration/read/exams/results?individualId=${id}`).catch(e => console.log(e))
    }

    static getAcademicResultsInfo(id) {
        return API.ax.get(`registration/read/education/level?individualId=${id}`).catch(e => console.log(e))
    }

    static getCpp(id) {
        return API.ax.get(`registration/read/registration/cpp?individualId=${id}`).catch(e => console.log(e))

    }




    //---------------------------------Bill setup----------------------------




    static getSuject(id) {
        return API.ax.get(`setups/read/list/subjects`).catch(e => console.log(e))
    }

    static getCppSetup(id) {
        return API.ax.get(`setups/read/list/cpp`).catch(e => console.log(e))
    }

    static getRegCategory(id) {
        return API.ax.get(`setups/read/list/registration/categories`).catch(e => console.log(e))

    }






}