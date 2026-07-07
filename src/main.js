import "./design-system/main.scss";

import "bootstrap";

import "./foundation";

$("#app").html(`
    <main class="app">

        <div class="container">

            <div class="hero">

                <div class="card shadow-sm">

                    <div class="card-body">

                        <h1 class="display-5 mb-3">
                            JFA
                        </h1>

                        <p class="lead">
                            Projeto iniciado com sucesso.
                        </p>

                        <hr>

                        <ul class="list-group mb-4">

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                Bootstrap carregado
                            </li>

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                Bootstrap Icons carregado
                            </li>

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                Sass funcionando
                            </li>

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                jQuery funcionando
                            </li>

                        </ul>

                        <button class="btn btn-primary">

                            <i class="bi bi-rocket-takeoff-fill"></i>

                            Iniciar

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </main>
`);

$(function () {

    console.info("JFA Foundation iniciada.");

});