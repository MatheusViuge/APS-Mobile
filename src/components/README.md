# Componentes
- ### Home
Esse componente é a página inicial do Projeto, quando qualquer pessoa abrir o site ele será o a interface de entrada para o projeto.
- ### Chamado
Componente de visualização do chamado, vai ser a estrutura base para mostrar como o chamado vai ser exibido na tela. Vai conter informações sobre o mesmo e quem abriu e que tipo de serviço ele apresenta.
- ### Chamados
Componente para listagem e tratamento do componente Chamado, com métodos para excluir um chamado ou ver os detalhes do mesmo(Esse método vai fazer a abertura do componente DetalhesChamado)
- ### AbrirChamado
É o componente responsável pelo formulário de cadastro do chamado, sendo assim ele vai ter uma interface contento uma aba com um formulario para abertura de chamado. Pretendo mostrar como fazer a validação com o Formik e Yup (São duas bibliotecas do react para controle de formulários).
- ### DetalhesChamado
É o componente responsável por apresentar o status do chamado e por conter o método para alteração do mesmo, ele vai funcionar com um novo formulário para reescrever os dados já armazenados no chamado. Também será validado pelo Formik e Yup.
# CSS Module
- ### O que é?
CSS Module é um método de utilização do css para que ele fique atrelado a um único componente e não tenhamos conflitos de estilização nos componentes.
- ### Como Funciona?
Para utilizar a estilização do arquivo module.css é simples basta importar os arquivos para seus respectivos componentes com o seguinte comando `import styles from Exemplo.module.css`, assim o arquivo css já estará pronto pra ser utilizado dentro do seu componente, porém não é só isso para a utilização dentro do seu arquivo .jsx é necessário na hora de por a className na tag hmtl por da seguinte forma `<a className={styles.nomeDaClasse}>`. Em qualquer dúvida sobre como o CSS module funcione contatar [Matheus Viuge](https://github.com/MatheusViuge).