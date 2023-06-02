<template>
    <v-card class="mx-auto" max-width="500" title="Pièces justificatives">
        <v-container>

            <input-file label="Extrait de naissance" />
            <input-file label="Certificat de nationnalité" />
            <input-file label="Justificatif de domicile" />
            <input-file label="Une photo de vous" />

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
import InputFileComponent from "@/components/InputFileComponent.vue";


export default {
    name: 'JustificatifInformation',
    components: {
        'input-file': InputFileComponent,
    },

    data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
    }),
}
</script>
