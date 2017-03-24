/* Você tem uma tabela onde vai conter varios dados de um cliente por exemplo, e na ultima coluna da tabela você vai ter um checkbox.
Você quer que quando selecionar o checkbox principal, todos os outros seja selecionado e quando todas as checkbox filhas sejam sejam selecionadas, a checkbox principal fique selecionada e que todas essas informações você consiga recuperar.
Vamos agora ao código:
*/

/* 1- É necessário que você faça uma função que você consiga reutilizar varias vezes, dentro do seu arquivo js no controller do angular, você irá colocar o seguinte código. */

    /*
    * Manipula o uso de checkbox em uma listagem
    */

    //Armazena as chaves dos checkboxes existentes na página através do ng-init
    $scope.checkboxes= [];

    //Armazena o array de elementos selecionados
    $scope.selecionados = [];

    //Definimos como false o status de "todos" para os checkboxes principais
    $scope.todos= false;

    $scope.checktodos = function (){

        $timeout(function() {

            if ($('#selecionartudo').is(':checked')) {
                
                $( ".checkboxfilho" ).each(function( index ) {
                  if (!$(this).is(':checked')) { $(this).click(); }
                });

            }else{

                $( ".checkboxfilho" ).each(function( index ) {
                  if ($(this).is(':checked')) { $(this).click(); }
                });
            }

        },1);

    }
    
    //Quano um checkbox é alterado verificamos se a chave do mesmo já existe no array(selecionados)
    $scope.alternar = function (chave, lista) {
        
        var idx = lista.indexOf(chave);

        if ( idx > -1) {//Se existe removemos do array
        lista.splice(idx, 1);
        }
        else {//Senao.. incluimos o mesmo no array
        lista.push(chave);
        }

    };
    

    //Recebe como parametro a chave do checkbox e o objeto do escopo
    $scope.existe = function (chave, lista) {
        //Retorna um valor booleano, true se o elemento existir na lista
        return lista.indexOf(chave) > -1;
    };

/* 2 - Após isso já é possível estar utilizando, agora um exemplo no html.

<table>

    <!-- Criando o cabeçalho da table -->
    <thead>
    
        <tr>
            
            <th>Nome</th>
            
            <th>Idade</th>
            
            <!-- A partir desse momento vamos colocar um checkbox principal -->
            <th>
            
            <!--
            
            1. É necessário que você defina o ng-click para chamar a função checktodos()
            2. Definir o id como selecionartudo
            3. Colocar a classe checkboxprincipal
            4. Definir o name como selecionartudo
            5. Definir o ng-model como todos
            6. Colocar um ng-checked definindo como: checkboxes.length == selecionados.length
            
            -->
            
                <input
                
                    ng-click="checktodos();" 
                    type="checkbox" 
                    id="selecionartudo" 
                    class="checkboxprincipal" 
                    name="selecionartudo" 
                    ng-model="todos" 
                    ng-checked="checkboxes.length == selecionados.length"
                
                />
            
            </th>
            <!-- #A partir desse momento vamos colocar um checkbox principal -->
            
        </tr>
    
    </thead>
    <!-- #Criando o cabeçalho da table -->
    
    <!-- Criando o corpo da tabela -->
    <tbody>
    
        <!--
            Logo no topo da sua tag tr, é necessário colocar um código;
            No meu caso estou rodando isso em uma loop, por esse motivo ele utiliza $index;
            É necessário definir um ng-init para armazenar o valor da tr que deseja excluir;
        -->
        <tr ng-repeat="cliente in clientes" ng-init="checkboxes[$index]=cliente.intClienteChave">
        <!-- #Logo no topo da sua tag tr, é necessário colocar um código -->
        
            <td>
                Nome Teste 1
            </td>
            
            <td>
                19 anos
            </td>
            
            <td>
            
                <!--
                Agora vem a última parte que é necessária para funcionar, a checkbox filha
                
                1. É necessário passar um id com o valor que você quer excluir
                2. Passar um name
                3. Passar um value com o valor que você quer excluir
                4. Passar uma class com o valor checkboxfilho
                5. Passar um ng-click para que seja possível chamar a função alternar(), passando os paramentros "valor que quer excluir" e "selecionador"
                6. Passar um nf-model com o valor que você quer excluir.
                -->
                
                <input 
                    type="checkbox" 
                    id="form_cli_check_{{cliente.intClienteChave}}" 
                    name="form_cli_check[]" 
                    value="{{cliente.intClienteChave}}" 
                    class="checkboxfilho" 
                    ng-click="alternar(cliente.intClienteChave, selecionados)"
                    ng-model="form_cli_check_cliente.intClienteChave"
                />
                
            </td>
        
        </tr>
    
    </tbody>
    <!-- #Criando o corpo da tabela -->
    
</table>

3 - Depois de tudo isso, ele irá funcionar normalmente.

*/
