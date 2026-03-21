'use client';

import { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    // Nav
    nav_inicio: 'Inicio',
    nav_areas: 'Áreas de Práctica',
    nav_equipo: 'Equipo',
    nav_testimonios: 'Testimonios',
    nav_contacto: 'Contacto',
    nav_cta: 'Consulta Gratuita',

    // Hero
    hero_tag: 'ESTUDIO JURÍDICO • DESDE 1998',
    hero_title_1: 'Defendemos sus',
    hero_title_2: 'derechos',
    hero_title_3: 'con excelencia.',
    hero_subtitle: 'Más de 25 años protegiendo los intereses de nuestros clientes con dedicación, estrategia y resultados comprobables.',
    hero_cta: 'Agendar Consulta Gratuita',
    hero_cta2: 'Conozca al Equipo',
    hero_stat_1_num: '25+',
    hero_stat_1_label: 'Años de Experiencia',
    hero_stat_2_num: '2,500+',
    hero_stat_2_label: 'Casos Resueltos',
    hero_stat_3_num: '98%',
    hero_stat_3_label: 'Tasa de Éxito',
    hero_stat_4_num: '4',
    hero_stat_4_label: 'Socios Principales',

    // Areas
    areas_tag: 'ÁREAS DE PRÁCTICA',
    areas_title: 'Experiencia que marca la diferencia',
    areas_subtitle: 'Nuestro equipo de abogados especializados cubre todas las áreas del derecho que su empresa o familia necesita.',

    area_1_name: 'Derecho Corporativo',
    area_1_desc: 'Asesoramiento integral a empresas en constitución societaria, fusiones y adquisiciones, contratos comerciales y cumplimiento normativo.',

    area_2_name: 'Derecho de Familia',
    area_2_desc: 'Representación sensible y estratégica en divorcios, custodia, sucesiones, adopciones y acuerdos prenupciales.',

    area_3_name: 'Litigios Civiles',
    area_3_desc: 'Defensa agresiva de sus intereses en disputas comerciales, incumplimientos contractuales y daños y perjuicios.',

    area_4_name: 'Derecho Laboral',
    area_4_desc: 'Protección de derechos laborales tanto para empleadores como para trabajadores, desde consultoría hasta litigios.',

    area_5_name: 'Derecho Inmobiliario',
    area_5_desc: 'Gestión legal completa en transacciones inmobiliarias, contratos de alquiler, desarrollos y resolución de disputas.',

    area_6_name: 'Propiedad Intelectual',
    area_6_desc: 'Registro y protección de marcas, patentes, derechos de autor y secretos comerciales en el ámbito nacional e internacional.',

    area_cta: 'Consultar',

    // Team
    team_tag: 'NUESTRO EQUIPO',
    team_title: 'Profesionales de confianza',
    team_subtitle: 'Cada miembro de nuestro equipo comparte una visión: brindar el más alto nivel de representación legal.',

    team_1_name: 'Dr. Ricardo Martínez',
    team_1_role: 'Socio Fundador',
    team_1_spec: 'Derecho Corporativo & Litigios',

    team_2_name: 'Dra. Carolina Vega',
    team_2_role: 'Socia Principal',
    team_2_spec: 'Derecho de Familia & Sucesiones',

    team_3_name: 'Dr. Alejandro Ruiz',
    team_3_role: 'Socio',
    team_3_spec: 'Derecho Laboral & Inmobiliario',

    team_4_name: 'Dra. Valentina Torres',
    team_4_role: 'Socia',
    team_4_spec: 'Propiedad Intelectual & Contratos',

    // Testimonials
    test_tag: 'TESTIMONIOS',
    test_title: 'Lo que dicen nuestros clientes',

    test_1_text: 'El equipo de Martínez & Asociados manejó la reestructuración de nuestra empresa con una precisión y profesionalismo impecables. Su conocimiento del derecho corporativo nos ahorró millones.',
    test_1_name: 'Carlos Mendoza',
    test_1_role: 'CEO, Grupo Meridian',

    test_2_text: 'Durante el proceso de divorcio más difícil de mi vida, la Dra. Vega me brindó no solo asesoramiento legal excepcional, sino también el apoyo humano que necesitaba.',
    test_2_name: 'María Elena Ríos',
    test_2_role: 'Cliente particular',

    test_3_text: 'Recuperamos la totalidad de los daños en un litigio que otros abogados daban por perdido. Su estrategia legal fue brillante de principio a fin.',
    test_3_name: 'Roberto Casares',
    test_3_role: 'Director, Casares Construcciones',

    // Contact
    contact_tag: 'CONSULTA GRATUITA',
    contact_title: 'Hablemos sobre su caso',
    contact_subtitle: 'Primera consulta sin costo ni compromiso. Cuéntenos su situación y le indicamos el mejor camino legal.',
    contact_name: 'Nombre Completo',
    contact_email: 'Email',
    contact_phone: 'Teléfono',
    contact_area: 'Área Legal',
    contact_area_option1: 'Seleccione un área...',
    contact_area_option2: 'Derecho Corporativo',
    contact_area_option3: 'Derecho de Familia',
    contact_area_option4: 'Litigios Civiles',
    contact_area_option5: 'Derecho Laboral',
    contact_area_option6: 'Derecho Inmobiliario',
    contact_area_option7: 'Propiedad Intelectual',
    contact_message: 'Describa brevemente su caso',
    contact_send: 'Solicitar Consulta',
    contact_privacy: 'Su información es 100% confidencial y está protegida por el secreto profesional.',
    contact_address_label: 'Dirección',
    contact_address: 'Av. Libertador 1250, Piso 14\nBuenos Aires, Argentina',
    contact_phone_label: 'Teléfono',
    contact_phone_value: '+54 11 4567-8900',
    contact_email_label: 'Email',
    contact_email_value: 'consultas@martinezasociados.com',
    contact_hours_label: 'Horario',
    contact_hours_value: 'Lun - Vie: 9:00 - 18:00',

    // Footer
    footer_desc: 'Estudio jurídico líder con más de 25 años de trayectoria en la defensa de los derechos de nuestros clientes.',
    footer_links: 'Enlaces',
    footer_legal: 'Legal',
    footer_privacy: 'Política de Privacidad',
    footer_terms: 'Términos y Condiciones',
    footer_rights: 'Todos los derechos reservados.',
  },
  en: {
    nav_inicio: 'Home',
    nav_areas: 'Practice Areas',
    nav_equipo: 'Team',
    nav_testimonios: 'Testimonials',
    nav_contacto: 'Contact',
    nav_cta: 'Free Consultation',

    hero_tag: 'LAW FIRM • SINCE 1998',
    hero_title_1: 'We defend your',
    hero_title_2: 'rights',
    hero_title_3: 'with excellence.',
    hero_subtitle: 'Over 25 years protecting our clients\' interests with dedication, strategy, and proven results.',
    hero_cta: 'Schedule Free Consultation',
    hero_cta2: 'Meet the Team',
    hero_stat_1_num: '25+',
    hero_stat_1_label: 'Years of Experience',
    hero_stat_2_num: '2,500+',
    hero_stat_2_label: 'Cases Resolved',
    hero_stat_3_num: '98%',
    hero_stat_3_label: 'Success Rate',
    hero_stat_4_num: '4',
    hero_stat_4_label: 'Senior Partners',

    areas_tag: 'PRACTICE AREAS',
    areas_title: 'Experience that makes a difference',
    areas_subtitle: 'Our team of specialized attorneys covers every area of law your business or family needs.',

    area_1_name: 'Corporate Law',
    area_1_desc: 'Comprehensive business counsel in corporate formation, mergers & acquisitions, commercial contracts, and regulatory compliance.',
    area_2_name: 'Family Law',
    area_2_desc: 'Sensitive and strategic representation in divorce, custody, estates, adoption, and prenuptial agreements.',
    area_3_name: 'Civil Litigation',
    area_3_desc: 'Aggressive defense of your interests in commercial disputes, breach of contract, and damages claims.',
    area_4_name: 'Labor Law',
    area_4_desc: 'Protection of labor rights for both employers and employees, from advisory services to litigation.',
    area_5_name: 'Real Estate Law',
    area_5_desc: 'Complete legal management in real estate transactions, leases, developments, and dispute resolution.',
    area_6_name: 'Intellectual Property',
    area_6_desc: 'Registration and protection of trademarks, patents, copyrights, and trade secrets nationally and internationally.',
    area_cta: 'Inquire',

    team_tag: 'OUR TEAM',
    team_title: 'Trusted professionals',
    team_subtitle: 'Every member of our team shares one vision: delivering the highest level of legal representation.',
    team_1_name: 'Dr. Ricardo Martínez',
    team_1_role: 'Founding Partner',
    team_1_spec: 'Corporate Law & Litigation',
    team_2_name: 'Dr. Carolina Vega',
    team_2_role: 'Senior Partner',
    team_2_spec: 'Family Law & Estates',
    team_3_name: 'Dr. Alejandro Ruiz',
    team_3_role: 'Partner',
    team_3_spec: 'Labor & Real Estate Law',
    team_4_name: 'Dr. Valentina Torres',
    team_4_role: 'Partner',
    team_4_spec: 'Intellectual Property & Contracts',

    test_tag: 'TESTIMONIALS',
    test_title: 'What our clients say',
    test_1_text: 'The Martínez & Associates team handled our company restructuring with impeccable precision and professionalism. Their corporate law expertise saved us millions.',
    test_1_name: 'Carlos Mendoza',
    test_1_role: 'CEO, Grupo Meridian',
    test_2_text: 'During the most difficult divorce of my life, Dr. Vega provided not only exceptional legal counsel but also the human support I needed.',
    test_2_name: 'María Elena Ríos',
    test_2_role: 'Private client',
    test_3_text: 'We recovered full damages in a litigation that other lawyers had given up on. Their legal strategy was brilliant from start to finish.',
    test_3_name: 'Roberto Casares',
    test_3_role: 'Director, Casares Construction',

    contact_tag: 'FREE CONSULTATION',
    contact_title: "Let's discuss your case",
    contact_subtitle: 'First consultation at no cost or obligation. Tell us about your situation and we\'ll guide you on the best legal path.',
    contact_name: 'Full Name',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_area: 'Legal Area',
    contact_area_option1: 'Select an area...',
    contact_area_option2: 'Corporate Law',
    contact_area_option3: 'Family Law',
    contact_area_option4: 'Civil Litigation',
    contact_area_option5: 'Labor Law',
    contact_area_option6: 'Real Estate Law',
    contact_area_option7: 'Intellectual Property',
    contact_message: 'Briefly describe your case',
    contact_send: 'Request Consultation',
    contact_privacy: 'Your information is 100% confidential and protected by attorney-client privilege.',
    contact_address_label: 'Address',
    contact_address: 'Av. Libertador 1250, 14th Floor\nBuenos Aires, Argentina',
    contact_phone_label: 'Phone',
    contact_phone_value: '+54 11 4567-8900',
    contact_email_label: 'Email',
    contact_email_value: 'contact@martinezassociates.com',
    contact_hours_label: 'Hours',
    contact_hours_value: 'Mon - Fri: 9:00 AM - 6:00 PM',

    footer_desc: 'Leading law firm with over 25 years of experience defending our clients\' rights.',
    footer_links: 'Links',
    footer_legal: 'Legal',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',
    footer_rights: 'All rights reserved.',
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = (key) => translations[lang]?.[key] || key;
  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
