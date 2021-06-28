const config = require('../../webscrapingjs/config')
const axios = require('axios');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const sendProducts = async(datas) =>{
      
  let dataArray2 = []
 dataArray2 = datas.reduce((acc, item)=>{
    if(dataArray2.findIndex(e => e.id == item.id) == -1){
        acc.push(item)
    }
    return acc
  },[])
  const insertion = async (array) =>{
   await array.forEach(async(product)=>{
  console.warn('product-->', product)
    if(config.vendor_uploud){
      const {pageName} = product
      let category = product.category
  
      console.log('vendor upload', product)
     await axios.post(`${config.api}/wp-json/wcfmmp/v1/products`,{
      name:product.product_name,
      regular_price:`${product.price.slice(1) * 1000}`,
      sale_price:product.price_offer !== '' ? `${product.price_offer.slice(1) * 1000}` : '',
      categories:[pageName == 'CruzVerde' 
      ? 18 : pageName == 'FarmaVida'
       ? 16 : pageName == 'LaRebaja'
        ? 20 : pageName == 'tuDrogueriaVirtual'
         ? 55 :
            '',  
          ///ofertas:
      category == '% ofertas_salud' || category == '/cyberdescuentos/medicamentos/' || category == '/cyberdescuentos/cuidado-del-bebe/' || category == '/cyberdescuentos/belleza/' || category == '/cyberdescuentos/belleza/' || category == '/cyberdescuentos/nutricion/' || category == '/cyberdescuentos/cuidado-personal/'  || category == '/cyberdescuentos/rehabilitacion-y-monitoreo/' || category == '/cyberdescuentos/alimentos/' || category == '/ofertas/ofertas-de-ahorro-imperdibles/' || category == '/ofertas/descuentos-del-mes/' || category == '% ofertas_bebé' || category == '% ofertas_cuidado' || category == 'OFERTAS' ? 52 : '', 
      //bebés
      category == '% ofertas_bebé' || category == '/cyberdescuentos/cuidado-del-bebe/' || category == '/bebe-y-mama/cuidado-de-la-mama/antiestrias' || category == '/bebe-y-mama/cuidado-de-la-mama/gestion-embarazo' || category == '/bebe-y-mama/cuidado-de-la-mama/faja-y-bragas' || category == '/bebe-y-mama/cuidado-de-la-mama/lactancia' || category == '/bebe-y-mama/cuidado-de-la-mama/senos'
      || category == '/bebe-y-mama/cuidado-de-la-mama/reafirmantes' || category == '/bebe-y-mama/cuidado-del-bebe/accesorios' || 
      category == '/bebe-y-mama/cuidado-del-bebe/cuidado-cara' || category == '/bebe-y-mama/cuidado-del-bebe/higiene-bebe' ||  category == '/bebe-y-mama/cuidado-del-bebe/higiene-nasal' || category == '/bebe-y-mama/cuidado-del-bebe/neceser-/-kits' || category == '/bebe-y-mama/cuidado-del-bebe/piel-atopica' ||
       category == '/bebe-y-mama/cuidado-del-bebe/primeros-dientes' || category == '/bebe-y-mama/cuidado-del-bebe/pañales' || category == '/bebe-y-mama/cuidado-del-bebe/pañales' || category == '/bebe-y-mama/alimentacion-del-bebe/accesorios-alimentacion'
      || category == '/bebe-y-mama/alimentacion-del-bebe/papillas' || category == '/bebe-y-mama/alimentacion-del-bebe/complementos-alimenticios' ||
      category == '/bebe-y-mama/alimentacion-del-bebe/leches-infantiles' || category == '/bebe-y-mama/alimentacion-del-bebe/biberones' ||
      category == '/bebe-y-mama/alimentacion-del-bebe/tetinas' 
      || category == '/bebe-y-mama/alimentacion-del-bebe/vajillas-y-accesorios' 
      || category == '/bebe-y-mama/alimentacion-del-bebe/tarritos' 
      || category ==  '/bebe-y-mama/alimentacion-del-bebe/infusiones'
      || category == '/bebe-y-mama/alimentacion-del-bebe/zumos-y-galletas'
      || category == '/bebe-y-mama/accesorios-del-bebe/accesorios-de-baño' 
      || category == '/bebe-y-mama/accesorios-del-bebe/chupetes'
      || category == '/bebe-y-mama/accesorios-del-bebe/juguetes'
      || category == '/bebe-y-mama/accesorios-del-bebe/seguridad'
      || category == '/bebe-y-mama/accesorios-del-bebe/seguridad' 
      || category == '/bebe-y-mama/accesorios-del-bebe/seguridad'
      || category == '/bebe-y-mama/aparatos-electronicos/calientabiberones'
      || category == '/bebe-y-mama/aparatos-electronicos/esterilizadores'
      || category == '/bebe-y-mama/aparatos-electronicos/humidificadores'
      || category == '/bebe-y-mama/aparatos-electronicos/vigilabebes'
      || category ==  '/bebe-y-mama/infantil/piojos'
      || category == '/bebe-y-mama/infantil/botiquin'
      || category == '/bebe-y-mama/infantil/bucal-infantil'
      || category == '/bebe-y-mama/infantil/solares'
      || category == '/bebe-y-mama/infantil/higiene'
      || category == '/bebe-y-mama/infantil/nutricion-infantil'
      || category == '/bebe-y-mama/infantil/defensas'
       || category == 'Champú Bebé' || category == 'Niños' || category == '/cuidado-del-bebe/formula-infantil--/' || category == '/cuidado-del-bebe/cuidado-mama/' || category == '/cuidado-del-bebe/panal/' || category == '/cuidado-del-bebe/toallitas-y-panitos-humedos/' || category == '/cuidado-del-bebe/crema-antipanalitis/' || category == '/cuidado-del-bebe/aseo-y-limpieza-bebe/' || category == '/cuidado-del-bebe/alimentos-bebe/' || category == '/cuidado-del-bebe/accesorios-bebe/' || category == 'Cremas' || category == 'Accesorios de bebé' || category == 'Copitos' || category == 'CUIDADO DEL BEBÉ' ||  category == 'Alimento complementario infantes' ? 48 : '',
      //salud
      category == 'Cuidado capilar' || category == '/cosmetica/facial/acne'||
      category == '/cosmetica/facial/antiedad'
      || category == '/cyberdescuentos/cuidado-personal/'
      || category == '% ofertas_cuidado' 
      || category == '/cyberdescuentos/nutricion/'
      || category == '/higiene/corporal/accesorios'
      || category == '/higiene/corporal/depilacion'
      || category == '/higiene/corporal/desodorantes'
      || category == '/higiene/corporal/exfoliantes'
      || category == '/higiene/corporal/hidratacion'
      || category == '/higiene/corporal/gel-de-baño'
      || category == '/higiene/corporal/piel-atopica'
      || category == '/higiene/cabello/accesorios'
      || category == '/higiene/cabello/acondicionador'
      || category == '/higiene/cabello/anticaida'
      || category == '/higiene/cabello/champu'
      || category == '/higiene/cabello/mascarillas'
      || category == '/higiene/cabello/tintes'
      || category == '/higiene/cabello/solares'
      || category == '/higiene/manos-y-uñas/hidratacion'
      || category == '/higiene/manos-y-uñas/manicure'
      || category == '/higiene/manos-y-uñas/tratamiento'
      || category == '/higiene/manos-y-uñas/desinfeccion'
      ||category == '/cosmetica/facial/antimanchas'
      ||category == '/cosmetica/facial/exfoliantes'
      || category == '/cosmetica/facial/hidratacion'
      || category == '/cosmetica/facial/limpieza-facial'
      || category == '/cosmetica/facial/mascarillas'
      || category == '/cosmetica/facial/solares'
      || category == '/cosmetica/facial/antioxidante'
      || category == '/cosmetica/cosmetica-natural/ojos'
      || category == '/cosmetica/cosmetica-natural/facial'
      || category == '/cosmetica/cosmetica-natural/labial'
      || category == '/cosmetica/cosmetica-natural/corporal'
      || category == '/cosmetica/cosmetica-natural/cabello'
      || category == '/cosmetica/corporal/aceites'
      || category == '/cosmetica/corporal/anticeluliticos'
      || category == '/cosmetica/corporal/antiestrias'
      || category == '/cosmetica/corporal/cuello-y-escote'
      || category == '/cosmetica/corporal/hidratacion'
      || category == '/cosmetica/corporal/solares'
      || category == '/cosmetica/corporal/reafirmantes'
      || category == '/cosmetica/corporal/reductores'
      || category == '/cosmetica/manos-y-uñas/afeito'
      || category == '/cosmetica/manos-y-uñas/hidratacion'
      || category == '/cosmetica/manos-y-uñas/limpieza-facial'
      || category == '/cosmetica/manos-y-uñas/antiedad'
      || category == '/cosmetica/problemas-en-la-piel/rosacea'
      || category == '/cosmetica/hombre/hidratacion'
      || category == '/cosmetica/hombre/limpieza-facial'
      || category == 'Talcos y desodorantes de pie' || category == 'Alimentación y vida saludable' || category == 'Chanpú' || category == "Antiedad" || category == 'Antiacne' || category == 'Bloqueadores y bronceadores'   ?  53 : '',
      //belleza:
      category == 'BELLEZA' || category == '/belleza/marcas-masivas/' 
      || category == '/cyberdescuentos/belleza/'
      || category == '/cosmetica/hombre/antiedad'
      || category == '/cosmetica/ojos/contorno-de-ojos'
      || category == '/cosmetica/ojos/pestañas'
      || category == '/cosmetica/ojos/cejas'
      || category == '/cosmetica/ojos/maquijalle'
      || category == '/cosmetica/problemas-en-la-piel/piel-atopica'
      || category == '/cosmetica/problemas-en-la-piel/dermatitis'
      || category == '/cosmetica/problemas-en-la-piel/cicatrices'
      || category == '/cosmetica/labial/hidratacion'
      || category == '/cosmetica/labial/labiales'||
      category == '/belleza/maquillaje/' || category == '/belleza/fragancias/' || category == '/belleza/estuches/' || category == '/belleza/accesorios/' || category == 'Accesorios de belleza' || category == 'Bases y polvos' || category == 'Maquillaje' || category == '/belleza/dermocosmeticos-/' || category == '/belleza/marcas-masivas/' || category == '% ofertas_cuidado' || category == 'Chanpú' || category == 'Cremas corporales' ? 49 : '',
      //cuidado piel
      category == 'Bases y polvos' || category == 'Cremas corporales' || category == '/bienestar/cuidado-de-la-piel/' || 
       category == 'Antiacne' || category == '/rehabilitacion-y-monitoreo/hospitalario/'  || category == '/rehabilitacion-y-monitoreo/inyectologia/' || category == '/bienestar/complementos-nutricionales/' || category == '' || category == 'Bloqueadores y bronceadores' ? 50 : '',
      //medicamentos
     //cuidado personal-->
   category == 'CUIDADO PERSONAL' || category == '/nutricion/suplementos-dietarios/' || category == '/cuidado-personal/desodorantes/' || category == '/cuidado-personal/aseo-personal/' || category == '/cuidado-personal/proteccion-femenina/' 
   || category == '/cuidado-personal/lentes/' || category == '/cuidado-personal/jabones-de-tocador/' || category == '/cuidado-personal/jabones-de-tocador/' || category == '/cuidado-personal/cuidado-para-pies/' || category == '/cuidado-personal/cremas-corporales/' 
   || category == '/cuidado-personal/tintes/' || category == '/cuidado-personal/afeitada-y-depilacion/' || category == '/cuidado-personal/higiene-oral/' || category == '/cuidado-personal/cuidado-de-la-piel/' || category == '/cuidado-personal/cuidado-capilar/' || category == '/cuidado-personal/proteccion-adulto/' 
   || category == 'Limpieza personal' || category == '/rehabilitacion-y-monitoreo/autocuidado/' || category == '/bienestar/cuidado-de-la-piel/' ? 54 : '',
  //    category = 'SALUD Y MEDICAMENTOS' || 
   category == 'Salud estomacal' || 
   category == 'Cuidado de la gripa' ||
   category == 'Descongestionante' || 
   category == 'Dolor de garganta' || 
   //category == 'Niños' || 
   category == 'Resfriado y gripa' || 
   category == '/medicamentos/especializados/' ||
   category == '/medicamentos/salud-sexual/' ||
   category == '/medicamentos/gripa-y-tos-/' ||
   category == '/cyberdescuentos/medicamentos/'||
   category == '/medicamentos/dermatologicos-/' ||
   category == '/medicamentos/cardiovasculares/' ||
   category == '/medicamentos/metabolicos-/' ||
   category == '/medicamentos/analgesicos-/'||
   category == '/medicamentos/vitaminas-y-minerales/' ||
   category == '/medicamentos/sistema-nervioso/'||
   category == '/medicamentos/digestivos/' || 
   category == '/medicamentos/antiinfecciosos/' ||
   category == '/medicamentos/gastricos/' ||
   category == '/medicamentos/alergias/' ||
   category == '/medicamentos/oftalmologicos/' ||
   category == '/medicamentos/respiratorios/' ||
   category == '/medicamentos/organos-de-los-sentidos/'||
   category == '/medicamentos/cuidado-de-la-herida/'||
   category == '/medicamentos/sistema-urinario/'||
   category == '/medicamentos/material-medico-quirurgico/'||
   category == '/medicamentos/cuidado-oral--/' ||
   category == '/medicamentos/nutricion/' ||
   category == '/medicamentos/menopausia/' ||
   category == '/medicamentos/rehabilitacion-y-monitoreo/'||
   category == '/medicamentos/otologicos/'||
   category == '/medicamentos/otologicos/'||
   category == '/medicamentos/antiparasitarios-/'||
   category == '/medicamentos/sistema-inmunologico/' ||
   category == '/medicamentos/soluciones-esteriles--/' || 
   category == '/medicamentos/anestesicos-/'||
   category == '/medicamentos/sueno-y-relajacion/' ||
   category == '/medicamentos/terapia-endocrina/' ||
   category == '/medicamentos/vitaminas-y-minerales/'||
   category == '/medicamentos/sistema-nervioso/'||
   category == '/medicamentos/sustancia-pura/'||
   category == '/medicamentos/urologicos-/'||
   category == 'Tratamiento de la tos' || 
   category == 'Botiquín y primeros auxilios' || 
   category == 'Algodones' || 
   category == 'Antisépticos' || 
   category == 'Curitas y adhesivos' || 
   category == 'Gasas y esparadrapos' || 
   category == 'Jeringas y guantes' || 
   category == 'Analgesicos dolor' || 
   category == 'Analgesicos' || 
   category == 'Vitaminas - minerales - naturales' ||
    category == 'Salud visual' || 
    category == 'Analgesicos dolor' ||
    category == 'DROGA BLANCA' ||
    category == 'FORMULA MÉDICA RX' || 
    category =='Dermatológicos' ||
    category == 'Antimicóticos' || 
    category == 'Antipruriginosos' || 
    category =='Protectores dérmicos' || 
    category == 'Queratoliticos' ||
    category == 'Tratamiento de alopecia' ||
    category == 'Tratamiento de cicatrices y heridas' ||
    category == 'Tratamiento de psoriasis' ||
    category == 'Autoexamen' ? 51 : ''
      ],
      images:[{"src":product.image}],
      featured_image:{"src":product.image},
    },
      { headers: { Authorization: `Bearer ${product.tokenVendor}` } }
      )  .then(async(response) => {
        console.log("Response Data:", response.data);
         const reduceArray0 = dataArray2.reduce((acc, item)=>{
             if(array.findIndex(e => e.id == item.id) == -1){
                 acc.push(item)
             }
             return acc
           },[])
         
         dataArray2 = [...reduceArray0]
      })
      .catch((error) => {
        console.log("Response Data:", error);
      })
    }
        
     })
  }
  const limitedArray = dataArray2.slice(-5)
     if(config.sendProduct_for_lapsus == true){
          setInterval(async() => {
            await insertion(limitedArray)
          }, 10000);
     }else{
          await insertion(limitedArray)
     }



  }

  module.exports = 
  { sendProducts}