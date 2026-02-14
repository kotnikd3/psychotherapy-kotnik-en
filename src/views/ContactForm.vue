<template>
    <!-- Contact form -->
    <form ref="form" @submit.prevent="sendEmail">
        <!-- Name -->
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="form.name" required>
            </div>
        </div>
        <!-- Email -->
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Email" v-model="form.email" required>
                <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-regular fa-envelope" />
                </span>
            </div>
        </div>
        <!-- Message -->
        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Message" rows="5" v-model="form.message" required></textarea>
            </div>
        </div>
        <!-- Button -->
        <div class="field has-text-centered">
            <div class="control">
                <button :class="['button is-primary is-outlined', { 'is-loading' : isLoading }]">Submit</button>
            </div>
        </div>
        <!-- Notification Success -->
        <div v-if="notificationSuccess.show" class="notification is-success is-light">
            <button class="delete" @click="notificationSuccess.show = false"></button>
            <p v-text="notificationSuccess.message"></p>
        </div>
        <!-- Notification Error -->
        <div v-if="notificationError.show" class="notification is-danger is-light">
            <button class="delete" @click="notificationError.show = false"></button>
            <p v-text="notificationError.message"></p>
        </div>
    </form>
</template>
  
<script>
    import emailjs from '@emailjs/browser';
    
    export default {
        name: "ContactForm",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: '',
                },
                notificationSuccess: {
                    show: false,
                    message: "Email sent",
                },
                notificationError: {
                    show: false,
                    message: "Sending email ERROR. Please send direct e-mail.",
                },
                isLoading: false,
            };
        },
        methods: {
            async sendEmail() {
                this.isLoading = true;
                
                // service key, template key, form data, {public key}
                emailjs.send('service_3w3cg7n', 'template_x1daw2i', this.form, {publicKey: 'V62KdOFyQ_XL6WTtd'})
                .then(
                    () => {
                        console.log('Email sent!');
                        
                        this.isLoading = false;
                        this.notificationSuccess.show = true;

                        // Reset form after success
                        this.form = { name: '', email: '', message: '' };
                    },
                    (error) => {
                        console.log('Error: ', error.text);
                        
                        this.isLoading = false;
                        this.notificationError.show = true;
                    },
                );
            },
        },
    };
</script>