<template>
    <div
        style="background-color: white; height: 600px; display: flex; justify-content: space-between; align-items: center; flex-direction: column; padding: 10px;">

        <div style="width: 100%;">
            <router-view></router-view>
        </div>
        <div style="width: 100%;  margin-top: 20px;">
            <v-pagination v-model="page" :length="5" rounded="circle" @input="updatePage"></v-pagination>
        </div>
    </div>
</template>
<script>

// import TextFiledComponent from "./components/TextFiledComponent.vue";

export default {
    components: {
        // 'custom-textfield': TextFiledComponent,
        // 'personal-information': PersonalIformation,
        // 'contact-innformation': ContactInformation,
        // 'justificatifs-documents': JustificatifInformation,
        // 'compli-if': ComplementaryInformation,
        // 'sign': SignaturePade,
    },
    name: 'RegisterPage',
    data: () => ({
        pages: [
            '',
            'personal_innfo',
            'contact_info',
            'justificatif_info',
            'complementary_info',
            'sign_info',
        ],
        page: 1,
        toto: 'n;',
        tab: null,
    }),
    watch: {
        page(newPage) {
            // Fonction exécutée lorsque la valeur de "page" change
            console.log('La valeur de la page a changé :', newPage);

            // Vous pouvez effectuer d'autres actions en fonction de la nouvelle valeur
            // par exemple, recharger des données à partir d'une API en utilisant la nouvelle page
            this.redirigerVersPage(newPage)
        }
    },
    mounted() {
        this.$router.push(`/registor_page/personal_innfo`);
    },
    methods: {
        redirigerVersPage(route) {
            // Effectue une redirection vers '/nouvelle-page'
            this.$router.push(`/registor_page/${this.pages[route]}`);
        },
        updatePage(value) {
            // Mettre à jour la valeur de "page" en réponse à l'événement @input de v-pagination
            //this.page = value;
            this.redirigerVersPage(value)
            console.log("Update", value)
        },
        loadData(page) {
            console.log(page)
            // Charger les données correspondant à la page spécifiée depuis l'API
            // Faire quelque chose avec les données...
        }
    },


}
</script>
