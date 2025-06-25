import swanest_logo from '@assets/images/Projects/Swanest/swanest_logo.svg'
import swanest from '@assets/images/Projects/Swanest/swanest.jpg'
import eventzoneg from '@assets/images/Projects/EventZoneG/eventzoneg.jpg'
import classicgames from '@assets/images/Projects/ClassicGames/classicgames.jpg'
import eventzoneg_logo from '@assets/images/Projects/EventZoneG/eventzoneg_logo.svg'
import classicgames_logo from '@assets/images/Projects/ClassicGames/classicgames_logo.svg'
import hotwheels_logo from '@assets/images/Projects/HotWheels/hotwheels_logo.svg'
import hotwheels from '@assets/images/Projects/HotWheels/hotwheels.jpg'

export const projects = [
    {
        id: "swanest",
        logo: swanest_logo,
        start_year: 2024,
        end_year: 2025,
        title: "Swanest",
        description: "Aplicación de citas desarrollada en colaboración con dos compañeros, pensada para ofrecer una experiencia moderna y auténtica. Integra funciones clave como chat, match y creación de perfiles, con una interfaz intuitiva y un diseño innovador, apoyada en diversas tecnologías que optimizan tanto el diseño como la experiencia del usuario. ",
        technologies: [
            "GSAP", "TypeScript", "Symfony", "Angular", "Figma", "Tailwind"
        ],
        link: "",
        preview: false,
        image: swanest,
        disciplines: [
            "Branding", "Diseño UX/UI", "Desarrollo web"
        ]
    },
    {
        id: "classicgames",
        logo: classicgames_logo,
        start_year: 2024,
        end_year: 2024,
        title: "ClassicGames",
        description: "Este proyecto desarrollado con HTML, CSS y JavaScript presenta dos juegos clásicos: Buscaminas y Torres de Hanoi. Ambos están implementados desde cero, cuidando tanto la lógica funcional como su presentación visual para ofrecer una experiencia clara y agradable. El diseño busca ser intuitivo y accesible, manteniendo la esencia original de cada juego.",
        technologies: [
            "HTML", "CSS", "JavaScript"
        ],
        link: "",
        preview: true,
        image: classicgames,
        disciplines: [
            "Diseño UX/UI", "Desarrollo web"
        ]
    },
    {
        id: "hotwheels",
        logo: hotwheels_logo,
        start_year: 2024,
        end_year: 2024,
        title: "Hot Wheels",
        description: "Este proyecto consiste en un juego de carreras desarrollado con HTML, CSS y JavaScript, que ofrece a los usuarios una experiencia visualmente impactante gracias a su diseño atractivo. La interfaz no solo atrae la atención, sino que también es interactiva y personalizable, permitiendo que cada jugador ajuste diferentes elementos a su gusto.",
        technologies: [
            "HTML", "CSS", "JavaScript"
        ],
        link: "",
        preview: true,
        image: hotwheels,
        disciplines: [
            "Diseño UX/UI", "Desarrollo web"
        ]
    },
    {
        id: "eventzoneg",
        logo: eventzoneg_logo,
        start_year: 2023,
        end_year: 2024,
        title: "EventZoneG",
        description: "Esta aplicación web, desarrollada junto a dos compañeros, y también mí primer proyecto en el ámbito del desarrollo. Se trata de una plataforma centrada en el mundo de los videojuegos, diseñada para ofrecer información y noticias actualizadas. Incluye funcionalidades de login, registro y búsqueda de noticias, todo con una estética innovadora y cuidadosamente adaptada a la temática gamer.",
        technologies: [
            "PHP", "HTML", "CSS", "jQuery", "JavaScript"
        ],
        link: "https://github.com/victormanuel3/EventZoneG",
        preview: false,
        image: eventzoneg,
        disciplines: [
            "Branding", "Diseño UX/UI", "Desarrollo web"
        ]
    },
]