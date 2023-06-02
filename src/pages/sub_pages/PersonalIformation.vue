<template>
    <v-card class="mx-auto" max-width="500" title="Informations personnelles ">
        <v-container>
            <custom-textfield icon="mdi-account" label="votre nom" />
            <custom-textfield icon="mdi-account" label="votre prenom" />
            <custom-textfield icon="mdi-cake-variant" type="datetime-local" label="Date de naissance" />
            <custom-textfield icon="mdi-home-city-outline" label="Lieu de naissance" />
            <custom-textfield icon="mdi-city" label="Nationnalité" />


            <!-- <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox> -->
        </v-container>

        <v-divider></v-divider>

        <!-- <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="this.$router.push(`/registor_page/contact_info`)" color="success">
                Suivant

                <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
        </v-card-actions> -->
    </v-card>
</template>
<script>
import TextFiledComponent from "@/components/TextFiledComponent.vue";
export default {
    components: {
        'custom-textfield': TextFiledComponent,
    },
    name: 'PersonalIformation',
    data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
    }),
}
</script>
