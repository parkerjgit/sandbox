<template>
    <form action="http://127.0.0.1:5000/api/" method="post">
        <div>
            <label for="name">Author:</label>
            <input type="text" id="name" name="user_name">
        </div>
        <div>
            <label for="msg">Body:</label>
            <textarea id="msg" name="user_message"></textarea>
        </div>
        <div class="button">
            <button type="submit">Send your message</button>
        </div>
    </form>
</template>

<script>
export default {
    computed: {
        // quotes() {
        //     return this.$store.getters.quotes
        // }
    },
    created() {
        // this.$store.dispatch('fetchQuotes')
    }
}
</script>