<template>
    <v-card class="mx-auto" max-width="500" title="Votre Signature">
        <v-container>
            <sign-pad />
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="sendData" color="success">
                Terminer
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
// import TextFiledComponent from "@/components/TextFiledComponent.vue";
import SignaturePade from "@/components/SignaturePade.vue";
import axios from 'axios';

export default {
    components: {
        // 'custom-textfield': TextFiledComponent,
        'sign-pad': SignaturePade,
    },
    name: 'SignaturePage',
    data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
    }),
    methods: {
        sendData() {
            axios.post(`http://localhost:8000/api/register`, {
                nom: localStorage.getItem('nom'),
                prenom: localStorage.getItem('prenom'),
                lieuNaiss: localStorage.getItem('lieuNaiss'),
                dateNaiss: localStorage.getItem('dateNaiss'),
                email: localStorage.getItem('email'),
                profession: localStorage.getItem('profession'),
            })
                .then(response => {
                    // Gérer la réponse de la requête
                    console.log(response.data);
                    this.$router.push(`/registor_page/identity_card`)
                })
                .catch(error => {
                    // Gérer les erreurs de la requête
                    console.error(error);
                });


        },
    },

}
// localStorage.setItem('nom', this.first);
// localStorage.setItem('prenom', this.last);
// localStorage.setItem('lieuNaiss', this.lieu);
// localStorage.setItem('dateNaiss', '2000-01-01');
// localStorage.setItem('profession', this.prof);
// localStorage.setItem('email', 'test@gmail.com');

</script>
