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
                                        <h2 class="text-primary"><i class="icofont icofont-money"></i> ถอนเงิน</h2>
                                    </div>
                                </div>
                                <hr>
                                <div class="row mb-2">
                                    <div class="col-12 col-lg-8 offset-lg-2 text-center">
                                        <input type="number" class="form-control form-control-lg mb-2" placeholder="จำนวนเงินที่ต้องการ"/>
                                    </div>
                                    <div class="col-12 col-lg-8 offset-lg-2 text-center">
                                        <select class="form-select form-control-lg digits">
                                            <option>-- เลือกบัญชีธนาคาร --</option>
                                        </select>
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