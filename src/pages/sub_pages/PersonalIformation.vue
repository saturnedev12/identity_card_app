<template>
    <v-card class="mx-auto" max-width="500" title="Informations personnelles ">
        <v-container>
            <div style="margin-bottom: 10px;">
                <v-text-field v-model="first" style="background-color: white; border-radius: 5px;" clearable
                    label="votre nom" prepend-icon="mdi-account" density="compact" variant="outlined" single-line
                    hide-details type="text"> </v-text-field>
            </div>
            <div style="margin-bottom: 10px;">
                <v-text-field v-model="last" style="background-color: white; border-radius: 5px;" clearable
                    label="votre prenom" prepend-icon="mdi-account" density="compact" variant="outlined" single-line
                    hide-details type="text"> </v-text-field>
            </div>
            <div style="margin-bottom: 10px;">
                <v-text-field v-model="born" style="background-color: white; border-radius: 5px;" clearable
                    label="Date de naissance" prepend-icon="mdi-cake-variant" density="compact" variant="outlined"
                    single-line hide-details type="datetime-local"> </v-text-field>
            </div>
            <div style="margin-bottom: 10px;">
                <v-text-field v-model="lieu" style="background-color: white; border-radius: 5px;" clearable
                    label="Lieu de naissance" prepend-icon="mdi-home-city-outline" density="compact" variant="outlined"
                    single-line hide-details type="text"> </v-text-field>
            </div>
            <div style="margin-bottom: 10px;">
                <v-text-field v-model="prof" style="background-color: white; border-radius: 5px;" clearable
                    label="Profession" prepend-icon="mdi-briefcase-outline" density="compact" variant="outlined" single-line
                    hide-details type="text"> </v-text-field>
            </div>
            <!-- <custom-textfield v-model="lieu" icon="mdi-home-city-outline" label="Lieu de naissance" /> -->
            <custom-textfield v-model="first" icon="mdi-city" label="Nationnalité" />


            <!-- <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox> -->
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="suivant" color="success">
                Enregister

                <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import TextFiledComponent from "@/components/TextFiledComponent.vue";
export default {
    components: {
        'custom-textfield': TextFiledComponent,
    },
    name: 'PersonalIformation',

    beforeUnmount() {
        // console.log('HELLO');
        // console.log(this.first)
        // localStorage.setItem('nom', this.first);
        // localStorage.setItem('prenom', this.last);
        // localStorage.setItem('lieuNaiss', this.lieu);
        // localStorage.setItem('dateNaiss', this.born);

    },
    data: () => ({
        first: null,
        last: null,
        born: null,
        lieu: null,
        prof: null,

    }),
    methods: {
        suivant() {
            localStorage.setItem('nom', this.first);
            localStorage.setItem('prenom', this.last);
            localStorage.setItem('lieuNaiss', this.lieu);
            localStorage.setItem('dateNaiss', '2000-01-01');
            localStorage.setItem('profession', this.prof);
            localStorage.setItem('sexe', 'M');
            localStorage.setItem('email', 'test@gmail.com');



        },
    }
}
</script>
