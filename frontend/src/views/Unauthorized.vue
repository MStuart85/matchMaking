<template>
    <div class="unauthorized shadow rounded">
        <h2 class="text-center">Sorry, you are unauthorized to view this page.</h2>
    </div>
</template>

<script>
export default {
    name: "Unauthorized"
};
</script>

<style scoped>
.unauthorized {
    background: rgba(248, 249, 250, 0.94);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5rem;
}
</style>
