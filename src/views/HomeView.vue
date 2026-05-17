<template>
    <!-- Hero -->
    <section class="hero is-medium">
        <figure>
            <img src="@/assets/images/sea_2.webp"  alt="Home_image" class="hero-bg-img"/>
        </figure>
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-size-5-mobile is-size-3-tablet has-text-light">Psychotherapy in Leeuwarden for Expats</h1>
                <h2 class="subtitle is-size-6-mobile is-size-4-tablet has-text-light">Psychotherapy Kotnik</h2>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-golden-main">
                    <h3 class="title is-4 has-text-primary">Welcome!</h3>
                    <p>
                        My name is Denis and I offer <b>psychodynamic psychotherapy</b> in Leeuwarden and online. I incorporate body-based techniques into the therapeutic process, as emotions and impulses are always present in the body as well. The combination of psychoanalytic understanding and body-oriented work allows for lasting change and for processes to unfold here and now — within a safe and accepting therapeutic relationship.
                        <br><br>
                        Psychodynamic psychotherapy is intended for anyone who feels stuck, overwhelmed, or disconnected — whether this is your first experience with psychotherapy or you have been in therapy before. People often come with issues such as anxiety, depression, inner tension, low self-esteem, relationship difficulties, or a general sense that something is not right.
                        <br><br>
                        Together we will explore recurring patterns, authentic emotional expression, and unconscious processes that may influence your life. Through this process, many people gain a deeper understanding of themselves, emotional relief, and the possibility of more authentic and fulfilling relationships with themselves and others.
                    </p>
                    <div class="has-text-centered pt-6">
                        <RouterLink class="button is-primary is-outlined" :to="{ name: 'about_psychotherapy' }">More about psychotherapy</RouterLink>
                    </div>
                </div>
                <div class="column is-golden-side has-text-centered">
                    <img class="img-denis-kotnik" src="@/assets/images/denis_1.webp" alt="Denis_Kotnik_1" style="width: 70%;">
                    <div class="pt-2">
                        <RouterLink class="button is-warning is-outlined" :to="{ name: 'about_me' }">More about me</RouterLink>
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
                        <img class="img-working-on" src="@/assets/images/underwater_ladder_1.jpg" alt="Working_on_psychotherapy_image">
                    </figure>
                </div>
                <div class="column is-golden-main content">
                    <h4 class="title is-5 has-text-primary">In a safe therapeutic space, we can work together on:</h4>
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
            <p class="is-italic has-text-warning has-text-centered">
                The longest journey is the one that brings you closest to yourself,<br>and the hardest practice is the one that gives rise to the simplest melody.<br><br>— Rabindranath Tagore
            </p>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns is-centered has-text-centered">
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Intake conversation (50 min)</p>
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
                <div class="column is-half">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title is-centered">Psychodynamic Psychotherapy (50 min)</p>
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
        box-shadow: 0 0 10px 2px #516594;
    }

    .hero-bg-img {
        position: absolute;
        top: 0;       /* necessary for proper absolute positioning */
        left: 0;      /* necessary */
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 78%;
    }

    .price {
        display: inline-flex;
        align-items: flex-start;
    }

    .price .currency {
        font-size: 0.8em;
        line-height: 1;
    }

    .price .amount {
        font-size: 2rem;
        line-height: 1;
    }

</style>
