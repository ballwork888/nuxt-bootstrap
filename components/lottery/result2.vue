<script lang="ts" setup>
const { title } = defineProps<{title?:string}>()
</script>

<template>
    <div class="col-12">
        <div class="card social-widget">
            <div class="card-body">
                <div class="row align-middle">
                    <div class="col-12 text-center">
                        <h4 class="text-primary">{{title}}</h4>
                    </div>
                    <div class="col-12 text-center">
                        <h2 class="text-success">X X X X X X</h2>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-6 text-center border-end">
                        <strong>3ตัวบน</strong>
                        <h3>3 4 5</h3>
                    </div>
                    <div class="col-6 text-center border-end">
                        <strong>2ตัวล่าง</strong>
                        <h3>3  5</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>