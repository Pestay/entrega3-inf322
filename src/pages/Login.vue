<template>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-card class="elevation-20" color="#27293d" style="padding-bottom: 20px">
			<v-card-title>
				<v-img
					height="100px"
					src="https://www.sghs.org/images/Subpage-Banners/Pediatrics.jpg" 
				></v-img>
			</v-card-title>
              <v-window>
                <v-window-item>
                    <v-row  align="center" justify="space-around">
						
                      <v-card-text class="mt-20" style="padding-right: 100px;padding-left:100px">
						  	
                        <h1
                          class="text-center display-2 white--text text--accent-3"
                        >Bebes sansanitos y Felices</h1>
						<v-card>
						<v-card-title>Login</v-card-title>
                        <v-form
							ref="form" 
							style="padding-right: 20px;padding-left:20px;padding-top:20px"
							@submit.prevent="validar(usuario.email,usuario.pass)"
						>
                          <v-text-field
						  	v-model="usuario.email"
                            label="Email"
                            name="Email"
                            type="text"
                            color="teal accent-3"
							:rules="emailRules"
							outlined
                          />
						 

                          <v-text-field
						  	v-model="usuario.pass"
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
							:rules="passRules"
							outlined
                          />
						<v-card-actions style="padding-bottom:20px">
							<v-btn 
								block 
								type="submit"
								color="Primary" 
								dark
							>
							Ingresar
							</v-btn>
						</v-card-actions>
						</v-form>    
						</v-card>
                      </v-card-text>
         
                    </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>

import router from '../router'
import store from '../store'

export default {

	data() {
		return{
			emailRules: [
				v => !!v || 'Se requiere su E-mail',
				v => /.+@.+/.test(v) || 'E-mail debe ser válido',
			],
			passRules : [
				v => !!v || 'Contraseña no debe estar vacía'
			],
			usuario: 
				{
					email : "",
					pass : ""
				},
			usuarios : [
				{
					tipo: 1,
					email: "carlos@gmail.com",
					pass: "carlos",
					id: 1
				},
				{
					tipo: 1,
					email: "maria@gmail.com",
					pass: "maria",
					id: 2			
				},
				{
					tipo: 2,
					email: "felipe@gmail.com",
					pass: "felipe",
					id: 3
				},
				{
					tipo: 2,
					email: "pablo@gmail.com",
					pass: "pablo",
					id: 4
				}
				]			
		}
		
		
	},
    methods : {
        gotosite(){
        	router.push({
            path: "/lists",
          })
          
        },
		validar(email,pass){
			if (!this.$refs.form.validate()) {
				return false
			}

			for(var i = 0; i < this.usuarios.length; i++ ){
				const user = this.usuarios[i]
				console.log(user)
				if ( user.email == email && user.pass == pass) {
					store.commit('setUserId', user.id)
					store.commit('setUserType', user.tipo)
					this.gotosite();
					return true;
				}	
			}
			return false;

			
		},
    },
}
</script>>

<style>


</style>