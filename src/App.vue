<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">
                    <img src="@/assets/images/logo.webp" alt="psychotherapy_kotnik_logo">
                </RouterLink>
                <RouterLink class="navbar-item" :to="{ name: 'home' }" @click="isMenuActive = false;">Psychotherapy Kotnik</RouterLink>
                <a 
                    role="button" 
                    :class="['navbar-burger', { 'is-active' : isMenuActive }]"
                    aria-label="menu" 
                    aria-expanded="false" 
                    data-target="navMenu"
                    @click="isMenuActive = !isMenuActive"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navMenu" :class="['navbar-menu', { 'is-active' : isMenuActive }]">
                <div class="navbar-end">
                    <RouterLink class="navbar-item" :to="{ name: 'about_psychotherapy' }" @click="isMenuActive = false;">About Psychotherapy</RouterLink>
                    <RouterLink class="navbar-item" :to="{ name: 'about_me' }" @click="isMenuActive = false;">About Me</RouterLink>
                    <div class="navbar-item">
                        <a class="button is-primary is-outlined is-small" href="https://psihoterapija-kotnik.si" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <img alt="United States" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/SI.svg"/>
                            </span>
                            <span>Slovenščina</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <RouterView />

    <div class="container">
        <hr>
    </div>
    
    <section class="section">
        <div class="container is-max-tablet">
            <h5 class="title is-5 has-text-centered has-text-primary">Feel free to contact me</h5>
            <h6 class="subtitle is-6 has-text-centered has-text-primary">
                <a href="mailto:info@psychotherapy-kotnik.com" class="icon-text">
                    <span class="icon">
                        <font-awesome-icon icon="fa-regular fa-envelope" />
                    </span>
                    <span>info@psychotherapy-kotnik.com</span>
                </a>
            </h6>
            <ContactForm></ContactForm>
        </div>
    </section>
    
    <footer class="footer">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <!-- Contact -->
                <div class="column is-one-third-mobile is-narrow">
                    <h6><strong>Contact</strong></h6>
                    <ul class="mt-3">
                        <li>
                            <a href="mailto:info@psychotherapy-kotnik.com" class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-regular fa-envelope" />
                                </span>
                                <span>info@psychotherapy-kotnik.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Links -->
                <div class="column is-one-third-mobile is-narrow">
                    <h6><strong>Links</strong></h6>
                    <ul class="mt-3">
                        <li><RouterLink :to="{ name: 'home' }">Psychotherapy Kotnik</RouterLink></li>
                        <li><RouterLink :to="{ name: 'about_psychotherapy' }">About Psychotherapy</RouterLink></li>
                        <li><RouterLink :to="{ name: 'about_me' }">About Me</RouterLink></li>
                    </ul>
                </div>
                <!-- My Practice Locations -->
                <div class="column is-one-third-mobile is-narrow">
                    <h6><strong>My Practice Locations</strong></h6>
                    <ul class="mt-3">
                        <li>
                            <div class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>Leeuwarden, The Netherlands</span>
                            </div>
                        </li>
                        <li>
                            <div class="icon-text">
                                <span class="icon">
                                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                                </span>
                                <span>online</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="columns is-multiline is-centered is-vcentered">
                <div class="column is-1-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.psihodinamska-psihoterapija.org/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/psihodinamska_logo.webp" alt="Institute_for_psychodynamic_psychotherapy_Slovenia">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.ezpps.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ezpps_logo_v1.webp" alt="EZPPS">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://ecpp.ngo/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/ecppp_logo.webp" alt="ECPPP">
                        </a>
                    </figure>
                </div>
                <div class="column is-1-desktop is-one-quarter-mobile">
                    <figure>
                        <a href="https://www.skzp.si/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/skzp_logo.webp" alt="SKZP">
                        </a>
                    </figure>
                </div>
                <div class="column is-2-desktop is-one-third-mobile">
                    <figure>
                        <a href="https://www.europsyche.org/" target="_blank" rel="noopener noreferrer">
                            <img src="@/assets/images/eap_logo.webp" alt="EAP">
                        </a>
                    </figure>
                </div>
            </div>

            <div class="has-text-centered has-text-primary">
                <p><span>Psychotherapy in Leeuwarden for Expats | Psychotherapy Kotnik</span> <font-awesome-icon icon="fa-regular fa-copyright" /> 2026</p>
			</div>
        </div>
    </footer>
</template>

<script>
import ContactForm from '@/views/ContactForm.vue';

export default {
  	name: 'App',
    components: {
        ContactForm,
    },
    data() {
            return {
                isMenuActive: false,
            }
        },
}
</script>

<style scoped lang="scss">
    @use '@/assets/variables.scss' as *;

    .navbar-item.router-link-exact-active {
        background-color: $color-primary-select;
        text-decoration: underline;
    }
</style>
