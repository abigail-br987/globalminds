import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { RiUserVoiceFill } from "react-icons/ri";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const number = "+51 999 999 999";
export const location = "Lima, Perú";
export const email = "helloglobalmindslatam@gmail.com";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/global-minds-latam/posts/?feedView=all",
    bgColor: "bg-gbBlue",
    text: "Síguenos en LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.instagram.com/global_minds_latam/",
    bgColor: "bg-gsPink",
    text: "Síguenos en Instagram",
    icon: <FaInstagram />,
  },
  {
    href: `mailto:${email}`,
    bgColor: "bg-gbYellow",
    text: "Escríbenos por Email",
    icon: <FaEnvelope />,
  },
  {
    /*  {
    href: "https://discord.com",
    bgColor: "bg-gsLightPurple",
    text: "Únete a nuestro Discord",
    icon: <FaDiscord />,
  },
  {
    href: "https://www.whatsapp.com",
    bgColor: "bg-gbGreen",
    text: "Únete a nuestro grupo de WhatsApp",
    icon: <FaWhatsapp />,
  },*/
  },
];

export const joinOptions = [
  {
    title: "Únete como Mentee",
    icon: <PiStudentFill />,
    description:
      "Si eres un joven latino que busca recursos, mentoría personalizada y oportunidades para acceder a universidades y programas internacionales, Global Minds es para ti.",
    offerings: [
      "Acceso a mentoría personalizada.",
      "Participación en talleres de preparación académica.",
      "Networking con jóvenes y profesionales de todo el mundo.",
    ],
    responsibilities: [
      "Asistir a las reuniones de mentoría programadas.",
      "Completar tareas asignadas por tu mentor (investigaciones, aplicaciones, etc.).",
      "Participar activamente en los talleres y charlas ofrecidas por Global Minds.",
    ],
    image: "https://placehold.co/600x400",
  },
  {
    title: "Únete como Mentor",
    icon: <FaChalkboardTeacher />, // Icon for Mentor
    description:
      "Si eres un profesional o estudiante avanzado que desea guiar a la próxima generación de jóvenes latinos, Global Minds te ofrece la oportunidad de hacer una diferencia.",
    offerings: [
      "Oportunidad de impactar vidas con tu conocimiento.",
      "Contribución al desarrollo de futuros líderes.",
      "Expansión de tu red profesional con otros mentores y profesionales.",
    ],
    responsibilities: [
      "Realizar reuniones regulares con los mentees asignados.",
      "Ofrecer apoyo académico y profesional en las áreas que dominas.",
      "Proveer consejos prácticos y motivación constante.",
      "Evaluar el progreso del mentee y ofrecer retroalimentación constructiva.",
    ],
    image: "https://placehold.co/600x400",
  },
  {
    title: "Únete como Ponente",
    icon: <IoPersonAddSharp />, // Icon for Speaker
    description:
      "Si has tenido éxito en tu campo y quieres inspirar a otros jóvenes con tu historia, únete como ponente en nuestras charlas semanales.",
    offerings: [
      "Una plataforma para compartir tu historia y conocimiento.",
      "Conexión con jóvenes motivados y en busca de inspiración.",
      "Un impacto positivo en la comunidad.",
    ],
    responsibilities: [
      "Preparar una charla motivacional de entre 30 a 45 minutos.",
      "Responder a las preguntas de los asistentes al final de la charla.",
      "Participar en las sesiones de networking post-evento para ofrecer más insights.",
    ],
    image: "https://placehold.co/600x400",
  },
  {
    title: "Únete como Staff",
    icon: <RiUserVoiceFill />, // Icon for Staff
    description:
      "Si te apasiona la educación, el empoderamiento juvenil y la organización de eventos, Global Minds busca personas comprometidas.",
    offerings: [
      "Desarrollo de habilidades en gestión de proyectos.",
      "Participación activa en la planificación y ejecución de eventos.",
      "Oportunidades de crecimiento dentro de la organización.",
    ],
    responsibilities: [
      "Asistir en la organización de charlas y eventos.",
      "Coordinar la logística de los workshops y mentorías.",
      "Gestionar la comunicación entre mentores, mentees y conferencistas.",
    ],
    image: "https://placehold.co/600x400",
  },
];

export const donateMessage = [
  "¡Haz una diferencia hoy! Tu contribución permite que más jóvenes accedan a mentoría gratuita y oportunidades educativas.",
  "Garantizamos que tu donación impactará directamente en la vida de jóvenes latinos.",
  "Te mantendremos informado sobre cómo se usan los fondos para expandir nuestros programas.",
];

