<template>
    <v-app id="inspire">
        <v-app-bar flat>
            <v-container class="fill-height d-flex align-center">
                <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

                <v-btn v-for="link in links" :key="link" variant="text">
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>

                <v-responsive max-width="260">
                    <v-text-field density="compact" hide-details variant="solo"></v-text-field>
                </v-responsive>
            </v-container>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-sheet rounded="lg">
                            <v-list rounded="lg">
                                <router-link :to="'/list_people'" @click="index = 1;"
                                    style="text-decoration: none; color: black;">
                                    <v-list-item link
                                        :style="(index == 1) ? 'background-color: #4B9FB4; color:white;' : ' color:black; background-color: white;'">
                                        <v-list-item-title>
                                            Liste personnes
                                        </v-list-item-title>
                                    </v-list-item>
                                </router-link>

                                <!-- <v-list-item link>
                  <v-list-item-title>
                    Liste d'attente
                  </v-list-item-title>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-title>
                    Piece d'identité
                  </v-list-item-title>
                </v-list-item> -->

                                <v-divider class="my-2"></v-divider>
                                <router-link :to="'/registor_page'"
                                    @click="index = 2; this.$router.push(`/registor_page/personal_innfo`);"
                                    style="text-decoration: none; color: black;">
                                    <v-list-item link color="grey-lighten-4"
                                        :style="(index == 2) ? 'background-color: #4B9FB4;color:white;' : ' color:black; background-color: white;'">
                                        <v-list-item-title>
                                            Enrôler une personnne
                                        </v-list-item-title>
                                    </v-list-item>
                                </router-link>

                            </v-list>
                        </v-sheet>
                    </v-col>

                    <v-col>
                        <v-sheet min-height="70vh" rounded="lg">
                            <!--  -->
                            <router-view></router-view>
                            <!-- <list-people /> -->
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// import TextFiledComponent from "./components/TextFiledComponent.vue";
// import ListPeople from "@/pages/ListPeople.vue"
export default {
    components: {
        // 'list-people': ListPeople,
        // 'personal-information': PersonalIformation
    },
    data: () => ({
        index: 1,
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
    }),
}
</script>

<style scoped>
.router-link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}
</style>