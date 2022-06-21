<template>
  <div>

    <h1>Upload File</h1>
<input type="file" id="files" style="display: none;" accept =".csv" ref="file" v-on:change="handleFileUpload()">
<button type="button" class="btn" @click.prevent="Submit">Upload</button>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'ImportData',
    // data(){
    //   return{

    //     file: ""
    //   }
    // },
    // methods:{

    //     Submit(){
    //         // $('#files').click();

    //     },
    //    handleFileUpload(){

    //     this.file=this.$refs.file.files[0];
    //     const reader= new FileReader();
    //     reader.readAsText(this.file);
    //     read.onload=() => {
    //         console.log(reader.error);
    //     }
    //     const FormData= new Formdata();
    //     FormData.append('file', this.file)
    //     axios.post('http://localhost/3000/empdata',FormData)
    //     // {headers:{'content-Type': 'multipart/form-data',},

          

        
    //    },
      
    //     }

        
       }

    

 

</script>

<style>
button{

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
btn{
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