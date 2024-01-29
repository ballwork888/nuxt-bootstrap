
<template>
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6 col-lg-5 offset-lg-1">
                        <button class="btn btn-lg w-100 btn-warning">กดเลขเอง</button>
                    </div>
                    <div class="col-6 col-lg-5">
                        <button class="btn btn-lg w-100 btn-outline-secondary">เลือกจากแผง</button>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 col-lg-6 offset-lg-3">

                        <div class="row">
                            <div class="col-12 col-lg-8 text-center">
                                <div class="btn-group-vertical ml-4 mt-4" role="group">
                                    <div class="btn-group">
                                        <input class="text-center form-control-lg mb-2" id="code" maxlength="3">
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '1';">1</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '2';">2</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '3';">3</button>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '4';">4</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '5';">5</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '6';">6</button>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '7';">7</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '8';">8</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '9';">9</button>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value.slice(0, -1);">&lt;</button>
                                        <button type="button" class="btn btn-outline-secondary py-3"
                                            onclick="document.getElementById('code').value=document.getElementById('code').value + '0';">0</button>
                                        <button type="button" class="btn btn-success py-3" onclick="">Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>