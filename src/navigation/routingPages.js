// const puppeteer = require('puppeteer')


// const routingPages = async (section, pageNomber) =>{

// const browser = await puppeteer.launch({waitUntil: 'networkidle0'});
//     const page = await browser.newPage();

//           await page.goto(`${section.path}/page/${pageNomber}/`);
//           let datas = section.data
// console.warn('datas before evaluate--->', datas)
// process.setMaxListeners(Infinity)


//         const thisdata = await page.evaluate( ( {datas} ) =>{
//           const $products = document.querySelectorAll(datas.productCardClass)
//           const $pagination = document.querySelectorAll(datas.paginationClass)
//           const $paginationArray = Object.keys($pagination)
//       //    const $paginationArray = $pagination ? $pagination.replace("{","[").replace("}", "]") : []
//            const $resultPages = Number($paginationArray[$paginationArray.length - 1])
//      console.warn('DATAS evaluate --->', datas)
//               const data = []
//           $products.forEach(($product)=>{
//                   data.push({
//                     id:$product.querySelector(datas.idClass) ? $product.querySelector(datas.idClass).getAttribute("href") : '',
//                     product_name:$product.querySelector(datas.product_nameClass).textContent,
//                     image:$product.querySelector(datas.imageClass) ? $product.querySelector(datas.imageClass).getAttribute("src") : '',
//                     category:$product.querySelector(datas.categoryClass).textContent.replace("\n\t\t\t", "").replace("\t\t", ""),
//                     price:$product.querySelector(datas.priceClass).textContent,
//                   })
//               })
//             return{
//                 products:data.concat({pagination:$paginationArray.length ? JSON.stringify($paginationArray) : ["1"]}),
//                 totalPages:$resultPages
//               }
//           }, {datas})
//       //     const issueSrcs = await page.evaluate(() => {
//       //       const srcs = Array.from(
//       //         document.querySelectorAll(".attachment-woocommerce_thumbnail")
//       //       ).map((image) => image.getAttribute("src"));
//       //       return srcs;
//       // });
//         if(thisdata.products.length){
//             console.log('DATAAAAA xd--->', thisdata)
//                 return thisdata 
//             }
//       }   
    
//  module.exports = {
//     routingPages
//  }