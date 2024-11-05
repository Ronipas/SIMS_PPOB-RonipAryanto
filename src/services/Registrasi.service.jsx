import React from 'react';
import SwaggerUI from 'swagger-ui-react';

import axios from 'axios'



    
export const getRegister = () => {


    axios.get('https://take-home-test-api.nutech-integrasi.com/registration').then((res) => {
        console.log(res);

    }).catch((err) => {

        console.log(err);
        
    });

}


