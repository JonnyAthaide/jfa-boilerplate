import "./design-system/main.scss";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import { bootstrap } from "./foundation";

bootstrap();

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

<p>
Commit 003 — Core inicializado.
</p>

</div>

</div>

</div>

</div>

</main>
`);