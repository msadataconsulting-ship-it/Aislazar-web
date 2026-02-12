import { 
  ShieldCheck, 
  Thermometer, 
  Zap, 
  Construction, 
  Droplets, 
  HardHat, 
  Clock, 
  Award,
  Factory,
  Flame,
  Snowflake,
  Anchor,
  Wheat,
  Users,
  Lightbulb,
  TrendingUp,
  Handshake
} from 'lucide-react';
import { NavItem, ServiceDetail, Differential, Industry } from './types';

export const COMPANY_INFO = {
  name: "AISLA-ZAR S.A.",
  slogan: "Soluciones integrales de aislaciones térmicas para las grandes industrias.",
  address: "Av. Antártida Argentina N° 2535, Zárate, Provincia de Buenos Aires.",
  operativeAddress: "Camino a Parque Industrial Km 4.1, Zárate, Provincia de Buenos Aires.",
  phone: "11-4992 7224",
  email: "ventas@aisla-zar.com",
  founded: 2003,
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/aisla.zar.7/",
  instagram: "https://www.instagram.com/aislazar/?hl=es",
  linkedin: "#"
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'La Empresa', path: '/empresa' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Industrias', path: '/industrias' },
  { label: 'Contacto', path: '/contacto' },
];

export const SERVICES: ServiceDetail[] = [
  {
    title: "Aislación Térmica Industrial",
    description: "Colocación de aislación térmica para sistemas de calor y frío en recipientes y cañerías. Trabajamos con fibra cerámica, lana mineral, silicatos y somos colocadores homologados de Perlita expandida. Para frío, aplicamos poliuretano (spray/inyección con equipamiento propio), poliestireno y elastomérica. Revestimientos en chapa (Galv/Alum/Inox) y PRFV.",
    icon: Thermometer,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770593528/Aislaciones_industriales_AI_x6mkrq.png",
    items: [
      "Calor: Fibra cerámica, Lana mineral, Silicatos",
      "Perlita expandida (Colocadores Homologados)",
      "Frío: Poliestireno, Poliuretano, Espuma elastomérica",
      "Spray e Inyección: Máquina y vehículo propio para in-situ",
      "Protección: Galvanizado, Aluminio, Inox (espejo/opaco)",
      "Revestimientos en PRFV"
    ]
  },
  {
    title: "Armado de Andamios",
    description: "Armado de Andamios Multidireccionales, Modulares y Tubulares, regulados bajo normativas nacionales e internacionales y de acuerdo con los requerimientos de seguridad de cada planta. Contamos con material de vanguardia y mano de obra idónea, garantizando la máxima seguridad en trabajos en altura bajo las normas más estrictas del mundo.",
    icon: Construction,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770593932/Andamios_AI_fl2564.png",
    items: [
      "Andamios Multidireccionales",
      "Andamios Modulares",
      "Andamios Tubulares",
      "Material de vanguardia en el mercado",
      "Mano de obra idónea para el armado",
      "Cumplimiento de normativas de seguridad estrictas"
    ]
  },
  {
    title: "Tracing Eléctrico",
    description: "Diseñamos e implementamos sistemas de tracing eléctrico para el control térmico de procesos industriales, garantizando la estabilidad de temperatura en cañerías, válvulas, equipos y tanques, incluso en condiciones ambientales exigentes. Nuestras soluciones previenen el congelamiento, la cristalización y las pérdidas de fluidez. Ofrecemos un servicio integral que abarca ingeniería, suministro, instalación y puesta en marcha, adaptado a industrias como Oil & Gas, química, alimentos y minería.",
    icon: Zap,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770594471/tracing_AI_e7gggm.png",
    items: [
      "Ingeniería, Suministro e Instalación Integral",
      "Cintas calefactoras autorregulables",
      "Sensores y controladores de temperatura",
      "Puesta en marcha y mantenimiento",
      "Prevención de congelamiento y cristalización"
    ]
  },
  {
    title: "Aplicación de Poliuretano",
    description: "Brindamos soluciones de aislación térmica y acústica mediante la aplicación de poliuretano rígido, utilizando tecnología de proyección spray o inyección en cavidades. El poliuretano ofrece un alto poder aislante, excelente adherencia y continuidad sin juntas, reduciendo pérdidas energéticas en instalaciones industriales, comerciales y logísticas. Contamos con equipamiento propio de última generación y unidades móviles para ejecutar trabajos in-situ con altos estándares de calidad, seguridad y control del espesor aplicado.",
    icon: Droplets,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770566894/home-1-spray-foam_xdczfq.jpg",
    detailImage: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770593378/Poliuretano_AI_e6ulp1.png",
    items: [
      "Tecnología Spray e Inyección en cavidades",
      "Aislación continua sin juntas ni puentes térmicos",
      "Equipamiento propio y unidades móviles in-situ",
      "Ideal para Tanques, Cubiertas y Cámaras",
      "Control estricto de espesor y densidad",
      "Cumplimiento de normativas vigentes"
    ]
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Eficiencia y Calidad",
    description: "Garantizamos eficiencia y calidad superior en todos los servicios prestados, optimizando procesos industriales.",
    icon: Award
  },
  {
    title: "Experiencia Profesional",
    description: "Contamos con recursos humanos altamente calificados y profesionales con amplia experiencia en el sector.",
    icon: Users
  },
  {
    title: "Compromiso Total",
    description: "Responsabilidad absoluta y compromiso con el cliente, cumpliendo plazos y normativas vigentes.",
    icon: Handshake
  },
  {
    title: "Innovación Continua",
    description: "Trabajamos bajo los últimos estándares tecnológicos y de seguridad, innovando constantemente.",
    icon: Lightbulb
  },
  {
    title: "Precios Competitivos",
    description: "Ofrecemos la mejor relación costo-beneficio del mercado para grandes proyectos de infraestructura.",
    icon: TrendingUp
  }
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Industria Petrolera",
    description: "Soluciones de aislación térmica industrial para refinerías, plantas de proceso y ductos, orientadas a mantener la temperatura operativa de equipos y cañerías, optimizando la eficiencia energética y la continuidad del servicio.",
    icon: Flame,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770649997/industria_petroleo_bwjlqg.png",
    items: [
      "Soluciones a medida",
      "Cumplimiento normativo",
      "Intervenciones en operación y paradas programadas"
    ]
  },
  {
    name: "Industria Minera",
    description: "Soluciones de aislación térmica industrial para plantas de procesamiento y servicios auxiliares en entornos mineros, diseñadas para operar de forma confiable en condiciones climáticas y operativas exigentes.",
    icon: HardHat,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770658848/industria_minera_w01f9b.png",
    items: [
      "Soluciones a medida",
      "Cumplimiento normativo",
      "Operación en ambientes extremos"
    ]
  },
  {
    name: "Industria Agrícola",
    description: "Soluciones de aislación térmica aplicadas a instalaciones agroindustriales, orientadas a mejorar la eficiencia de plantas de acopio, secado, procesamiento y almacenamiento. Contribuimos a la estabilidad térmica de equipos y estructuras, optimizando procesos y preservando la calidad del producto.",
    icon: Wheat,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770666910/industria_agricola_twtgiz.png",
    items: [
      "Soluciones a medida",
      "Eficiencia energética",
      "Operación continua en entornos rurales"
    ]
  },
  {
    name: "Industria Alimenticia",
    description: "Soluciones de aislación térmica industrial aplicadas a plantas de elaboración y procesamiento de alimentos, orientadas a mantener la estabilidad térmica, optimizar la eficiencia energética y acompañar procesos continuos bajo altos estándares de higiene y calidad.",
    icon: Snowflake,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770668319/industria_alimenticia_iq569c.png",
    items: [
      "Control térmico de procesos",
      "Materiales aptos para entornos alimenticios",
      "Cumplimiento normativo y sanitario"
    ]
  },
  {
    name: "Industria de la Construcción",
    description: "Soluciones de aislación térmica aplicadas a naves industriales y grandes superficies, orientadas a mejorar el confort interior, reducir pérdidas energéticas y acompañar proyectos de obra nueva y ampliaciones.",
    icon: Construction,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770668720/industria_construccion_y4m9g4.png",
    items: [
      "Aislación en cubiertas y cerramientos",
      "Soluciones adaptadas a cada proyecto",
      "Mejora de eficiencia térmica y energética"
    ]
  },
  {
    name: "Otras Industrias",
    description: "Nuestros servicios son aplicables a cualquier sector: químico, farmacéutico, naval, automotriz y más.",
    icon: Factory,
    image: "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770676708/industria_quimica_gywzie.png"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Robert Zahn",
    role: "Director de Planta",
    title: "La posibilidad de planificar.",
    quote: "Comprometidos con las fechas y cronogramas pactados. Un socio estratégico para nuestras paradas técnicas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Marcos Bourne",
    role: "Jefe de Mantenimiento",
    title: "Rapidez y confiabilidad",
    quote: "Destaco la calidad de los productos y el knowhow técnico. Siempre responden ante urgencias operativas.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Lydia Lavalle",
    role: "Gerente de Compras",
    title: "Altamente recomendados",
    quote: "Asesores indispensables para la toma de decisiones complejas. Transparencia absoluta en la cotización.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Jorge Miller",
    role: "Ingeniero de Proyecto",
    title: "Seguridad ante todo",
    quote: "El cumplimiento de las normas de HSE por parte de AISLA-ZAR es impecable. Fundamental para nuestra industria.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "Ana Silva",
    role: "Supervisora de Obra",
    title: "Calidad de terminación",
    quote: "La prolijidad en el montaje de la aislación y el tracing es superior a la media del mercado.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 4
  }
];

export const CLIENT_LOGOS = [
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576971/1-c_lragdq.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576971/2-c_hh9oam.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576972/3-c_fmm38t.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576978/4-c_pg3dcy.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576978/5-c_us0qip.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576981/6-c_gxvmz6.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576985/7-c_nvevfy.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576986/8-c_hlwncw.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576988/9-c_nrp2yj.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576992/10-c_vqxnom.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576993/11-c_t2k08d.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576997/12-c_w2rarj.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770576998/13-c_vafjys.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577000/14-c_vlnkcp.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577001/15-c_hbenkm.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577006/16-c_myohs9.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577007/17-c_af9ldx.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577010/18-c_nxtfih.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577011/19-c_tvugtr.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577016/20-c_xdivv1.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577017/22-c_pzfjdp.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577025/23-c_fgklmk.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577026/24-c_bshv32.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577037/24-c-1_lzkhwf.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577038/25-c_ydhys4.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577042/26-c_pj0lmw.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577043/27-c_exjmdz.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577048/28-c_o8jiv1.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577052/29-c_co38og.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577053/30-c_ee1d4b.png",
  "https://res.cloudinary.com/dbk68wsnu/image/upload/v1770577059/32-c_lnb47p.png"
];