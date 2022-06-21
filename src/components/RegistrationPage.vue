<template>
<div>
<component v-bind:is="steps[currentStep].component"


          
           
           />
        
        
</div >
<div>
<div >
    <button v-if="currentStep !==0" class= "butn"  @click.prevent="Previous">Go back</button>
<button v-if="currentStep < steps.length" class= "butn"  @click.prevent="Continue">Continue</button>

</div>
</div>

</template>
    
 


<script>

import RegistrationOne from './RegistrationOne';
import RegistrationTwo from './RegistrationTwo';
import RegistrationThree from './RegistrationThree';

export default {
     name:"RegistrationPage",

     data(){

        return{
            currentStep: 0,
        // formvalues:{
        //        RegistrationOne:{
        //          firstname: '',
        //          lastname: '',
        //          companyid: '',
        //          userid: '',
        //          phonenumber: '',

        //         },
        //         RegistrationTwo:{
        //             AdressLine1: '',
        //             AdressLine2: '',
        //             city: '',
        //             state: '',
        //             zipcode: '',
        //             country: '',
        //             role: '',
        //             createpwd: '',
        //             confirmpwd: '',


        //         },
        //         RegistrationThree:{
        //             ans1: '',
        //             ans2: '',
        //             ans3: '',
        //             ans4: '',
        //             ans5: '',
                    

        //         },
        // },

            
            steps:[
                {
                    component: RegistrationOne
                    //lable: 'registrationOne'
                },
                {

                    component: RegistrationTwo
                    // lable: 'registrationTwo'
                },
                {
                    component:RegistrationThree
                    // lable: 'registrationThree'
                }

            ]
                
            }
        },
        methods:{

            Continue(){
                this.currentStep += 1;
            },

            Previous(){

               this.currentStep -= 1;
            }

        },

     components:[
        RegistrationOne,
        RegistrationTwo,
        RegistrationThree,
     ]

}

</script>

<style>


.butn{
    
     width: 20%; 
    padding: 12px 20px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    background-color:  rgb(15, 6, 119);
    color: white;
     font-family: sans-serif;
     transition: 0.5s;
}
buttn{
    
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 50px;
  border: 2px solid #dddddd;
  background: #634ed8;
  outline: none;
  transition: border-color 0.5s;
  font-family: sans-serif;
}



</style>