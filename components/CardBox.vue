
<script lang="ts" setup>
const { className } = defineProps<{className?:string}>()
</script>
<template>
    <div class="card mt-2">
        <div class="card-body">
            <slot/>
        </div>
    </div>

</template>