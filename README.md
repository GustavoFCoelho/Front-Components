# Front-Components

---------------------------------------------------------------------------------------------------
--                                         Full Page Menu                                        --
---------------------------------------------------------------------------------------------------
 ```
 <div class="menu-wrap">
     <input type="checkbox" class="toggler">
     <div class="hamburguer">
         <div></div>
     </div>
     <div class="menu">
         <div>
             <div>
                 <ul>
                     <li><a href="#">Paciente</a></li>
                     <li><a href="#">Agenda</a></li>
                     <li><a href="#">Medicamentos</a></li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
    
 ```

---------------------------------------------------------------------------------------------------
--                                         Full Page Menu SideBar                                --
---------------------------------------------------------------------------------------------------
 ```
<div class="menu-wrap">
    <input type="checkbox" class="toggler">
    <div class="hamburguer">
        <div></div>
    </div>
    <div class="menu">
        <div>
            <div>
                <ul>
                    <li><a>Paciente</a>
                        <ul class="sub-menu bg-dark">
                            <li class="sub-item">Cadastro</li>
                            <li class="sub-item">Prontuario</li>
                            <li class="sub-item">Responsável</li>
                        </ul>
                    </li>
                    <li><a>Agenda</a>
                        <ul class="sub-menu bg-dark">
                            <li class="sub-item">Eventos</li>
                            <li class="sub-item">Novo Evento</li>
                        </ul>
                    </li>
                    <li><a>Medicamentos</a>
                        <ul class="sub-menu bg-dark">
                            <li class="sub-item">Novo Medicamento</li>
                            <li class="sub-item">Agenda de Medicamentos</li>
                            <li class="sub-item">Nova Medicação</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    
 ```


---------------------------------------------------------------------------------------------------
--                                         Markup Example                                        --
---------------------------------------------------------------------------------------------------
```
<div class="bottom-markup">
    <div class="main-bottom bg-dark">
        <i class="fab fa-flipboard fa-2x"></i>
    </div>
    <div class="items-markup">
        <div class="bg-dark">
            <i class="fa fa-user fa-2x"></i>
            <label>Paciente</label>
        </div>
        <div class="bg-dark">
            <i class="fa fa-pills fa-2x"></i>
            <label>Medicamentos</label>
        </div>
        <div class="bg-dark">
            <i class="fa fa-calendar-week fa-2x"></i>
            <label>Agenda</label>
        </div>
        <div class="bg-dark">
            <i class="fa fa-calendar-week fa-2x"></i>
            <label>Agenda</label>
        </div>
    </div>
</div>
```

---------------------------------------------------------------------------------------------------
--                                         Card Example                                          --
---------------------------------------------------------------------------------------------------
```
<div class="container flex-card">
        <div class="small-card text-center">
            <h2 class="card-title">
                Agenda de Medicamentos
            </h2>
            <div class="card-content mt-4">
                <a class="btn-blue" href="#">Acessar <i class="fa fa-pills"></i></a>
            </div>
        </div>
        <div class="small-card text-center">
            <h2 class="card-list">
                Prontuario
            </h2>
            <div class="card-content">
                <i class="fa fa-clipboard-check mt-2 fa-2x"></i>
            </div>
        </div>
        <div class="small-card text-center">
            <h2 class="card-title">
                Agenda de Compromissos
            </h2>
            <div class="card-content">
                <i class="fa fa-clipboard-list fa-2x mt-2"></i>
            </div>
        </div>
    </div>
```
---------------------------------------------------------------------------------------------------
--                                         Side Menu Example                                     --
---------------------------------------------------------------------------------------------------
```
 <div class="side-menu-wrap">
        <input type="checkbox" class="toggler">
        <div class="hamburguer">
            <div></div>
        </div>
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <a href="#"><li class="menu-item">Paciente</li></a>
                        <a href="#"><li class="menu-item">Agenda</li></a>
                        <a href="#"><li class="menu-item">Medicamentos</li></a>
                        <a href="#"><li class="menu-item">Financeiro</li></a>
                        <a href="#"><li class="menu-item">Financeiro</li></a>
                        <a href="#"><li class="menu-item">Financeiro</li></a>
                        <a href="#"><li class="menu-item">Financeiro</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
```
---------------------------------------------------------------------------------------------------
--                                         Input Field Example                                   --
---------------------------------------------------------------------------------------------------
```
<div class="container mt-5">
        <div class="form-row">
            <div class="form-group">
                <input type="text" class="field field-left" value="" required>
                <label class="text-input">Nome</label>
            </div>
            <div class="form-group">
                    <input type="text" class="field field-left" value="" required>
                    <label class="text-input">Sobrenome</label>
                </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <input type="text" class="field field-left" value="" required>
                <label class="text-input">Email</label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <input type="text" class="field field-upper" value="" required>
                <label class="text-input">Telefone</label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <input type="password" class="field field-down" value="" required>
                <label class="text-input">Passoword</label>
            </div>
        </div>
    </div>
```

