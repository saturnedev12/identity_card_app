<template>
    <v-card class="mx-auto elevation-0" max-width="900" title="Liste des personnes">
        <v-toolbar color="#4B9FB4">
            <v-btn variant="text" icon="mdi-menu"></v-btn>
            <v-toolbar-title>Liste de personnes</v-toolbar-title>
            <v-text-field v-model="serchValue" style="width: 100%;background-color: white; border-radius: 5px;" outlined
                dense color="white" clearable label="Rechercher" :prepend-icon="icon" density="compact" variant="outlined"
                single-line hide-details type="text">
            </v-text-field>
            <v-spacer></v-spacer>

            <v-btn variant="text" icon="mdi-magnify" @click="fetchData(serchValue)"></v-btn>
        </v-toolbar>

        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="handleItemClick(item)">
                <div style="display: flex; flex-direction: row; justify-content: flex-start; width: 100%;">
                    <v-list-item-avatar>
                        <img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"
                            style="size: 5px; width: 30; height: 30; border-radius: 10px; margin-right: 10px;" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-subtitle>{{ item.numCNI }}</v-list-item-subtitle>
                        <v-list-item-title>{{ item.nom }} {{ item.prenom }}</v-list-item-title>

                        <v-list-item-subtitle>{{ item.profession }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ item.taille }}cm</v-list-item-subtitle>
                    </v-list-item-content>
                </div>

            </v-list-item>
        </v-list>
    </v-card>
    <v-dialog transition="dialog-top-transition" width="auto" v-model="dialogOpen">

        <template v-slot:default="{}">
            <v-card>
                <identity-card />

                <!-- <v-card-actions class="justify-end">
                    <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                </v-card-actions> -->
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import IdentityCardComponent from "@/components/IdentityCardComponent.vue";
import axios from 'axios';

export default {

    name: 'ListPeople',
    components: {
        'identity-card': IdentityCardComponent,
    },
    data: () => ({
        dialogOpen: false,
        serchValue: '',
        items: [
            {
                id: 1,
                numCNI: "1234567890",
                nom: "Doe",
                prenom: "John",
                taille: "180",
                profession: "Software Engineer",
                visage: '',
                email: "john@example.com",

            },

        ],
    }),
    mounted() {
        this.fetchData('')
    },
    methods: {
        handleItemClick(item) {
            this.dialogOpen = true;
            // Fonction de rappel lors du clic sur un élément
            console.log('Élément cliqué :', item);
            // Autres actions à effectuer lors du clic sur un élément
        },
        fetchData(value) {
            axios.get(`http://localhost:8000/api/users/${value}`)
                .then(response => {
                    console.log(response.data.users)
                    this.items = response.data.users
                    // Traitement des données de la réponse
                })
                .catch(error => {
                    console.log(error)
                    // Gestion des erreurs
                });
        },
    },
}
</script>

<style scoped>
.subheader {
    background-color: #f0f0f0;
    font-weight: bold;
}

.item-content {
    display: flex;
    align-items: center;
}

.title-wrapper {
    flex: 1;
    margin-right: 16px;
}
</style>