class Produto{

    constructor(){
      this.id = 1;
      this.arrayProdutos=[];
    }
    
    salvar(){
      
      let produto = this.lerDados();
      if(this.validaCampos(produto)){
        this.adicionar(produto);
      }    
      this.listaTabela();
    }
    listaTabela(){
       let tbody = document.getElementById('tbody');
        tbody.innerText = '';

       for(let i=0; i < this.arrayProdutos.length; i++){
        let tr =tbody.insertRow();

        let td_id = tr.insertCell()
        let td_preco = tr.insertCell()
        let td_produto = tr.insertCell()
        let td_modelo = tr.insertCell()
        let td_marca = tr.insertCell()
        let td_descricaoProduto = tr.insertCell()
        let td_acoes = tr.insertCell()

        td_id.innerText = this.arrayProdutos[i].id;
        td_produto.innerText = this.arrayProdutos[i].nomeProduto;
        td_preco.innerText = this.arrayProdutos[i].preco;
        td_modelo.innerText = this.arrayProdutos[i].modelo;
        td_marca.innerText = this.arrayProdutos[i].marca;
        td_descricaoProduto.innerText = this.arrayProdutos[i].descricaoProduto;


       }
    }
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }
    lerDados(){
      let produto={};
      
      produto.id = this.id;
      produto.nomeProduto = document.getElementById('produto').value;
      produto.preco = document.getElementById('preco').value;
      produto.modelo = document.getElementById('modelo').value;
      produto.marca = document.getElementById('marca').value;
      produto.descricaoProduto = document.getElementById('descricaoProduto').value;
      return produto;
    }
    validaCampos(produto){
      let mensagem = '';
      if(produto.nomeProduto == ''){
        mensagem += '- O nome do produto é obrigatório\n';
      }
      if(produto.preco == ''){
        mensagem += '- O valor é obrigatório\n';
      }
      if(produto.modelo == ''){
        mensagem += '- O modelo é obrigatório\n';
      }
      if(produto.marca == ''){
        mensagem += '- A marca é obrigatória\n';
      }
      if(mensagem!= ''){
        alert(mensagem)
        return false
      }
      return true;
    }
    cancelar(){
      
    }
  }
  var produto =new Produto();