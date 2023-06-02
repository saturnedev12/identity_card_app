import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import EnlistPage from './pages/EnlistPage.vue'
import ListPeople from './pages/ListPeople.vue'
import RegisterPage from './pages/RegisterPage.vue'
import PersonalIformation from "@/pages/sub_pages/PersonalIformation.vue"
import ContactInformation from "@/pages/sub_pages/ContactInformation.vue"
import JustificatifInformation from "@/pages/sub_pages/JustificatifInformation.vue"
import ComplementaryInformation from "@/pages/sub_pages/ComplementaryInformation.vue"
import SignaturePage from "@/pages/sub_pages/SignaturePage.vue"
import IdentityCardComponent from "@/components/IdentityCardComponent.vue"
import MainPage from "@/pages/MainPage.vue"

const routes = [
    { path: '/hello', component: HelloWorld },
    { path: '/enlist', component: EnlistPage },
    { path: '/app', component: MainPage },
    { path: '/list_people', component: ListPeople },
    {
        path: '/registor_page', component: RegisterPage,
        children: [
            {
                path: 'personal_innfo',
                component: PersonalIformation
            },
            {
                path: 'contact_info',
                component: ContactInformation
            },
            {
                path: 'justificatif_info',
                component: JustificatifInformation
            },
            {
                path: 'complementary_info',
                component: ComplementaryInformation
            },
            {
                path: 'sign_info',
                component: SignaturePage
            },

            {
                path: 'identity_card',
                component: IdentityCardComponent
            }
        ]

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
