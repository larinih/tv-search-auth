import "./styles.css";

const renderWelcomePanel = (container: HTMLElement) => {
  const userName = localStorage.getItem("userName");
  const photoURL = localStorage.getItem("userPhoto");

  const htmlContent = `
  <div class= "header"  >
 
  <img src="${photoURL}"  >
  <a href="details.html">Detalhes</a>
  <a href="logout.html">Sair</a>
  <h1>Autenticação com o Google</h1>
</div>
        <div id="welcome">
            <h1>Fique à vontade ${userName}!</h1>
          
        </div>  
    `;

  container.innerHTML = htmlContent;

}
export default renderWelcomePanel;