export const teamMembers = [
  {
    name: "Name of Person 1",
    position: "Position 1",
    image: "path/to/image1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 2",
    position: "Position 2",
    image: "path/to/image2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 3",
    position: "Position 3",
    image: "path/to/image3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 4",
    position: "Position 4",
    image: "path/to/image4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 5",
    position: "Position 1",
    image: "path/to/image5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 6",
    position: "Position 2",
    image: "path/to/image6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 7",
    position: "Position 3",
    image: "path/to/image7.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 8",
    position: "Position 4",
    image: "path/to/image8.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 9",
    position: "Position 1",
    image: "path/to/image9.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 10",
    position: "Position 2",
    image: "path/to/image10.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 11",
    position: "Position 3",
    image: "path/to/image11.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 12",
    position: "Position 4",
    image: "path/to/image12.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 13",
    position: "Position 1",
    image: "path/to/image13.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 14",
    position: "Position 2",
    image: "path/to/image14.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 15",
    position: "Position 3",
    image: "path/to/image15.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 16",
    position: "Position 4",
    image: "path/to/image16.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 17",
    position: "Position 4",
    image: "path/to/image17.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Name of Person 18",
    position: "Position 4",
    image: "path/to/image18.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const globalMindsColors = ["gbGreen", "gbBlue", "gbYellow", "gbGreen"];

export const ourTeamParagraph = [
  "Global Minds no sería posible sin el increíble equipo que lo hace funcionar día a día.",
  "Cada uno trabaja arduamente para asegurar que nuestros estudiantes tengan acceso a las mejores oportunidades",
];

interface Program {
  title: string;
  h2: string;
  description: string;
  details: Detail[];
}

interface Detail {
  title?: string;
  speaker?: string;
  date?: string;
  emoji?: string;
  description?: string;
  photo?: string;
  linkName?: string;
  url?: string;
}

export const programs: Program[] = [
  {
    title: "CHARLAS SEMANALES",
    h2: "Próximas Charlas",
    description:
      "Nuestras charlas semanales traen a jóvenes latinos exitosos que comparten sus historias y conocimientos. Queremos motivar a nuestros miembros a soñar en grande y a aprender cómo otros han alcanzado el éxito. Ofrecemos acceso gratuito a ponentes líderes en diversas industrias, quienes comparten herramientas prácticas y reflexiones que ayudan a nuestros miembros a avanzar hacia sus metas.",
    details: [
      {
        emoji: "👨‍💻",
        title: "fewfwfe",
        speaker: "fewfwe",
        date: "fewfwe",
        description: "fefwefe",
        linkName: "fewfwefew",
        url: "fewfew",
      },
      {
        emoji: "👨‍💻",
        title: "fewfwfe",
        speaker: "fewfwe",
        date: "fewfwe",
        description: "fefwefe",
        linkName: "fewfwefew",
        url: "fewfew",
      },
      {
        emoji: "👨‍💻",
        title: "fewfwfe",
        speaker: "fewfwe",
        date: "fewfwe",
        description: "fefwefe",
        linkName: "fewfwefew",
        url: "fewfew",
      },
      {
        emoji: "👨‍💻",
        title: "fewfwfe",
        speaker: "fewfwe",
        date: "fewfwe",
        description: "fefwefe",
        linkName: "fewfwefew",
        url: "fewfew",
      },
    ],
  },
  {
    title: "MENTORES",
    description:
      "Ofrecemos mentoría personalizada, conectando a los estudiantes con profesionales y expertos en diversas áreas que los guían en su crecimiento académico y profesional. Cada estudiante es emparejado con un mentor que lo acompaña en su proceso de aplicación a universidades, búsqueda de becas, y desarrollo profesional.",
    h2: "Nuestros Mentores",
    details: [
      {
        title: "Juan García",
        photo: "",
        linkName: "Linkedin",
        url: "https://www.linkedin.com/in/juangarcia",
        description:
          "Egresado de MIT, especializado en inteligencia artificial aplicada a la salud.",
      },
      {
        title: "Juan García",
        photo: "",
        linkName: "Linkedin",
        url: "https://www.linkedin.com/in/juangarcia",
        description:
          "Egresado de MIT, especializado en inteligencia artificial aplicada a la salud.",
      },
      {
        title: "Juan García",
        photo: "",
        linkName: "Linkedin",
        url: "https://www.linkedin.com/in/juangarcia",
        description:
          "Egresado de MIT, especializado en inteligencia artificial aplicada a la salud.",
      },
    ],
  },
  {
    title: "TALLERES",
    h2: "Próximos talleres",
    description:
      "En nuestros workshops y capacitaciones, los estudiantes aprenden habilidades prácticas que los preparan para superar procesos de admisión, mejorar sus aplicaciones y destacar en el competitivo mundo académico.",
    details: [
      {
        title: "Taller de Preparación para el SAT",
        date: "28 de octubre de 2024",
        photo: "",
        url: "fewfwe",
        linkName: "fewfw",
      },
      {
        title: "Taller de Preparación para el SAT",
        date: "28 de octubre de 2024",
        photo: "",
        url: "fewfwe",
        linkName: "fewfw",
      },
      {
        title: "Taller de Preparación para el SAT",
        date: "28 de octubre de 2024",
        photo: "",
        url: "fewfwe",
        linkName: "fewfw",
      },
    ],
  },
  {
    title: "NETWORKING",
    h2: "Oportunidades Actuales",
    description:
      "Fomentamos una comunidad donde nuestros miembros pueden hacer networking y conectarse con jóvenes, mentores y profesionales de todo el mundo, creando oportunidades de colaboración y proyectos conjuntos.",
    details: [
      {
        title: "Foro Global Minds",
        url: "https://www.globalminds.com",
        linkName: "fewfwefwe",
        description: "Espacio exclusivo de networking.",
        emoji: "🌐",
      },
      {
        title: "Foro Global Minds",
        url: "https://www.globalminds.com",
        linkName: "fewfwefwe",
        description: "Espacio exclusivo de networking.",
        emoji: "🌐",
      },
      {
        title: "Foro Global Minds",
        url: "https://www.globalminds.com",
        linkName: "fewfwefwe",
        description: "Espacio exclusivo de networking.",
        emoji: "🌐",
      },
    ],
  },
];
