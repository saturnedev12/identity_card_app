<template>
    <v-card class="mx-auto" max-width="500" title="Votre Signature">
        <v-container>
            <sign-pad />
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="this.$router.push(`/registor_page/identity_card`)" color="success">
                Terminer
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
// import TextFiledComponent from "@/components/TextFiledComponent.vue";
import SignaturePade from "@/components/SignaturePade.vue";

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
}
</script>
