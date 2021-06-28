const puppeteer = require('puppeteer')
const _ = require('lodash'); 
const fs  = require('fs')
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const {sendProducts} = require('./submitProducts')
const config = require('../config')
//const {pool} = require('./db')

const getDataProducts = async (section) =>{
 //  console.warn('THIS IS THE SECTION TO GOOOO-->', `${section.homeUrl}${section.path}`)

 try{

 const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        executablePath: '/usr/local/bin/chromium',
        // args: [
        //     '--no-sandbox',
        // ],
        headless: false,
        timeout: 0
    });
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
   const InitialPage = section.pageName == 'CruzVerde' ? 0 : 1
async  function routingPages (pageNumber =  InitialPage) {
//console.warn('go to-->', `${section.homeUrl}${section.path}?start=${pageNumber * 12}`)
   if(section.pageName == 'FarmaVida'){
      await page.goto(`${section.path}/page/${pageNumber}/`,{
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    }
    
    await page.setDefaultNavigationTimeout(0);

  if(section.pageName == 'CruzVerde'){
    await page.goto(`${section.homeUrl}${section.path}?start=${pageNumber * 12}`,{
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0
  });
    }

  if(section.pageName == 'FarmaTodo'){
      await page.goto(`${section.homeUrl}${section.path}`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
  }
  if(section.pageName == 'Olimpica'){
    console.warn(`${section.homeUrl}${section.path}`)
    await page.goto(`${section.homeUrl}${section.path}`, {
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0
  });
}

  if(section.pageName == 'LaRebaja'){
      await page.goto(`${section.homeUrl}${section.path}`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
  }

  if(section.pageName == 'tuDrogueriaVirtual'){
    console.warn('entra por tu drogueria Virtual')
    await page.setDefaultNavigationTimeout(0)
      await page.goto(`${section.homeUrl}${section.path}`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
  } 
  process.setMaxListeners(Infinity)
  // process.on("unhandledRejection", (reason, p) => {
  //   console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
  //   browser.close();
  // });
try{
  let datas = section.data
   let arrayReturn = []

        let thisdata = await page.evaluate( ( {datas, pageNumber, section} ) =>{
          const $products = document.querySelectorAll(datas.productCardClass)
          const $pagination = document.querySelectorAll(datas.paginationClass)
         // const msg = document.querySelector('.')
          const $paginationArray = Object.keys($pagination)
        
           const $resultPages = Number($paginationArray[$paginationArray.length - 1])
           //const $resultPagesUltimate = 
              const data = []
              
          $products.length && $products.forEach(($product)=>{
                  data.push({
                    id:$product.querySelector(datas.product_nameClass) == null ? '' : `${$product.querySelector(datas.product_nameClass).textContent.trim()+"__"+section.pageName}`,
                    product_name:$product.querySelector(datas.product_nameClass) == null ? '' : $product.querySelector(datas.product_nameClass).textContent.trim(),
                    image:$product.querySelector(datas.imageClass) ? section.pageName == 'LaRebaja'   ? section.homeUrl+$product.querySelector(datas.imageClass).getAttribute("src").trim() : $product.querySelector(datas.imageClass).getAttribute("src").trim() : '',
                    category:$product.querySelector(datas.categoryClass) ?  $product.querySelector(datas.categoryClass).textContent.replace("\n\t\t\t", "").replace("\t\t", "") : section.pageName == 'CruzVerde' || section.pageName == 'tuDrogueriaVirtual' ? section.path : '',
                    price:$product.querySelector(datas.priceClass) == null ? '' :  $product.querySelector(datas.priceClass).textContent.trim(),
                    price_offer:$product.querySelector(datas.priceOfferClass) == null ? '' :  $product.querySelector(datas.priceOfferClass).textContent.trim().trim(),
                    pageName:section.pageName,
                    tokenVendor:section.tokenVendor
                  })
                })
            return{
                products:!data || undefined ? [] : data,
                totalPages:!$resultPages ? 1 : $resultPages,
                actualPage:pageNumber,
              }
          }, {datas, pageNumber, section}) 
       //  console.warn('THIS DATA--->', thisdata)
   // arrayReturn.push(...thisdata.products)

    if(thisdata.products !== undefined && thisdata.products.length){
         
         await sendProducts(thisdata.products)
   }
    if(thisdata.actualPage <= thisdata.totalPages && section.pageName !== 'Olimpica'){
      await routingPages(pageNumber + 1)
   }

}catch(error){
console.warn('Este es el Error--->', error)
return false;
}
  //console.warn('how-->', arrayReturn.length)
}
routingPages()
 }catch(e){
    console.warn('this error-->', e)
    return e
 }

}

module.exports = {
  getDataProducts
}
