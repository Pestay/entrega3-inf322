<template>
    <card 
    centered 
    style="
    width: 60%; 
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    margin-bottom: 50%;
    "
    >
        <v-img
        class="white--text align-end"
        height="200px"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.offthegridnews.com%2Fwp-content%2Fuploads%2F2018%2F10%2Ffake-papers-1024x683.jpeg&f=1&nofb=1"
        >
            <v-card-title style="color:black">
            Añadir examen
            </v-card-title>
        </v-img>
        <v-card
            style="padding: 20px"
        >
        <v-form
        ref="form"
        >
        <v-container fluid>
            <v-row>
            <v-col
                cols="12"
            >
                <v-text-field
                v-model="exam.title"
                color="teal"
                label="Título"
                :rules="titleRules"
                required
                outlined
                shaped
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea
                v-model="exam.description"
                color="teal"
                label = "descripción"
                :rules="descRules"
                outlined
                >
                </v-textarea>
            </v-col>

            </v-row>
        </v-container>
        <v-card-actions>
            <v-btn 
                    block 
                    color="primary"
                    @click="validate"
                >
                Añadir nuevo examen
            </v-btn>
            <v-dialog
                v-model="confirm"
                persistent
                max-width="400"
            >
                <v-card>
                    <v-card-title>
                        Confirmación
                    </v-card-title>
                    <v-card-text>
                        ¿Confirmar añadir el exámen?
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            @click="confirm = false"
                            text
                        >
                            Rechazar
                        </v-btn>
                        <v-btn
                            type="submit"
                            color="primary"
                            @click="confirm = false;makeExamen(exam)"
                        >
                                Confirmar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog
                v-model="notice"
                max-width="290"
            >
                <v-card>
                    <v-card-title>
                        ¡Éxito!
                    </v-card-title>
                    <v-card-text>
                        El exámen ha sido añadido con éxito.
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-actions>
        </v-form>
        </v-card>
    </card>
</template>

<script>
import router from '../router'

export default {
    setup() {
        
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear().toString().slice(-2)
            return date
        }

    },
    data: () => ({
        exam : {
            title: '',
            description: '',
        },
        confirm : false,
        notice : false,
        titleRules: [
            v => !!v || 'Se requiere un título',
        ],
        descRules: [
            v => !!v || 'Debe tener una descripción',
            v => (v && v.length >= 10) || 'Descripción debe tener al menos 10 caracteres'
        ]
    }),
    methods: {
        makeExamen(payload)
        {
            const today = new Date();
            const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear().toString().slice(-2)
            this.notice = true
            setTimeout(() =>
                router.push({
                path: "/info"
                }),
            3000
            )
            
            return payload
        },
        validate() 
        {
            if(this.$refs.form.validate())
            {
                this.confirm = true
            }
        }
    }

}
</script>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>