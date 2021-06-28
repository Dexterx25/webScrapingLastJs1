const puppeteer = require('puppeteer')
const {sites}  = require('./sites')
const config = require('./config')
const axios = require('axios')
const {exploringPages} = require('./src/navigation/index')
require('dotenv').config();
 
const signIn = async (storeVendor) =>{
    // console.warn('sotre datares--->', storeVendor)
const {data} = await axios.post(`${config.api}/wp-json/jwt-auth/v1/token/`,
   {
    "username":storeVendor.user,
    "password":storeVendor.password
   }  
)
console.warn('this is the data VenderUser-->', data)
    return data.token
 }
const routeLogin = async (pageName) =>{
   // console.warn('this is the config--->', config)
        switch (pageName) {
            case 'FarmaVida':
             return signIn(config.farmavida)                
                break;
            case 'CruzVerde':
             return signIn(config.cruzVerde)
                break;
            case 'tuDrogueriaVirtual':
             return signIn(config.tuDrogueriaVirtual)
                break;
            case 'LaRebaja':
             return signIn(config.laReabaja)
                break;
            case 'Olimpica':
             return signIn(config.Olimpica)
            default:
                break;
        }
}
const startScraping = async (datas) =>{
 let dataAgruped = []
     for (let i = 0; i < datas.length; i++) {
        let pageItem = datas[i]; 
        pageItem['token'] = await routeLogin(pageItem.pageName)

        pageItem.token !== ''  ? await  exploringPages(pageItem) : await routeLogin(pageItem.pageName);
        
         dataAgruped.push(pageItem)
     }
      //await exploringPages(datas)
}

startScraping(sites)