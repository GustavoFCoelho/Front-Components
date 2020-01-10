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
