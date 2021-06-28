const puppeteer = require('puppeteer')
const {exploringSections} = require('./routing')


const RunActions = async (page, thePage) =>{
    if(thePage.pageName == 'CruzVerde'){

try{
       await page.click('.btn-link')
       await page.waitForSelector('#store-departamentos')
       await page.select('#store-departamentos', 'Barranquilla')
       await page.select('#store-municipios', 'zona70')
       await page.click('.btn-secondary')
       await page.waitForSelector('.btn-outline-secondary')
       await page.click('.btn-outline-secondary')
}catch(err){
console.warn("este es el error al navegar---->", err)
}

    }
    // if(thePage.pageName == 'Olimpica'){

    //   try{
    //          await page.click('.vtex-search-result-3-x-filterTitle')
             
            
    //   }catch(err){
    //   console.warn("este es el error al navegar---->", err)
    //   }
      
    //       }
    // if(thePage.pageName == 'FarmaTodo'){
    //   await page.waitForSelector('#banner')
    //   await page.click('#banner')
    //   const selector = await page.$('.cont-title')
    //   await selector.hover();
    //   await page.click('#nav-bar-delivery-type-express-BAR')
    // }

    // if(thePage.pageName == 'LaRebaja'){
 
    // }

     if(thePage.pageName == 'tuDrogueriaVirtual'){
         await page.select('#ship-state', 'Atlántico')
         await page.select('#ship-city', 'Barranquilla___08001')
         await page.click('a.nextBtn')
         await page.waitForSelector('.btnFinalizar')
        
     }
}

const exploringPages = async(thePage) =>{
  console.warn('this is the page...>-', thePage)
let myPage = thePage
  const browser = await puppeteer.launch(
    thePage.pageName == 'FarmaTodo' || 'tuDrogueriaVirtual' ?  
    {
    //headless:false,
    slowMo:300,
    defaultViewport:null
    }
  :
    {
   // headless:false,
    slowMo:300,
    }
  )
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0);

    await page.goto(thePage.homeUrl, { waitUntil: 'load', timeout: 0 })
  process.setMaxListeners(Infinity)
//actions--->
await RunActions(page, thePage)
try{
    let thisItem = thePage
      const dataNavigation = await page.evaluate( ({thisItem}) =>{
        //await page.waitForSelector(thisItem.fatherSectionClass);
        thisItem.pageName == 'tuDrogueriaVirtual' ? document.querySelector('.btnFinalizar').click() : null
        const $sections = document.querySelectorAll(thisItem.fatherSectionClass)
        const data = []
        $sections && $sections.forEach(($section) => {
          data.push({
            path:$section ? $section.getAttribute('href') : '',
            data:thisItem.data,
            pageName:thisItem.pageName,
            homeUrl:thisItem.homeUrl,
            tokenVendor:thisItem.token
            })   
        });
        return{
          sections:
          thisItem.pageName == 'Olimpica' ? 
           [{
            path:'/medicamentos',
            data:thisItem.data,
            pageName:thisItem.pageName,
            homeUrl:thisItem.homeUrl,
            tokenVendor:thisItem.token
            }]
          :data
        }
      }, {thisItem})
       console.warn('this is the sections xddd--->', dataNavigation)
      await  exploringSections(dataNavigation.sections)
      .catch((e)=>console.warn('error-->',e))
  }catch(error){
console.warn('Este es el error al sacar navegacciones--->', error)
}
 
 // await browser.close()
}

module.exports = {
    exploringPages
}
