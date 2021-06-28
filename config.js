
const config = {
        farmavida:{
            user:process.env.FARMA_VIDA_USER,
            password:process.env.FARMA_VIDA_PASSWORD
        },
        cruzVerde:{
            user:process.env.CRUZ_VERDE_USER,
            password:process.env.CRUZ_VERDE_PASSWORD
        },
        laReabaja:{
            user:process.env.LA_REBAJA_USER,
            password:process.env.LA_REBAJA_PASSWORD
        },
        tuDrogueriaVirtual:{
            user:process.env.DROGUERIA_VIRTUAL_USER,
            password:process.env.DROGUERIA_VIRTUAL_PASSWORD
        },
        Olimpica:{
            user:process.env.OLIMPICA_USER,
            password:process.env.OLIMPICA_PASSWORD
        },
        api:process.env.URL,
        vendor_uploud: true,
        send_products: true,
        sendProduct_for_lapsus:false
}
module.exports = config