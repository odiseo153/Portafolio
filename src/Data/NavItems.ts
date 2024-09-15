
let ruta = ""

export const setRuta = (rut:string) =>{
  ruta=rut
}

export const navItemsEN = [
    {
      title: "Who i am",
      label: "who i am",
      url: "/en/#who-i-am",
    },
    {
      title: "Proyects",
      label: "proyects",
      url: "/en/#proyects",
    },
    {
      title: "About-me",
      label: "about-me",
      url: "/en/#about-me",
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

  export function navItems():any[] {
console.log(ruta)
    if (ruta === "/en") {
      return navItemsEN;
    }

      return navItemsES;
  }
