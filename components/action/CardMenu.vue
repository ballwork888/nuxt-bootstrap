

<script setup lang="ts">

const actions = [
    {
        label: 'แทงหวย',
        to: '/lottery/bet',
        icon: '<i class="icofont icofont-game-console f-30 "></i>'
    },
    {
        label: 'เกมส์เดิมพัน',
        to: '/lottery/game',
        icon: '<i class="icofont icofont-game-pad f-30"></i>'
    },
    {
        label: 'หวยชุด',
        to: '/lottery/group',
        icon: '<i class="icofont icofont-ui-keyboard f-30"></i>'
    },
    {
        label: 'แจ๊กพอต',
        to: '/lottery/jackpot',
        icon: '<i class="icofont icofont-award f-30"></i>'
    },
    {
        label: 'ผลรางวัล',
        to: '/lottery/result',
        icon: '<i class="icon-announcement f-30"></i>'
    },
    {
        label: 'โพยหวย',
        to: '/lottery/bet',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        label: 'สร้างเลขชุด',
        to: '/lottery/bet',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        label: 'แนะนำเพื่อน',
        to: '/lottery/bet',
        icon: '<i class="icofont icofont-users-social f-30"></i>'
    },
    {
        label: 'เข้ากลุ่ม',
        to: '/lottery/bet',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        label: 'ชวนเพื่อน',
        to: '/lottery/bet',
        icon: '<i class="icofont icofont-users f-30"></i>'
    },
]
</script>

<template>
    <div class="row">
        <template v-for="action in actions">
            <div class="col-6 col-lg-3 mb-2">
                <NuxtLink :to="action.to" class="">
                    <div class="card small-widget mb-sm-0">
                        <div class="card-body primary">
                            <div class="d-flex align-items-end gap-1">
                                <h4 class="text-danger">{{action.label}}</h4><span class="font-primary f-12 f-w-500"></span>
                            </div>
                            <div class="bg-gradient primary-hover">
                                <span v-html="action.icon"></span>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
                
            </div>
        </template>



    </div>
</template>