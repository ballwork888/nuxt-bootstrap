<template>
    <div class="row">
        <div class="col-12 col-lg-3 offset-lg-2 d-none d-lg-block">
            <NuxtImg src="/images/60957.jpg" class="w-100 rounded mt-2"></NuxtImg>
        </div>
        <div class="col-12 col-lg-4">
            <CardBox>
                <div class="row">
                    <div class="col-12 text-center">
                        <h3 class="">เข้าสู่ระบบ</h3>
                    </div>
                  
                    <div class="col-12">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" placeholder="">
                            <label for="username">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="col-12 mt-3 text-center">
                        <button class="btn btn-lg btn-warning"><i class="fa fa-sign-in"></i> เข้าสู่ระบบ</button>
                    </div>
                </div>


            </CardBox>

        </div>
    </div>
</template>