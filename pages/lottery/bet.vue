
<script setup lang="ts">

const lotteries = [
    {
        name: 'หวยยี่กี',
        to: '/lottery/enterlottery?lotto=หวยยี่กี',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หวยรัฐบาล',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หวยปิงปอง',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หุ้นไต้หวัน',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หุ้นจีน รอบบ่าย',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หวยมาเลย์ วันเสาร์',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หวยฮานอย',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },
    {
        name: 'หุ้นดาวโจนส์',
        to: '/lottery/enterlottery',
        icon: '<i class="fa fa-codiepie f-30"></i>'
    },

]
</script>
<template>
    <div>
        <div class="row">
            <template v-for="lottery in lotteries">
                <div class="col-12 col-lg-3">
                    <div class="card course-box widget-course">
                        <div class="card-body">
                          <div class="course-widget">
                            <div class="course-icon">
                              <svg class="fill-icon">
                                <use href="@/assets/svg/icon-sprite.svg#course-1"></use>
                              </svg>
                            </div>
                            <div>
                              <h4 class="m-b0">{{lottery.name}}</h4>
                              <NuxtLink :to=lottery.to class="btn btn-warning f-light">
                                แทงหวย<span class="ms-2">
                                    <svg class="fill-icon f-light">
                                      <use href="@/assets/svg/icon-sprite.svg#arrowright"></use>
                                    </svg></span>
                              </NuxtLink>
                              
                            </div>
                          </div>
                        </div>
                        <ul class="square-group">
                          <li class="square-1 warning"></li>
                          <li class="square-1 danger"></li>
                          <li class="square-2 warning1"></li>
                          <li class="square-3 danger"></li>
                          <li class="square-4 light"></li>
                          <li class="square-5 warning"></li>
                          <li class="square-6 danger"></li>
                          <li class="square-7 danger"></li>
                        </ul>
                      </div>
                </div>
            </template>
            
        </div>
    </div>
</template>