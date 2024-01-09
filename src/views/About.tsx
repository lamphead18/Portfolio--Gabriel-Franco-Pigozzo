import aboutPageImg from "../assets/about-me-page.svg";

import { SocialMediaIcon, Reveal } from "../components";

import { motion } from "framer-motion";

import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  const linkedinUrl = "https://www.linkedin.com/in/gabriel-f-956163131/";
  const githubUrl = "https://github.com/lamphead18";

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
        items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            Sobre <span className="text-secondary">mim</span>
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Meu nome é Gabriel Franco Pigozzo, tenho 21 anos, sou um
            entusiasmado desenvolvedor Full Stack Web e Mobile. Possuo uma
            sólida formação em programação, com foco em tecnologias como
            Javascript, React, HTML, CSS, Node, Python, React-Native, Django e
            SQL. Além das habilidades técnicas, domino métodos de debug,
            organização de tarefas, adaptabilidade, resolução de problemas,
            RESTful APIs, testes automatizados, arquitetura de software, UX,
            metodologias ágeis, requisições HTTP e tenho uma comunicação eficaz
            e proativa. Minha abordagem para o desenvolvimento de software vai
            além das linhas de código, incorporando um entendimento aprofundado
            de arquiteturas e melhores práticas.
          </p>
          <div className="flex items-center justify-center xl:justify-start gap-6">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <SocialMediaIcon imgSrc="linkedin" title="LinkedIn" />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <SocialMediaIcon imgSrc="github" title="GitHub" />
            </a>
            <div className="flex items-center gap-2">
              <SocialMediaIcon imgSrc="email" title="Copiar Email" />
              <span className="text-textSecondary">gabrielfpigozzo@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
