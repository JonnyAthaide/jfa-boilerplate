import "./design-system/main.scss";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./foundation";

$("#app").html(`
    <main class="app py-5">

        <div class="container">

            <div class="col-lg-8 mx-auto">

                <div class="card shadow">

                    <div class="card-body p-5">

                        <h1 class="display-4 mb-3">
                            JFA Boilerplate
                        </h1>

                        <p class="lead">
                            Foundation carregada com sucesso.
                        </p>

                        <hr>

                        <ul class="list-group mb-4">

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                Bootstrap
                            </li>

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                Bootstrap Icons
                            </li>

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                Sass
                            </li>

                            <li class="list-group-item">
                                <i class="bi bi-check-circle-fill text-success"></i>
                                jQuery
                            </li>

                        </ul>

                        <button class="btn btn-primary">
                            <i class="bi bi-rocket-takeoff-fill"></i>
                            Iniciar
                        </button>

                        <button
    class="btn btn-success mt-3"
    data-bs-toggle="modal"
    data-bs-target="#modalTeste">

    Testar Modal

</button>

<div class="modal fade" id="modalTeste">

    <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-header">

                <h5 class="modal-title">
                    Bootstrap OK
                </h5>

                <button
                    class="btn-close"
                    data-bs-dismiss="modal">
                </button>

            </div>

            <div class="modal-body">

                O JavaScript do Bootstrap está funcionando.

            </div>

        </div>

    </div>

</div>

                    </div>

                </div>

            </div>

        </div>

    </main>
`);