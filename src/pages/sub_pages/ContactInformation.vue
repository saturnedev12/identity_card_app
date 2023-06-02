<template>
    <v-card class="mx-auto" max-width="500" title="Informations de contact">
        <v-container>
            <custom-textfield icon="mdi-map-marker" label="Adresse résidentielle " />
            <custom-textfield icon="mdi-phone-outline" label="Numéro de téléphone" />
            <custom-textfield icon="mdi-email-multiple-outline" label="Adresse e-mail" />



            <!-- <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox> -->
        </v-container>

        <v-divider></v-divider>

        <!-- <v-card-actions>
            <v-btn color="success">
                <v-icon icon="mdi-chevron-left" end></v-icon>
                Precedent

            </v-btn>
            <v-spacer></v-spacer>

            <v-btn color="success">
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
    name: 'ContactInformation',
    data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
    }),
}
</script>
