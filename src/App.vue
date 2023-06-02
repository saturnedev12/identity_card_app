<template>
  <div class="py-4" style="margin-top: 100px;" v-if="isLogin == false">
    <!-- <v-img class="mx-auto mb-10" max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img> -->

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">

      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field density="compact" placeholder="Address Email" prepend-inner-icon="mdi-email-outline"
        variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Mot de passe

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Mot de passe oublié ?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>

      <!-- <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three
          hours. If you must login now, you can also click "Forgot login password?" below to reset the login
          password.
        </v-card-text>
      </v-card> -->

      <v-btn @click="isLogin = true" block class="mb-8" color="blue" size="large" variant="tonal">
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
  <!-- LOGIN END -->
  <v-app id="inspire" v-if="isLogin == true">
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
                <router-link :to="'/list_people'" @click="index = 1;" style="text-decoration: none; color: black;">
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
    isLogin: false,
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