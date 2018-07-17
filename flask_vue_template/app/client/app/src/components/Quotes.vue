<template>
    <ul v-if="quotes && quotes.length">
        <li v-for="quote of quotes">
            <p><strong>{{quote.body}}</strong></p>
            <p>{{quote.author}}</p>
        </li>
    </ul>
    <!-- <ul v-else-if="errors && errors.length">
        <li v-for="error of errors">
            <p>{{error.message}}</p>
        </li>
    </ul> -->
    <!-- test: {{test.name}} <br> -->
    <!-- errors: {{errors}} -->
</template>

<script>
export default {
    computed: {
        quotes() {
            return this.$store.getters.quotes
        }
    },
    created() {
        this.$store.dispatch('fetchQuotes')
    }
}
</script>
