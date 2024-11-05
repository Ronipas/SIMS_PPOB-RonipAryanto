import React from 'react';
import SwaggerUI from 'swagger-ui-react';


function GetBanner (callback) {

    
const GetBanner = () => {


    SwaggerUI.get('https://take-home-test-api.nutech-integrasi.com/banner').then((res) => {
        callback(res.data);

    }).catch((err) => {

        console.log(err);
        
    });
}
}
export default GetBanner