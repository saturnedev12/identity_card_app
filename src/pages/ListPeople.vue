<template>
    <v-card class="mx-auto elevation-0" max-width="900" title="Liste des personnes">
        <v-toolbar color="#4B9FB4">
            <v-btn variant="text" icon="mdi-menu"></v-btn>
            <v-toolbar-title>Liste de personnes</v-toolbar-title>
            <v-text-field style="width: 100%;background-color: white; border-radius: 5px;" outlined dense color="white"
                clearable label="label" :prepend-icon="icon" density="compact" variant="outlined" single-line hide-details
                type="text">
            </v-text-field>
            <v-spacer></v-spacer>

            <v-btn variant="text" icon="mdi-magnify"></v-btn>
        </v-toolbar>

        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="handleItemClick(item)">
                <div style="display: flex; flex-direction: row; justify-content: flex-end;">
                    <v-list-item-avatar>
                        <img :src="item.prependAvatar"
                            style="size: 5px; width: 30; height: 30; border-radius: 10px; margin-right: 10px;" />
                    </v-list-item-avatar>
                    <v-list-item-content>

                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
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
export default {

    name: 'ListPeople',
    components: {
        'identity-card': IdentityCardComponent,
    },
    data: () => ({
        dialogOpen: false,
        items: [

            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ',
                subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { type: 'divider', inset: true },
            {
                prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
    }),

    methods: {
        handleItemClick(item) {
            this.dialogOpen = true;
            // Fonction de rappel lors du clic sur un élément
            console.log('Élément cliqué :', item);
            // Autres actions à effectuer lors du clic sur un élément
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