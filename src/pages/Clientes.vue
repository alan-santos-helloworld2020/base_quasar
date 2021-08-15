<template>
  <q-layout>
    <q-page class="row q-pa-md">
      <q-table
        title="Clientes"
        class="col-12"
        :rows="linhas"
        :columns="colunas"
        row-key="nome"
       >
      </q-table>
    </q-page>
  </q-layout>
</template>

<script>
const columns = [
  {
    name: "nome",
    align: "center",
    label: "Nome",
    field: "nome",
    sortable: true,
  },
  {
    name: "telefone",
    align: "center",
    label: "Telefone",
    field: "telefone",
    sortable: true,
  },
  {
    name: "email",
    align: "center",
    label: "Email",
    field: "email",
    sortable: true,
  },
  {
    name: "cep",
    align: "center",
    label: "Cep",
    field: "cep",
    sortable: true,
  },
];



export default {
  name: "Clientes",
  data() {
    return {
      colunas: columns,
      linhas:[],
    };
  },
  beforeMount(){
    fetch('http://localhost:3000/data',{
       method:"GET",
       headers:{
         'Content-Type':'application/json'
       }    

    })
    .then(result => result.json())
    .then(data =>{
     
     this.linhas = data
     console.log(data)

    })
    .catch(err => console.log(`Erro: ${err}`))
  }
};
</script>
<style lang="scss"></style>
