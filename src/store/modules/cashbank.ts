import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'
import axios from 'axios'; 
import { headers } from '@/config/headerService'
import { pasreToFormData } from '@/common/formData'
import { handleResponse} from '@/config/hadleResponse'
import { PAYMONEY, RECEIVEMONEY } from '@/config/api'

interface SubmitPayMoney {
  pay_from: string;
  total_amount: string;
  pay: string;
  transaction_date: string;
  transaction_no: string;
  payment_for_account: string;
  description: string;
  amount: string;
  payment_for_account_two: string;
  description_two: string;
  total: string;
  balence_due: string;
  memo: string;
  attechment: string;
  sub_total: string;
  total_paid: string;
  total_remain: string;
}

interface SubmitReceiveMoney {
  total: string;
  data_deposit: string;
  data_receive: string;
  data_payer: string;
  total_amount: string;
  transaction_date: string;
  transaction_no: string;
  description: string;
  amount: string;
  memo: string;
  attechment: string;
}

interface Data {
  data: Object
}

@Module({
  namespaced: true, 
  name: 'paymoney',
  store,
  dynamic: true
})

class CashBank extends VuexModule {
  data: Data | null = null

  @Mutation
  setData(data: Data) {
    this.data = data
  }

  @Action({commit: 'setData'})
  async dataPayMoney(submitPayMoney: SubmitPayMoney) {

    const data = pasreToFormData(submitPayMoney)

    return new Promise((resolve, reject) => {
      axios
      .post(PAYMONEY, data, headers)
      .then(response => {
        resolve(response.data.token)
      })
      .catch(error => {
        reject(error)
        const result = handleResponse(error.response)
        if (result.statusLogout){
          store.dispatch('destroyToken')
        }
      })
    })
  }

  @Action({commit: 'setData'})
  async dataReceiveMoney(submitReceiveMoney: SubmitReceiveMoney) {

    const data = pasreToFormData(submitReceiveMoney)

    return new Promise((resolve, reject) => {
      axios
      .post(RECEIVEMONEY, data, headers)
      .then(response => {
        resolve(response.data.token)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}

export default getModule(CashBank);
