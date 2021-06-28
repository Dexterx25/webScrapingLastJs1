const FarmaVida = 'https://drogueriasfarmavida.com'
//const FarmaTodo = 'https://www.farmatodo.com.co'
const CruzVerde = 'https://www.cruzverde.com.co'
const tuDrogueriaVirtual = 'https://www.tudrogueriavirtual.com'
const LaRebaja = 'https://www.larebajavirtual.com'
const Caffan = 'https://www.drogueriascafam.com.co'
const Olimpica = 'https://www.olimpica.com'
module.exports = {
sites:[
          //  {homeUrl:FarmaVida,
          // navigationType:'navbar',
          // pageName:'FarmaVida',
          // fatherSectionClass:'.menu-item > a',
          //  data:{
          //     productCardClass:'.product-type-simple',
          //      paginationClass:'.page-number',
          //      idClass:'.image-fade_in_back a',
          //      product_nameClass:'.product-title',
          //      imageClass:'.attachment-woocommerce_thumbnail',
          //      categoryClass:'.product-cat',
          //      priceClass:'.woocommerce-Price-amount',
          //      priceOfferClass:'span.price > ins > span.amount'
          //      },
          //  actions:null
          //  },

              // {homeUrl:CruzVerde,
              //   navigationType:'buttonSection',
              //   pageName:'CruzVerde',
              //   fatherSectionClass:'div.dropdown-item > a',
              //   data:{
              //   productCardClass:'div.product-wrapper',
              //       paginationClass:'div.pagination > button',
              //       idClass:'.image-container > a',
              //       product_nameClass:'a.link',
              //       imageClass:'img.tile-image',
              //       categoryClass:'div.maincontent',
              //       priceClass:'span.price-original > span',
              //       priceOfferClass:'span.value'
              //       }
              //  }
                {homeUrl:LaRebaja,
                 pageName:'LaRebaja',
                  fatherSectionClass:'li.itemSubMenuCategory > ul > li > a',
                 data:{
                       productCardClass:'.productCard',
                        paginationClass:'.btn-page',
                      idClass:'div.img-list-products > a',
                      product_nameClass:'div.nameProduct > a',
                      imageClass:'div.img-list-products > a > figure > img',
                      categoryClass:'li.active',
                      priceClass:'div.priceFinal',
                      priceOfferClass:'span.value'
                      },
                 },
 	            {homeUrl:tuDrogueriaVirtual,
                 navigationType:'buttonSection',
                 pageName:'tuDrogueriaVirtual',
                 fatherSectionClass:'.item-sub > a',
                data:{
                    productCardClass:'div.productVitrine',
                     paginationClass:'.btn-page',
                    idClass:'a.productImage',
                     product_nameClass:'p.productName',
                     imageClass:'a.productImage > img',
                     categoryClass:'span.itemprop',
                     priceClass:'p.bestPrice',
                     priceOfferClass:'p.priceofer'
                     },
                }
        //        {homeUrl:Olimpica,
        //         navigationType:'buttonSection',
        //         pageName:'Olimpica',
        //         fatherSectionClass:'.item-sub > a',
        //        data:{
        //            productCardClass:'.vtex-product-summary-2-x-container',
        //             paginationClass:'div.vtex-search-result-3-x-totalProducts--layout > span',
        //            idClass:'a.productImage',
        //             product_nameClass:'div > h1.vtex-product-summary-2-x-productNameContainer',
        //             imageClass:'img.vtex-product-summary-2-x-imageNormal',
        //             categoryClass:'span.itemprop',
        //             priceClass:'div.olimpica-dinamic-flags-0-x-currencyContainer',
        //             priceOfferClass:'p.priceofer'
        //             },
        //        }

    ]    
}
