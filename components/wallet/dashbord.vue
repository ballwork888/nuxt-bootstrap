<template>
    <div class="card balance-box height-equal-2">
        <div class="card-body align-items-center justify-content-center">
            <div class="row">
                <div class="col-12">
                    <div class="balance-img">
                        <NuxtImg src="/images/user.png"  class=""/>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <span class="f-light d-block">เงินคงเหลือ </span>
                    <h3 class="mt-1 text-black"><i class="icon-wallet"></i> 768,987.90</h3>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-6">
                    <NuxtLink to="/wallet/deposit/" class="btn btn-lg btn-success w-100"><i class="fa fa-plus-square"></i> เติมเงิน</NuxtLink>
                </div>
                <div class="col-6">
                    <NuxtLink to="/wallet/withdraw/" class="btn btn-lg btn-warning w-100">ถอนเงิน</NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>