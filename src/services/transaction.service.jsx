import SwaggerUI from "swagger-ui";

export const getTransaction = () => {

    SwaggerUI.get("https://take-home-test-api.nutech-integrasi.com/transaction").then((result) => {
    console.log(result)    
    }).catch((err) => {
        
    });
}