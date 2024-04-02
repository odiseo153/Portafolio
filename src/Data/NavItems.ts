


export const navItemsEN = [
    {
      title: "Who i am",
      label: "who i am",
      url: "/#who-i-am",
    },
    {
      title: "Proyects",
      label: "proyects",
      url: "/#proyects",
    },
    {
      title: "About-me",
      label: "about-me",
      url: "/#about-me",
    },
    {
      title: "Contact", 
      label: "contact",
      url: "mailto:odiseorincon@gmail.com",
    },
  ]


 export const navItemsES = [
    {
      title: "Quien soy",
      label: "experiencia",
      url: "/#quien",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:odiseorincon@gmail.com",
    },
  ]

  export function navItems() {
    const ruta = localStorage.getItem("idioma")

    if (ruta === "/en") {
      return navItemsEN;
    } else {
      return navItemsES;
    }
  }
  