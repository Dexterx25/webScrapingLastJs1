const {getDataProducts} = require('../scrape')
const config = require('../../config')


const exploringSections = async(sections) =>{

    for (let i = 0; i < sections.length; i++) {
        const element = sections[i];
             await getDataProducts(element).catch(e => console.warn('errorrrr->', e))
    }
 
}
     

module.exports = {
    exploringSections
}
