<template>
    <div class="notfound shadow rounded">
        <h2 class="text-center">Sorry, the page you are trying to view does not exist.</h2>
    </div>
</template>

<script>
export default {
    name: "NotFound"
};
</script>

<style scoped>
.notfound {
    background: rgba(248, 249, 250, 0.94);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5rem;
}
</style>
