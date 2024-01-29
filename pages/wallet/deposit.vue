<template>
    <div>
        <div class="row">
            <div class="col-12 col-lg-4">
                <WalletDashbord></WalletDashbord>
            </div>
            <div class="col-12 col-lg-8">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <h2 class="text-primary"><i class="fa fa-plus-square"></i> เติมเงินเข้ากระเป๋า</h2>
                                    </div>
                                </div>
                                <hr>
                                <div class="row mb-2">
                                    <div class="col-12 col-lg-8 offset-lg-2 text-center">
                                        <input type="number" class="form-control form-control-lg mb-2" placeholder="จำนวนเงินที่ต้องการ"/>
                                        <buttom class="btn btn-outline-secondary me-1 mb-1">100</buttom>
                                        <buttom class="btn btn-outline-secondary me-1 mb-1">200</buttom>
                                        <buttom class="btn btn-outline-secondary me-1 mb-1">300</buttom>
                                        <buttom class="btn btn-outline-secondary me-1 mb-1">400</buttom>
                                        <buttom class="btn btn-outline-secondary mb-1">500</buttom>
                                        
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 mb-2 text-center">
                                        <h4>เลือกวิธีชำระเงิน</h4>
                                    </div>
                                    <div class="col-6 col-lg-4 offset-lg-2">
                                        <div class="card card-hover">
                                            <NuxtLink to="#">
                                                <NuxtImg src="/images/ThaiQR.jpg" class="w-100 rounded"></NuxtImg>
                                            </NuxtLink>
                                        </div>
                                        
                                    </div>
                                    <div class="col-6 col-lg-4">
                                        <div class="card card-hover">
                                            <NuxtLink to="#">
                                                <NuxtImg src="/images/bank_transfer.jpg" class="w-100 rounded"></NuxtImg>
                                            </NuxtLink>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>