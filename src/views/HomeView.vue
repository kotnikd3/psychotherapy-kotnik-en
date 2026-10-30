<template>
    <div>
        <!-- Hero -->
        <section class="hero is-large">
            <figure>
                <img src="@/assets/images/Ivan_Aivazovsky_Calm_Sea.webp"  alt="Ivan_Aivazovsky" class="hero-bg-img"/>
            </figure>
            <div class="hero-body">
                <div class="container">
                    <h1 class="title hero-title is-size-5-mobile is-size-2-tablet has-text-light">Psychotherapy Denis Kotnik, Leeuwarden</h1>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container my-5">
                <h2 class="title is-4 has-text-primary">Welcome!</h2>
                <p>
                    My name is Denis Kotnik. I am a <strong>trainee in psychodynamic psychotherapy</strong>, working under regular supervision. I offer <b>psychodynamic psychotherapy</b> in Leeuwarden, The Netherlands, and online. I incorporate <b>body-based techniques</b> into the therapeutic process, as emotions and impulses are always present in the body as well. By combining psychoanalytic understanding and body-oriented work, we can explore your experience here and now and possibilities for change within a safe and accepting therapeutic relationship. The course and outcomes of psychotherapy differ for each individual.
                    <br><br>
                    Psychodynamic psychotherapy is intended for anyone who feels stuck, overwhelmed, or disconnected — whether this is your first experience with psychotherapy or you have been in therapy before. People often come with issues such as anxiety, depression, inner tension, low self-esteem, relationship difficulties, or a general sense that something is not right.
                    <br><br>
                    Together we will explore recurring patterns, authentic emotional expression, and unconscious processes that may influence your life. Through this process, many people gain a deeper understanding of themselves, emotional relief, and the possibility of more authentic and fulfilling relationships with themselves and others.
                </p>
                <div class="has-text-centered pt-6">
                    <RouterLink class="button is-warning is-outlined" :to="{ name: 'about_psychotherapy' }">More about psychotherapy</RouterLink>
                </div>
            </div>
        </section>

        <section class="section custom-color">
            <div class="container my-5">
                <div class="columns is-vcentered">
                    <div class="column is-golden-side has-text-centered">
                        <figure class="image">
                            <img class="img-working-on" src="@/assets/images/Caspar_David_Friedrich.webp" alt="Caspar_David_Friedrich" style="width: 70%;">
                        </figure>
                    </div>
                    <div class="column is-golden-main content">
                        <h2 class="title is-5 has-text-primary">Topics we can explore in the therapeutic process:</h2>
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
                        <p class="is-italic has-text-warning has-text-centered mt-6">
                            The longest journey is the one that brings you closest to yourself,<br>and the hardest practice is the one that gives rise to the simplest melody.<br><br>— Rabindranath Tagore
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container my-5">
                <div class="columns is-vcentered">
                    <div class="column is-golden-main">
                        <div class="block">
                            <h2 class="title is-5 has-text-primary">About me</h2>
                            <p>My name is Denis Kotnik. I am a trainee in psychodynamic psychotherapy, working under regular supervision by a psychodynamic and psychoanalytic psychotherapist and psychoanalyst. I live and work in Leeuwarden in the Netherlands and also work online; occasionally, I also practice in Trebnje, Slovenia. Although I understand Dutch, I currently prefer to conduct therapy sessions in English or Slovene.</p>
                        </div>

                        <div class="block">
                            <h3 class="title is-6 has-text-primary">Training and professional membership</h3>
                            <p>I am a member of the <a href="https://www.ezpps.si/clani/denis-kotnik" target="_blank" rel="noopener noreferrer">European Association of Psychoanalytic Approaches Slovenia (EZPPS)</a>. My professional profile is available through this link.</p>
                            <p class="mt-3">I am completing my education at the <a href="https://www.psihodinamska-psihoterapija.org/" target="_blank" rel="noopener noreferrer">Institute for Psychodynamic Psychotherapy in Ljubljana</a>, where, as part of a four-year program, I have acquired extensive theoretical knowledge in psychodynamic and body-oriented psychotherapy.</p>
                            <p class="mt-3">I am training toward certification with the <a href="https://ecpp.ngo/" target="_blank" rel="noopener noreferrer">European Confederation of Psychoanalytic and Psychodynamic Psychotherapies (ECPPP)</a> and the <a href="https://www.europsyche.org/" target="_blank" rel="noopener noreferrer">European Association for Psychotherapy (EAP)</a>. These qualifications have not yet been awarded.</p>
                        </div>

                        <div class="block">
                            <h3 class="title is-6 has-text-primary">Personal experience and professional development</h3>
                            <p>An important part of my professional development is also my personal experience: more than 250 hours of individual psychodynamic psychotherapy (once a week) with a selected psychodynamic psychotherapist, and more than 600 hours of experience in a closed psychodynamic group (a three-year process) led by a psychodynamic psychotherapist.</p>
                        </div>

                        <div class="block">
                            <p>
                                My interest has always been directed toward what is not immediately visible — toward questions of how people think, why we behave the way we do, and how inner conflicts are formed. After completing my master’s degree at the University of Ljubljana, my path led me to psychoanalysis, philosophy, and the work of thinkers such as Socrates, René Descartes, Karl Marx, Sigmund Freud, Jacques Lacan, Alain Badiou, and others.
                            </p>
                        </div>

                        <div class="block">
                            <h3 class="title is-6 has-text-primary">Sessions and contact</h3>
                            <p>Sessions take place in Leeuwarden and online. For information about session fees, duration and availability, email <a href="mailto:info@psychotherapy-kotnik.com">info@psychotherapy-kotnik.com</a> or use the contact form below.</p>
                        </div>
                    </div>
                    <div class="column is-golden-side has-text-centered">
                        <img class="img-denis-kotnik" src="@/assets/images/denis_kotnik.webp" alt="Denis_Kotnik" style="width: 80%; border: 2px double #b26a4b;">
                    </div>
                </div>
            </div>
        </section>
    </div>
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
        object-position: 100% 80%;
    }

    .hero-title {
        text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    }
</style>
