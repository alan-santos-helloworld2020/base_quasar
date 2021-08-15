<template>
<q-layout>
  <q-page class="q-pa-md">
    <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
    <q-form action="/" method="post" @submit.prevent="onSubmit">
      <q-input type="text"
       outlined
        v-model="dados.nome"
        label="Nome"
        :rules="[val => val && val.length > 0 || 'Por favor preencha este campo' ]"
        >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input
        type="tel"
        class="q-mt-xs"
        outlined
        v-model="dados.telefone"
        label="Telefone"
        mask="+55 (##) #####-####"
        :rules="[val => val && val.length > 0 || 'Por favor preencha este campo' ]"
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>

      <q-input type="email"
       class="q-mt-xs"
       outlined
       v-model="dados.email"
       label="Email"
       :rules="[val => val && val.length > 0 || 'Por favor preencha este campo' ]"
       >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input type="text"
      class="q-mt-xs"
      outlined
      v-model="dados.cep"
      label="Cep"
      mask="#####-###"
      :rules="[val => val && val.length > 0 || 'Por favor preencha este campo' ]"
      >
        <template v-slot:prepend>
          <q-icon name="markunread_mailbox" />
        </template>
      </q-input>

      <q-btn type="submit" class="float-right q-mt-xs" color="primary" icon-right="send" label="enviar" />
    </q-form>
     </div>
     </div>
  </q-page>
</q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "Cadastro",
  data() {
    return {
      dados: {
        nome: ref(null),
        telefone: ref(null),
        email: ref(null),
        cep: ref(null),
      },
    };
  },
  methods: {
    onSubmit() {
      fetch('http://localhost:3000/data',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.dados)

      })
      .then(data => console.log(data))
      .catch(err => console.log(`Erro: ${err}`))
    }
  },
};
</script>
