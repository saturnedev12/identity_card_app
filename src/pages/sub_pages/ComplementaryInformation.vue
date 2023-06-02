<template>
    <v-card class="mx-auto" max-width="500" title="Informations complémentaires">
        <v-container>

            <custom-textfield icon="mdi-briefcase-outline" label="Profession" />
            <v-select chips label="Situation matrimoniale "
                :items="['célibataire', 'marié', 'divorcé', 'veuf/veuve', 'concubinage']" variant="outlined"
                icon="mdi-briefcase-outline"></v-select>
            <v-select chips label="Le père" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"></v-select>
            <v-select chips label="La mère" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"></v-select>



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
    name: 'ComplementaryInformation',
    data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
    }),
}
</script>
