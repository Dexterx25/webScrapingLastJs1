const puppeteer = require('puppeteer')
const _ = require('lodash'); 
const {extractProducts} = require('./extracting')
//const {pool} = require('./db')

let options = {
    headless:false,
    slowMo:300,
 defaultViewport:null
}

 const getDataProducts = async (section) =>{
    //   await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
  //   await page.type('#signup-zipcode', '33172')
 //await page.waitForSelector('#signup-zipcode')

async  function routingPages () {
  const browser = await puppeteer.launch(options);
    const page = await browser.newPage();   

    await page.setDefaultNavigationTimeout(0)
    await page.goto(`${section.path}`, { waitUntil: 'load', timeout: 0 });
  process.setMaxListeners(Infinity)
await page.waitForSelector('#banner')
await page.click('#banner')
//await page.click('.arrow-fill')
const selector = await page.$('.cont-title')
await selector.hover();
await page.click('#nav-bar-delivery-type-express-BAR')

//const  selectorCategories =  await page.$('#department-menu-department-1')
//await selectorCategories.hover()
//await selector.click()
//await page.click('.tooltip-ftd')
// await page.click('.btn-link')
// await page.select('#store-departamentos', 'Barranquilla')
// await page.select('#store-municipios', 'zona70')
// await page.click('.btn-secondary')
// await page.click('.btn-outline-secondary')

//await page.click('.header-categories')
const dataNavigation = await page.evaluate( ({section}) =>{
// const nav = document.querySelector('.nav-bar-country-redirect')
// nav.scrollBy(0, nav.clientHeight) 
    //await page.waitForSelector(thisItem.fatherSectionClass);
    const $sections = document.querySelectorAll('a.text-sub-category')
    const data = []
    $sections.forEach(($section) => {
      data.push({
        path:$section ? $section.getAttribute('href') : '',
        data:section.data,
        homeUrl:section.path   
        })   
    });
    return{
      sections:data,
    }
  },{section})
   console.warn('this is the sections xddd--->', dataNavigation)
//  for (let i = 0; i < dataNavigation.sections.length; i++) {
//      const element = dataNavigation.sections[i]; 
//          await extractProducts(page,element)
//  }
await page.goto('https://www.farmatodo.com.co/categorias/salud-y-medicamentos/alivio-del-dolor/dolor-abdominal-y-colico')

  ///istacart-->
  //await page.type('#signup-zipcode', '33172')
  //await page.click('.rcp-form-submit-button')
  //await page.type('#email-48202', 'ddumpplin@gmail.com')
 // await page.type('form.rcp-login-form > input.', 'Pjr11097')
}
 routingPages()


}


const site = 
    {path:'https://www.tudrogueriavirtual.com',
        navigationType:'navbar',
        pageName:'FarmaTodo',
        data:{
            productCardClass:'.card-unique',
            paginationClass:'.btn-page',
            idClass:'.image-container > a',
            product_nameClass:'div.info',
            imageClass:'picture.cont-img > img.image',
            categoryClass:'.product-cat',
            priceClass:'div.price',
            priceOfferClass:'span.value'
            },
    }
 getDataProducts(site)
