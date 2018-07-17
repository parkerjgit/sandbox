<template>
    <ul v-if="projects && projects.length">
        <li v-for="project of projects">
            <p><strong>{{project.id}}</strong></p>
            <p>{{project.name}}</p>
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
        projects() {
            return this.$store.getters.projects
        }
    },
    created() {
        this.$store.dispatch('fetchProjects')
    }
}
</script>
