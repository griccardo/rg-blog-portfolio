import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Riccardo Gobbo",
  logo: "/logo.png",
  email: "dev@riccardogobbo.it",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  /*{
    title: "Projects",
    url: "/projects",
  },*/
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/griccardo",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:dev@riccardogobbo.it",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Riccardo Gobbo",
    description:
      "Sviluppatore web full-stack e mobile ibrido in flutter. Appassionato di tecnologia e innovazione.",
    image: identity.logo,
  },
  role: "Full Stack Web Developer",
  description:
    "Ciao! Sono Riccardo. Sviluppatore web full-stack con Laravel e WordPress. Lavoro su diversi progetti web e mobile, sempre con un'attenzione particolare alla sicurezza informatica. ",
  socialLinks: socialLinks,
  links: [
    /*{
      title: "My Projects",
      url: "/projects",
    },*/
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Riccardo Gobbo",
    description:
      "Sviluppatore web full-stack e mobile ibrido in flutter. Appassionato di tecnologia e innovazione.",
    image: identity.logo,
  },
  subtitle: "Alcune informazioni su di me.",
  about: {
    description: `Ciao!
      <br/><br/>
       Sono un Full-Stack Web Developer con una forte passione per l'informatica e l'innovazione. 🚀 
      <br/><br/>
      Attualmente lavoro presso JTP Informatica srl, dove mi occupo di sviluppo web in PHP, gestione di siti WordPress, e-commerce Prestashop, e di CRM vTiger. Ho esperienza nella gestione di server hosting e domini, web design e assistenza clienti. 💻
      <br/><br/>
      La mia formazione in informatica e telecomunicazioni, combinata con diverse esperienze lavorative e progetti freelance, mi ha permesso di sviluppare competenze tecniche versatili. Ho lavorato su diversi progetti web e mobile, sempre con un'attenzione particolare alla sicurezza informatica. 🔐
      <br/><br/>
      Sono sempre alla ricerca di nuove sfide per crescere professionalmente e contribuire al successo dei progetti su cui lavoro. 🌟 Il mio obiettivo è continuare a imparare e migliorare, apportando valore aggiunto in ogni mia attività.


`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Ho lavorato in diverse aziende e progetti freelance, sviluppando competence tecniche e professionali. Di seguito trovi alcune delle mie esperienze lavorative.`, // Markdown is supported
    items: [
      {
        title: "Co-Founder & Web Developer",
        company: {
          name: "Sthuby (Freelance)",
          image: "/job.png",
          url: "https://sthuby.com/",
        },
        date: "2023 - presente",
      },
      {
        title: "Junior Full-Stack Web Developer",
        company: {
          name: "Jtp Informatica srl",
          image: "/job.png",
          url: "https://jtpinformatica.it/",
        },
        date: "2022 - presente",
      },
      {
        title: "Web Developer",
        company: {
          name: "K-kasas (Freelance)",
          image: "/job.png",
          url: "https://k-kasas.com/",
        },
        date: "2022",
      },
      {
        title: "Android Developer",
        company: {
          name: "NeverLate (Freelance)",
          image: "/job.png",
          url: "#",
        },
        date: "2021",
      },
    ],
  },
  connect: {
    description: `Sono sempre interessato a incontrare nuove persone e imparare cose nuove. Sentiti libero di connetterti con me su una qualsiasi delle seguenti piattaforme.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Riccardo Gobbo",
    description: "Consigli e riflessioni su tecnologia e sviluppo web.",
    image: identity.logo,
  },
  subtitle: "Consigli e riflessioni su tecnologia e sviluppo web.",
};
