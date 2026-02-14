<template>
    <!-- Hero -->
    <section class="hero is-medium">
        <figure>
            <img  src="@/assets/images/home_hero_top.webp"  alt="Home_image" class="hero-bg-img"/>
        </figure>
        <div class="hero-body">
            <div class="container">
                <h2 class="title is-size-5-mobile is-size-3-tablet has-text-light">Psychotherapy Kotnik</h2>
                <h3 class="subtitle is-size-6-mobile is-size-4-tablet has-text-light">Leeuwarden</h3>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-main">
                    <h5 class="title is-4 has-text-primary">Welcome!</h5>
                    <p>
                        My name is Denis, and I offer <b>psychodynamic psychotherapy</b> in Leeuwarden, the Netherlands and online. I provide a calm, confidential space where we can slow down and explore what is happening beneath the surface of your thoughts, feelings, and relationships. <br><br>Psychodynamic psychotherapy is for anyone who feels stuck, overwhelmed, or disconnected — whether this is your first experience with therapy or you have worked with a therapist before. People often come with concerns such as anxiety, low mood, inner tension, low self-esteem, difficulties in relationships, or a sense that something is not quite right. <br><br>Together, we will explore recurring patterns, authentic emotional expression, and unconscious processes that may be shaping your life. Through this process, many people gain deeper self-understanding, emotional relief, and the possibility of more authentic and fulfilling ways of relating to themselves and others.
                    </p>
                    <div class="has-text-centered pt-6">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'psychodynamic_psychotherapy' }">More about psychotherapy</RouterLink>
                    </div>
                </div>
                <div class="column is-golden-side has-text-centered">
                    <img class="img-denis-kotnik" src="@/assets/images/denis_1.webp" alt="Denis_Kotnik_1" style="width: 70%;">
                    <div class="pt-2">
                        <RouterLink class="button is-warning is-outlined" :to="{ name: 'denis_kotnik' }">More about me</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section custom-color">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-side has-text-centered">
                    <figure class="image">
                        <img class="img-working-on" src="@/assets/images/home_hero_bottom_left.webp" alt="Working_on_psychotherapy_image">
                    </figure>
                </div>
                <div class="column is-golden-main content">
                    <h5 class="title is-5 has-text-primary">In a safe therapeutic space, we can work together on:</h5>
                    <ul>
                        <li>Depression, anxiety, and panic attacks</li>
                        <li>Excessive worry, overwhelm, and persistent anxiety</li>
                        <li>Resolving feelings of guilt, shame, fear, and inner emptiness</li>
                        <li>Difficulties in interpersonal relationships</li>
                        <li>Partnerships, workplace relationships, and fear of relationships</li>
                        <li>Coping with the loss of an important person and the grieving process</li>
                        <li>Stress in everyday life and at work, insomnia, and chronic fatigue</li>
                        <li>Mental disorders and personality disorders</li>
                        <li>Difficulties with anger and aggression</li>
                        <li>Issues with burnout, addiction, and addictive behaviours</li>
                        <li>Anorexia, bulimia, and other eating disorders</li>
                        <li>Low self-esteem, feelings of inferiority, and a lack of meaning in life</li>
                        <li>Obsessive-compulsive disorders, identity disorders, and other psychosomatic conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <p class="is-italic has-text-warning is-size-5 has-text-centered">
                The longest journey is the one that brings you closest to yourself,<br>and the hardest practice is the one that gives rise to the simplest melody.<br><br>— Rabindranath Tagore
            </p>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns is-centered has-text-centered">
                <div class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Intake conversation</p>
                        </header>
                        <div class="card-content">
                            <p class="price">
                                <span class="currency">
                                    <font-awesome-icon icon="fa-solid fa-euro-sign" />
                                </span>
                                <span class="amount">40</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Psychodynamic Psychotherapy once per week</p>
                        </header>
                        <div class="card-content">
                            <p class="price">
                                <span class="currency">
                                    <font-awesome-icon icon="fa-solid fa-euro-sign" />
                                </span>
                                <span class="amount">70</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Psychodynamic Psychotherapy twice per week</p>
                        </header>
                        <div class="card-content">
                            <p class="price">
                                <span class="currency">
                                    <font-awesome-icon icon="fa-solid fa-euro-sign" />
                                </span>
                                <span class="amount">60</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns has-text-centered is-mobile is-centered">
                <div class="column is-half-mobile is-narrow-tablet">
                    <p class="title has-text-primary"><font-awesome-icon icon="fa-regular fa-clock" /></p>
                    <p>Each session lasts <b>50 minutes</b>.</p>
                </div>
                <div class="column is-half-mobile is-narrow-tablet">
                    <p class="title has-text-primary"><font-awesome-icon icon="fa-solid fa-language" /></p>
                    <p>Sessions are available in <b>English</b> or <b>Slovenian</b>.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  	name: 'HomeView'
}
</script>

<style lang="scss" scoped>
    .hero {
        position: relative;
        overflow: hidden;
    }

    .hero-bg-img {
        position: absolute;
        top: 0;       /* necessary for proper absolute positioning */
        left: 0;      /* necessary */
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 80%;
    }

    .price {
        display: inline-flex;
        align-items: flex-start;
        font-weight: 700;
    }

    .price .currency {
        font-size: 0.90em;
        line-height: 1;
    }

    .price .amount {
        font-size: 2.5rem;
        line-height: 1;
    }

</style>
