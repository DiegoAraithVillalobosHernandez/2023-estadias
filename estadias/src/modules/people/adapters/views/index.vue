<template>
  <div>
    <b-row>
      <b-col cols="12" md="4">Seccion 1</b-col>
      <b-col cols="12" md="4">
        <form @submit.prevent="savePeople">
          <b-form-group
            description="Nombre de la persona"
            label="Nombre"
            laber-for="inputName"
          >
            <b-form-input id="inputName" v-model="person.name"></b-form-input>
          </b-form-group>
          <b-form-group
            description="Nombre del trabajo a registrar"
            label="Trabajo"
            laber-for="inputJob"
          >
            <b-form-input id="inputJob" v-model="person.job"></b-form-input>
          </b-form-group>
          <b-col cols="12" md="4">
        <b-button type="submit" variant="primary">Registrar</b-button>
      </b-col>
        </form>
      </b-col>
      
    </b-row>
    <b-row>
      <b-col cols="4" v-for="people in pagination.data" v-bind:key="people.id">
        <b-card>
          <b-row aling-v="center">
            <b-col cols="4" class="text-center">
              <b-avatar :src="people.avatar" size="6rem"> </b-avatar>
            </b-col>
            <b-col cols="8">
              <b-row>
                <b-col cols="12" >{{people.first_name + ' ' + people.last_name }}</b-col>
                <b-col cols="12">Correo: {{people.email}}</b-col>
                <b-col cols="12">
                  <b-button variant="success"> Editar</b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <h1>{{ valueX }}</h1>
    <code>{{ person }}</code>
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
import { AllPeopleDto } from "../../entities/AllPeopleDto";
import { Person } from "../../entities/Person";
import { PeopleController } from "../People.controller";
export default Vue.extend({
  name: "IndexPersonVue",
  data() {
    return {
      valueX: "Este valor esta aquí" as string,
      page: 1 as number,
      person: {
        name: "",
        job: "",
      } as Person,
      pagination: {} as AllPeopleDto,
    };
  },
  methods: {
    async getAllPeople() {
      const controller = new PeopleController();
      const resp = await controller.getAllPeople(this.page);
      if (resp.result) {
        this.pagination = resp.entity;
        console.log("Datos consultados: ", resp.entity);
      }
    },
    async savePeople(){
 
      // Retrieve form data if needed
      const controller = new PeopleController();
      const resp = await controller.savePeople(this.person);

      if (resp.result) {
        console.log("Datos: ", resp.entity);
        this.$swal('Se registro la persona uwu');
      }
    }
  },
  mounted() {
    // llamada a metodos que se deban ejecutar para poder mostrar la interfaz
    this.getAllPeople();
  },
});
</script>

<style>
</style>