import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Milena!
            </h3>

           

            <p className={styles.paragrafo}>
                Oi gente , tudo bem? Eu sou desenvolvedora Front-End e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou com o programa One que é uma parceria da Alura + Oracle Next Education fazendo a Especialização Front-End. Eu aprendi lógica de programação e o básico de HTML, CSS, Javascript e o framework React.js. Como desenvolvedora front-end, meu foco está em criar interfaces de usuário intuitivas e eficientes. Eu gosto muito de estudar programação, gosto muito de criar sites e quero muito trabalhar sendo desenvolvedora web.
            </p>
            <p className={styles.paragrafo}>
               Sou estudante de Ciência da Computação na Anhanguera, estou no segundo período. Amo tecnologia e inovação, e essa paixão me motiva a estar sempre atualizada com as últimas tendências e avanços na área. Acredito que a chave para o sucesso no mundo da tecnologia é a aprendizagem contínua e a adaptação às novas ferramentas e metodologias. 
            </p>
            <p className={styles.paragrafo}>
            Estar em constante aprendizado é uma das minhas maiores motivações. Participo regularmente de cursos, workshops e comunidades de desenvolvedores para expandir meus conhecimentos e habilidades. A cada novo projeto, busco aplicar o que aprendi e explorar novas abordagens para resolver problemas.
            </p>
            
            <p className={styles.paragrafo}>
                

            </p>
            <p className={styles.paragrafo}>
                
            </p>
        </PostModelo>
    )
}