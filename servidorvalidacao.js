
        // Obtém uma referência para o botão pelo seu ID
        const botao = document.getElementById('btn');

        // Adiciona um ouvinte de eventos para o evento 'click'
        botao.addEventListener('click', function() {
            
            function logar(){
                var login = document.getElementById('usuario-login').value;
                var senha = document.getElementById('usuario-password').value;
                
                if(login == "admin" && senha == "admin"){
                    alert('Sucesso!')
                    location.href = "validado.html";
                }else{
                    alert('Usuario ou senha incorretos')
                }
            }
            
        });