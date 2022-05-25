document.addEventListener("DOMContentLoaded", function (event) {

    dragElement(document.querySelector("#menuStatus"))
    dragElement(document.querySelector(".inventarioMenu"))
    let ComidaContainer = document.querySelector("#comidaContainer")
    let dinheiroContainer = document.querySelector("#dinheiroContainer")
    let horasContainer = document.querySelector("#horaContainer")
    const barraFome = document.querySelector("#progressFome")
    const barraEnergia = document.querySelector("#progressEnergia")
    let rdbOculos = document.querySelector("#rdboculos")
    let rdbChapeu = document.querySelector("#rdbchapeu")
    let rdbBone = document.querySelector("#rdbbone")
    let rdbCartola = document.querySelector("#rdbcartola")
    let rdbMaquininha = document.querySelector("#rdbmaquininha")
    let oculos = false
    let chapeu = false
    let bone = false
    let cartola = false
    let maquininha = false
    let efeito = "bem"
    let fome = 100
    let energia = 100
    let comida = 1
    let dinheiro = 100
    let fe = 0
    let salario = 200
    let horas = 7
    //atributo escondido carisma e stress
    //promoção = aula no reforco


    //Make the DIV element draggagle:

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function nextTick() {
        intervalID = setInterval(() => {
            mexerFome(10, "-")
            mexerHoras(1)
        }, 8000)
    }

    function checkMorte() {
        intervalID = setInterval(() => {
            if (fome <= 0) {
                mostrarAlerta("igao morreu de fome")
            }
            if (energia <= 0) {
                mostrarAlerta("igao morreu de cansaço")
            }
            checkSkin()
            checkHora()
        }, 10)
    }

    let btnCidade = document.querySelector("#btnCidade")
    let btnInventario = document.querySelector("#btnInventario")
    let menuInventario = document.querySelector("#inventarioMenu")
    let btncloseInv = document.querySelector("#btnCloseInv")
    let body = document.querySelector("#body")
    let posicaoMap = 20

    btnCidade.addEventListener("click", mostrarCidade)
    btnCidade.addEventListener("click", () => {
        mexerEnergia(10, "-")
    })

    btnInventario.addEventListener("click", mostrarInv)
    btncloseInv.addEventListener("click", mostrarInv)

    function mostrarInv() {
        menuInventario.classList.toggle("show")
    }

    function adicionarItem(itemName) {
        document.querySelector("#inv" + itemName).classList.remove("labelInv")
    }

    function mostrarCidade() {
        let mapMenu = document.createElement("div");
        let mapMenuHeader = document.createElement("div");
        let mapLocations = document.createElement("div");
        let h4Cidade = document.createElement("h4")

        let btnClose = document.createElement("input");
        let btnCasa = document.createElement("input");
        let btnPraca = document.createElement("input");
        let btnFiap = document.createElement("input");
        let btnIgreja = document.createElement("input");
        let btnLoja = document.createElement("input");



        mapMenu.setAttribute("id", "mapMenu")
        mapMenu.setAttribute("class", "map-menu ")
        mapMenu.setAttribute("style", "left:" + posicaoMap + "px;top:" + posicaoMap + "px")

        body.appendChild(mapMenu)

        mapMenuHeader.setAttribute("class", "header")
        mapMenu.appendChild(mapMenuHeader)

        h4Cidade.append("Cidade✌")
        h4Cidade.setAttribute("class", "headertext")
        mapMenuHeader.appendChild(h4Cidade)

        btnClose.setAttribute("type", "button")
        btnClose.setAttribute("class", "btnClose")
        btnClose.setAttribute("value", "x")
        btnClose.setAttribute("id", "btnCloseMap")
        mapMenuHeader.appendChild(btnClose)

        mapLocations.setAttribute("class", "divBtns")
        mapMenu.appendChild(mapLocations)

        btnCasa.setAttribute("type", "button")
        btnCasa.setAttribute("value", "Casa✌")
        btnCasa.setAttribute("id", "btnCasa")
        mapLocations.appendChild(btnCasa)

        btnPraca.setAttribute("type", "button")
        btnPraca.setAttribute("value", "Praça✌")
        btnPraca.setAttribute("id", "btnPraca")
        mapLocations.appendChild(btnPraca)

        btnFiap.setAttribute("type", "button")
        btnFiap.setAttribute("value", "Fiap✌")
        btnFiap.setAttribute("id", "btnFiap")
        mapLocations.appendChild(btnFiap)

        btnIgreja.setAttribute("type", "button")
        btnIgreja.setAttribute("value", "Igreja✌")
        btnIgreja.setAttribute("id", "btnIgreja")
        mapLocations.appendChild(btnIgreja)

        btnLoja.setAttribute("type", "button")
        btnLoja.setAttribute("value", "Loja✌")
        btnLoja.setAttribute("id", "btnLoja")
        mapLocations.appendChild(btnLoja)

        posicaoMap += 20
        if (posicaoMap >= 380) {
            posicaoMap = 20
        }

        let arrMapMenu = document.querySelectorAll("#mapMenu")
        let arrBtnCloseMap = document.querySelectorAll("#btnCloseMap")
        let arrBtnCasa = document.querySelectorAll("#btnCasa")
        let arrBtnLoja = document.querySelectorAll("#btnLoja")
        let arrBtnFiap = document.querySelectorAll("#btnFiap")
        let arrBtnIgreja = document.querySelectorAll("#btnIgreja")

        for (let Mapi = 0; Mapi < arrMapMenu.length; Mapi++) {
            dragElement(arrMapMenu[Mapi]);
            arrBtnCloseMap[Mapi].addEventListener("click", () => {
                arrMapMenu[Mapi].remove()
            })
            arrBtnCasa[Mapi].addEventListener("click", mostrarCasa)
            arrBtnLoja[Mapi].addEventListener("click", mostrarLoja)
            arrBtnFiap[Mapi].addEventListener("click", mostrarFiap)
            arrBtnIgreja[Mapi].addEventListener("click", mostrarIgreja)
        }


        nextTick()
        checkMorte()
    }


    let posicaoCasa = 20

    function mostrarCasa() {
        let casaMenu = document.createElement("div")
        let casaheader = document.createElement("div")
        let h4casa = document.createElement("h4")
        let casaBtns = document.createElement("div")
        let linha1 = document.createElement("div")
        let linha2 = document.createElement("div")


        let btnClose = document.createElement("input")
        let btnDormir = document.createElement("input")
        let btnCodar = document.createElement("input")
        let btnComer = document.createElement("input")



        h4casa.append("Casa✌")
        casaMenu.setAttribute("class", "casaMenu")
        casaMenu.setAttribute("style", "left:" + posicaoCasa + "px;top:" + posicaoCasa + "px")
        casaheader.setAttribute("class", "header")
        h4casa.setAttribute("class", "headertext")
        casaBtns.setAttribute("class", "divBtns")
        linha1.setAttribute("class", "linha")
        linha2.setAttribute("class", "linha")

        btnClose.setAttribute("class", "btnClose")
        btnClose.setAttribute("id", "btnCloseCasa")
        btnClose.setAttribute("value", "x")
        btnClose.setAttribute("type", "button")

        btnDormir.setAttribute("id", "btnDormir")
        btnDormir.setAttribute("value", "Dormir✌")
        btnDormir.setAttribute("type", "button")

        btnCodar.setAttribute("id", "btnCodar")
        btnCodar.setAttribute("value", "Codar✌")
        btnCodar.setAttribute("type", "button")

        btnComer.setAttribute("id", "btnComer")
        btnComer.setAttribute("value", "Comer✌")
        btnComer.setAttribute("type", "button")

        body.appendChild(casaMenu)

        casaMenu.appendChild(casaheader)
        casaMenu.appendChild(casaBtns)

        casaheader.appendChild(h4casa)
        casaheader.appendChild(btnClose)

        casaBtns.appendChild(linha1)
        casaBtns.appendChild(linha2)


        linha1.appendChild(btnDormir)
        linha1.appendChild(btnCodar)
        linha2.appendChild(btnComer)

        posicaoCasa += 20
        if (posicaoCasa >= 380) {
            posicaoCasa = 20
        }

        let arrCasaMenu = document.querySelectorAll(".casaMenu")
        let arrBtnCloseCasa = document.querySelectorAll("#btnCloseCasa")
        let arrBtnComer = document.querySelectorAll("#btnComer")
        let arrBtnDormir = document.querySelectorAll("#btnDormir")


        for (let casai = 0; casai < arrCasaMenu.length; casai++) {
            dragElement(arrCasaMenu[casai])
            arrBtnCloseCasa[casai].addEventListener("click", () => {
                arrCasaMenu[casai].remove()
            })
            arrBtnComer[casai].addEventListener("click", () => {
                if (comida > 0) {
                    mexerFome(40, "+")
                    mexerComida(1, "-")
                } else {
                    mostrarAlerta("sem comida, vai compra")
                }
            })
            arrBtnDormir[casai].addEventListener("click", () => {
                mexerEnergia(100, "+")
                mexerHoras(6)
            })
        }

    }

    let posicaoLoja = 20

    function mostrarLoja() {
        let LojaMenu = document.createElement("div")
        let Lojaheader = document.createElement("div")
        let h4Loja = document.createElement("h4")
        let LojaBtns = document.createElement("div")
        let linha1 = document.createElement("div")
        let linha2 = document.createElement("div")
        let linha3 = document.createElement("div")
        let linha4 = document.createElement("div")

        let btnClose = document.createElement("input")
        let btnBone = document.createElement("input")
        let btnComida = document.createElement("input")
        let btnOculos = document.createElement("input")
        let btnCartola = document.createElement("input")
        let btnChapeu = document.createElement("input")
        let btnMaquininha = document.createElement("input")
        let btnPs5 = document.createElement("input")


        h4Loja.append("Loja✌")
        LojaMenu.setAttribute("class", "lojaMenu")
        LojaMenu.setAttribute("style", "left:" + posicaoLoja + "px;top:" + posicaoLoja + "px")
        Lojaheader.setAttribute("class", "header")
        h4Loja.setAttribute("class", "headertext")
        LojaBtns.setAttribute("class", "divBtns")
        linha1.setAttribute("class", "linha")
        linha2.setAttribute("class", "linha")
        linha3.setAttribute("class", "linha")
        linha4.setAttribute("class", "linha")

        btnClose.setAttribute("class", "btnClose")
        btnClose.setAttribute("id", "btnCloseLoja")
        btnClose.setAttribute("value", "x")
        btnClose.setAttribute("type", "button")

        btnBone.setAttribute("type", "button")
        btnBone.setAttribute("class", "btnBone")
        btnBone.setAttribute("value", "boné✌(50)")

        btnOculos.setAttribute("type", "button")
        btnOculos.setAttribute("class", "btnOculos")
        btnOculos.setAttribute("value", "óculos✌(50)")
        //banana✌
        btnComida.setAttribute("type", "button")
        btnComida.setAttribute("class", "btnComida")
        btnComida.setAttribute("value", "comida✌(25)")

        btnCartola.setAttribute("type", "button")
        btnCartola.setAttribute("class", "btnCartola")
        btnCartola.setAttribute("value", "Cartola✌(50)")

        btnChapeu.setAttribute("type", "button")
        btnChapeu.setAttribute("class", "btnChapeu")
        btnChapeu.setAttribute("value", "Chapeu✌(50)")

        btnMaquininha.setAttribute("type", "button")
        btnMaquininha.setAttribute("class", "btnMaquininha")
        btnMaquininha.setAttribute("value", "maquininha✌(75)")

        btnPs5.setAttribute("type", "button")
        btnPs5.setAttribute("class", "btnPS5")
        btnPs5.setAttribute("value", "PS5✌(3000)")

        body.appendChild(LojaMenu)

        LojaMenu.appendChild(Lojaheader)
        LojaMenu.appendChild(LojaBtns)

        Lojaheader.appendChild(h4Loja)
        Lojaheader.appendChild(btnClose)

        LojaBtns.appendChild(linha1)
        LojaBtns.appendChild(linha2)
        LojaBtns.appendChild(linha3)
        LojaBtns.appendChild(linha4)

        linha1.appendChild(btnComida)
        linha1.appendChild(btnBone)
        linha2.appendChild(btnOculos)
        linha2.appendChild(btnCartola)
        linha3.appendChild(btnChapeu)
        linha3.appendChild(btnMaquininha)
        linha4.appendChild(btnPs5)

        posicaoLoja += 20
        if (posicaoLoja >= 380) {
            posicaoLoja = 20
        }

        let arrLojaMenu = document.querySelectorAll(".lojaMenu")
        let arrBtnCloseLoja = document.querySelectorAll("#btnCloseLoja")
        let arrBtnComida = document.querySelectorAll(".btnComida")
        let arrBtnOculos = document.querySelectorAll(".btnOculos")
        let arrBtnChapeu = document.querySelectorAll(".btnChapeu")
        let arrBtnBone = document.querySelectorAll(".btnBone")
        let arrBtnCartola = document.querySelectorAll(".btnCartola")
        let arrBtnMaquininha = document.querySelectorAll(".btnMaquininha")
        let arrbtnPS5 = document.querySelectorAll(".btnPS5")



        for (let lojai = 0; lojai < arrLojaMenu.length; lojai++) {
            dragElement(arrLojaMenu[lojai])
            arrBtnCloseLoja[lojai].addEventListener("click", () => {
                arrLojaMenu[lojai].remove()
            })
            arrBtnComida[lojai].addEventListener("click", () => {
                if (dinheiro >= 25) {
                    mexerComida(1, "+")
                    mexerDinheiro(25, "-")
                } else {
                    mostrarAlerta("ce ta pobre, sai daqui")
                }

            })
            arrBtnOculos[lojai].addEventListener("click", () => {
                if (oculos == true) {
                    mostrarAlerta("ce ja tem o oculos, sai daqui")
                } else if (dinheiro >= 50) {
                    mexerDinheiro(50, "-")
                    oculos = true
                    checkSkin()
                    adicionarItem("oculos")
                } else {
                    mostrarAlerta("ce ta pobre, sai daqui")
                }
            })
            arrBtnChapeu[lojai].addEventListener("click", () => {
                if (chapeu == true) {
                    mostrarAlerta("ce ja tem o chapeu, sai daqui")
                } else if (dinheiro >= 50) {
                    mexerDinheiro(50, "-")
                    chapeu = true
                    checkSkin()
                    adicionarItem("chapeu")
                } else {
                    mostrarAlerta("ce ta pobre, sai daqui")//maconha✌✔
                }
            })
            arrBtnBone[lojai].addEventListener("click", () => {
                if (bone == true) {
                    mostrarAlerta("ce ja tem o bone, sai daqui")
                } else if (dinheiro >= 50) {
                    mexerDinheiro(50, "-")
                    bone = true
                    checkSkin()
                    adicionarItem("bone")
                } else {
                    mostrarAlerta("ce ta pobre, sai daqui")
                }
            })
            arrBtnCartola[lojai].addEventListener("click", () => {
                if (cartola == true) {
                    mostrarAlerta("ce ja tem o cartola, sai daqui")
                } else if (dinheiro >= 50) {
                    mexerDinheiro(50, "-")
                    cartola = true
                    checkSkin()
                    adicionarItem("cartola")
                } else {
                    mostrarAlerta("ce ta pobre, sai daqui")
                }
            })
            arrBtnMaquininha[lojai].addEventListener("click", () => {
                if (maquininha == true) {
                    mostrarAlerta("ce ja tem o maquininha, sai daqui")
                } else if (dinheiro >= 75) {
                    mexerDinheiro(75, "-")
                    maquininha = true
                    checkSkin()
                    adicionarItem("maquininha")
                } else {
                    mostrarAlerta("ce ta pobre, sai daqui")
                }
            })
            arrbtnPS5[lojai].addEventListener("click", () => {
                if (dinheiro >= 3000) {
                    dinheiro -= 3000
                    document.querySelector(".winMenu").style.display = "block"
                } else {
                    mostrarAlerta("saia da minha loja pobre, vc não é digno")
                }
            })

        }

    }

    let posicaoAlerta = 20

    function mostrarAlerta(codigo) {
        let AlertMenu = document.createElement("div")
        let Alertheader = document.createElement("div")
        let h4Alert = document.createElement("h4")
        let h1Alert = document.createElement("h1")

        let btnOk = document.createElement("input")

        AlertMenu.setAttribute("class", "alerta")
        AlertMenu.setAttribute("style", "left:" + posicaoAlerta + "px;top:" + posicaoAlerta + "px")


        Alertheader.setAttribute("class", "header alerta-header")

        h4Alert.setAttribute("class", "headertext")
        h4Alert.append("Alerta✌")

        h1Alert.setAttribute("class", "textAlert")
        h1Alert.append(codigo + "✌")

        btnOk.setAttribute("type", "button")
        btnOk.setAttribute("class", "btnOkAlert")
        btnOk.setAttribute("id", "btnOkAlert")
        btnOk.setAttribute("value", "Ok")

        body.appendChild(AlertMenu)

        AlertMenu.appendChild(Alertheader)
        AlertMenu.appendChild(h1Alert)
        AlertMenu.appendChild(btnOk)

        Alertheader.appendChild(h4Alert)

        posicaoAlerta += 20
        if (posicaoAlerta >= 380) {
            posicaoAlerta = 20
        }

        let arrAlertMenu = document.querySelectorAll(".alerta")
        let arrbtnOk = document.querySelectorAll("#btnOkAlert")


        for (let alerti = 0; alerti < arrAlertMenu.length; alerti++) {
            dragElement(arrAlertMenu[alerti])

            arrbtnOk[alerti].addEventListener("click", () => {
                arrAlertMenu[alerti].remove()
            })


        }

    }

    let posicaoFiap = 20

    function mostrarFiap() {
        let fiapMenu = document.createElement("div")
        let fiapheader = document.createElement("div")
        let h4fiap = document.createElement("h4")
        let fiapBtns = document.createElement("div")
        let linha1 = document.createElement("div")
        let linha2 = document.createElement("div")


        let btnClose = document.createElement("input")
        let btnTrabalhar = document.createElement("input")
        let btnCafe = document.createElement("input")


        h4fiap.append("Fiap✌")
        fiapMenu.setAttribute("class", "fiapMenu")
        fiapMenu.setAttribute("style", "left:" + posicaoFiap + "px;top:" + posicaoFiap + "px")
        fiapheader.setAttribute("class", "header")
        h4fiap.setAttribute("class", "headertext")
        fiapBtns.setAttribute("class", "divBtns")
        linha1.setAttribute("class", "linha")
        linha2.setAttribute("class", "linha")

        btnClose.setAttribute("class", "btnClose")
        btnClose.setAttribute("id", "btnCloseFiap")
        btnClose.setAttribute("value", "x")
        btnClose.setAttribute("type", "button")

        btnTrabalhar.setAttribute("id", "btnTrabalhar")
        btnTrabalhar.setAttribute("value", "Trabalhar✌")
        btnTrabalhar.setAttribute("type", "button")

        btnCafe.setAttribute("id", "btnCafe")
        btnCafe.setAttribute("value", "Cafe✌")
        btnCafe.setAttribute("type", "button")


        body.appendChild(fiapMenu)

        fiapMenu.appendChild(fiapheader)
        fiapMenu.appendChild(fiapBtns)

        fiapheader.appendChild(h4fiap)
        fiapheader.appendChild(btnClose)

        fiapBtns.appendChild(linha1)
        fiapBtns.appendChild(linha2)


        linha1.appendChild(btnTrabalhar)
        linha1.appendChild(btnCafe)


        posicaoFiap += 20
        if (posicaoFiap >= 380) {
            posicaoFiap = 20
        }

        let arrFiapMenu = document.querySelectorAll(".fiapMenu")
        let arrBtnCloseFiap = document.querySelectorAll("#btnCloseFiap")
        let arrBtnTrabalhar = document.querySelectorAll("#btnTrabalhar")

        for (let fiapi = 0; fiapi < arrFiapMenu.length; fiapi++) {
            dragElement(arrFiapMenu[fiapi])
            arrBtnCloseFiap[fiapi].addEventListener("click", () => {
                arrFiapMenu[fiapi].remove()
            })
            arrBtnTrabalhar[fiapi].addEventListener("click", () => {
                if (horas >= 6 && horas <= 10) {
                    if (energia >= 40) {
                        let doisporcent = Math.floor(Math.random() * 50) + 1
                        mexerDinheiro(salario, "+")
                        mexerHoras(8)
                        if (doisporcent == 20) {
                            mostrarAlerta("vc foi golpeado por uma aluna😯, mas a pancada foi tao forte👊, que vc esqueceu quem foi😕")
                            efeito = "machucado"
                        }
                        if (efeito == "bem") {
                            mexerEnergia(40, "-")
                            mexerFome(20, "-")
                        } else if (efeito == "machucado") {
                            if (energia >= 50) {
                                mexerFome(35, "-")
                                mexerEnergia(50, "-")
                            } else {
                                mostrarAlerta("ce ta cansadão e malzão, vai dormir")
                            }
                        }
                    } else {
                        mostrarAlerta("ce ta cansadão, vai dormir")
                    }
                } else {
                    mostrarAlerta("nao ta na hora de trabalhar volta, sai daqui")
                }
            })

        }

    }

    let posicaoIgreja = 20

    function mostrarIgreja() {
        let igrejaMenu = document.createElement("div")
        let igrejaheader = document.createElement("div")
        let h4igreja = document.createElement("h4")
        let igrejaBtns = document.createElement("div")
        let linha1 = document.createElement("div")
        let linha2 = document.createElement("div")


        let btnClose = document.createElement("input")
        let btnRezar = document.createElement("input")
        let btnPadre = document.createElement("input")


        h4igreja.append("igreja✌")
        igrejaMenu.setAttribute("class", "igrejaMenu")
        igrejaMenu.setAttribute("style", "left:" + posicaoIgreja + "px;top:" + posicaoIgreja + "px")
        igrejaheader.setAttribute("class", "header")
        h4igreja.setAttribute("class", "headertext")
        igrejaBtns.setAttribute("class", "divBtns")
        linha1.setAttribute("class", "linha")
        linha2.setAttribute("class", "linha")

        btnClose.setAttribute("class", "btnClose")
        btnClose.setAttribute("id", "btnCloseIgreja")
        btnClose.setAttribute("value", "x")
        btnClose.setAttribute("type", "button")

        btnRezar.setAttribute("id", "btnRezar")
        btnRezar.setAttribute("value", "Rezar✌")
        btnRezar.setAttribute("type", "button")

        btnPadre.setAttribute("id", "btnPadre")
        btnPadre.setAttribute("value", "Falar com o padre✌")
        btnPadre.setAttribute("type", "button")


        body.appendChild(igrejaMenu)

        igrejaMenu.appendChild(igrejaheader)
        igrejaMenu.appendChild(igrejaBtns)

        igrejaheader.appendChild(h4igreja)
        igrejaheader.appendChild(btnClose)

        igrejaBtns.appendChild(linha1)
        igrejaBtns.appendChild(linha2)

        linha1.appendChild(btnRezar)
        linha2.appendChild(btnPadre)



        posicaoIgreja += 20
        if (posicaoIgreja >= 380) {
            posicaoIgreja = 20
        }

        let arrIgrejaMenu = document.querySelectorAll(".igrejaMenu")
        let arrBtnCloseIgreja = document.querySelectorAll("#btnCloseIgreja")
        let arrBtnRezar = document.querySelectorAll("#btnRezar")
        let arrBtnPadre = document.querySelectorAll("#btnPadre")

        for (let igrejai = 0; igrejai < arrIgrejaMenu.length; igrejai++) {
            dragElement(arrIgrejaMenu[igrejai])
            arrBtnCloseIgreja[igrejai].addEventListener("click", () => {
                arrIgrejaMenu[igrejai].remove()
            })
            arrBtnRezar[igrejai].addEventListener("click", () => {
                mexerFe(1, "+")
                mexerHoras(1)
                mexerFome(5, "-")
            })
            arrBtnPadre[igrejai].addEventListener("click",mostrarPadre)
        }

    }

    let posicaoPadre = 20

    function mostrarPadre() {
        let padreMenu = document.createElement("div")
        let padreheader = document.createElement("div")
        let h4padre = document.createElement("h4")
        let padreContent =document.createElement("div")
        let imgpadre = document.createElement("img")
        let ppadre = document.createElement("p")

        let btnClose = document.createElement("input")
        let btnFalar = document.createElement("input")


        h4padre.append("padre✌")
        padreMenu.setAttribute("class", "padreMenu")
        padreMenu.setAttribute("style", "left:" + posicaoPadre + "px;top:" + posicaoPadre + "px")
        padreheader.setAttribute("class", "header")
        h4padre.setAttribute("class", "headertext")
        padreContent.setAttribute("class","padreContent divBtns")
        
        imgpadre.setAttribute("class","iconPadre")
        imgpadre.setAttribute("src","images/padre.jpg")

        btnClose.setAttribute("class", "btnClose")
        btnClose.setAttribute("id", "btnClosePadre")
        btnClose.setAttribute("value", "x")
        btnClose.setAttribute("type", "button")

        btnFalar.setAttribute("type","button")
        btnFalar.setAttribute("value","falar✌")
        btnFalar.setAttribute("id","btnFalar")





        body.appendChild(padreMenu)

        padreMenu.appendChild(padreheader)
        padreMenu.appendChild(padreContent)

        padreheader.appendChild(h4padre)
        padreheader.appendChild(btnClose)

        padreContent.appendChild(imgpadre)
        padreContent.appendChild(btnFalar)
        padreContent.appendChild(ppadre)


        posicaoPadre += 20
        if (posicaoPadre >= 380) {
            posicaoPadre = 20
        }

        let arrPadreMenu = document.querySelectorAll(".padreMenu")
        let arrBtnClosePadre = document.querySelectorAll("#btnClosePadre")
        let arrBtnFalar = document.querySelectorAll("#btnFalar")

        for (let padrei = 0; padrei < arrPadreMenu.length; padrei++) {
            dragElement(arrPadreMenu[padrei])
            arrBtnClosePadre[padrei].addEventListener("click", () => {
                arrPadreMenu[padrei].remove()
            })
            arrBtnFalar[padrei].addEventListener("click",()=>{
                ppadre.innerHTML = "reza bastante irmao, dps fala comigo, amem"
            })

        }
    }




    function checkSkin() {
        if (rdbOculos.checked == true && oculos == true) {
            document.querySelector("#icon").src = "images/igorOculos.jpg"

        } else if (rdbChapeu.checked == true && chapeu == true) {
            document.querySelector("#icon").src = "images/igorChapeu.png"

        } else if (rdbBone.checked == true && bone == true) {
            document.querySelector("#icon").src = "images/igorBone.png"

        } else if (rdbCartola.checked == true && cartola == true) {
            document.querySelector("#icon").src = "images/igorMafia.png"

        } else if (rdbMaquininha.checked == true && maquininha == true) {
            document.querySelector("#icon").src = "images/igorCria.png"
        }
        else {
            document.querySelector("#icon").src = "images/igor.jpg"
        }
        if (rdbOculos.checked == true) {
            salario = 150
        }
    }
    7


    function mexerFome(quant, tipo) {
        fome = eval(fome + tipo + quant)
        if (fome >= 100) {
            mostrarAlerta("igao ta cheio")
            fome = 100
            comida += 1
        }
        barraFome.style.width = fome + "%"
    }

    function mexerEnergia(quant, tipo) {
        energia = eval(energia + tipo + quant)
        if (energia >= 100) {
            energia = 100
        }
        barraEnergia.style.width = energia + "%"
    }

    function mexerDinheiro(quant, tipo) {
        dinheiro = eval(dinheiro + tipo + quant)
        dinheiroContainer.innerHTML = dinheiro
    }

    function mexerComida(quant, tipo) {
        comida = eval(comida + tipo + quant)
        ComidaContainer.innerHTML = comida
    }

    function mexerFe(quant, tipo) {
        fe = eval(fe + tipo + quant)
        feContainer.innerHTML = fe
    }

    function mexerHoras(quant) {
        horas += quant
        if (horas > 23) {
            horas -= 24
        }
        horasContainer.innerHTML = horas + ":00"
    }

    function checkHora() {
        let darkmodeContainer = document.querySelector("#darkmode")
        let icon = document.querySelector("#horaIcon")
        if (horas > 19 || horas < 6) {
            darkmodeContainer.setAttribute("class", "darkmode")
            icon.setAttribute("class", "bi bi-moon")
        } else {
            darkmodeContainer.setAttribute("class", " ")
            icon.setAttribute("class", "bi bi-sun")
        }
    }
})
