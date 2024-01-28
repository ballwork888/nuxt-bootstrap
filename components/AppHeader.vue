<template>
    <header class="">
        <nav class="navbar navbar-expand-md gradient-custom" aria-label="">
            <div class="container">
                <NuxtLink to="/" class="navbar-brand">
                    <NuxtImg src="/logo.png" />
                </NuxtLink>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL"
                    aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample07XL">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink to="/" class="nav-link">หน้าแรก</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/dashbord" class="nav-link">หวยออนไลน์</NuxtLink>
                        </li>

                    </ul>

                </div>
                <div class="text-end">
                    <NuxtLink to="/login" class="btn btn-dark me-2"><i class="fa fa-sign-in"></i> เข้าสู่ระบบ</NuxtLink>
                    <NuxtLink to="/register" class="btn btn-warning">สมัครสมาชิก</NuxtLink>
                    <NuxtLink to="/dashbord" class="ms-3 username">สวัสดี, สมพงษ์ <i class="fa-solid fa-user"></i></NuxtLink>
                    
                </div>
            </div>
        </nav>
    </header>
</template>