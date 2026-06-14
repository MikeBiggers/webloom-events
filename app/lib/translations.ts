export type Language = "en" | "es";

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      enquire: "Enquire",
    },
    hero: {
      label: "Bespoke Event Decoration",
      line1: "Where Every",
      line2: "Moment Blooms",
      description:
        "We create breathtaking floral and event decoration for weddings, corporate events, and private celebrations — tailored to your vision.",
      cta1: "Enquire Now",
      cta2: "View Our Work",
    },
    services: {
      label: "What We Offer",
      heading: "Our Services",
      items: [
        {
          title: "Weddings",
          subtitle: "Your perfect day, beautifully adorned",
          description:
            "From intimate ceremonies to grand receptions, we design and deliver stunning floral arrangements, table centrepieces, archways, and full venue decoration that bring your wedding vision to life.",
          features: [
            "Ceremony floral arches",
            "Table centrepieces",
            "Bridal bouquets",
            "Venue dressing",
          ],
        },
        {
          title: "Corporate Events",
          subtitle: "Impress clients and inspire teams",
          description:
            "Elevate your brand at product launches, gala dinners, conferences, and networking events with sophisticated decoration that leaves a lasting impression on every guest.",
          features: [
            "Brand-aligned styling",
            "Stage & backdrop décor",
            "Table settings",
            "Reception displays",
          ],
        },
        {
          title: "Private Celebrations",
          subtitle: "Make every milestone magical",
          description:
            "Birthdays, anniversaries, baby showers, and more — we transform any space into something truly special. No occasion is too intimate or too grand; every detail gets the same love and attention.",
          features: [
            "Balloon installations",
            "Themed decoration",
            "Flower walls",
            "Personalised details",
          ],
        },
      ],
    },
    gallery: {
      label: "Our Portfolio",
      heading: "Gallery",
      description:
        "Follow @webloomevents for daily inspiration from our latest events.",
      followBtn: "Follow @webloomevents",
      categories: {
        all: "All",
        weddings: "Weddings",
        corporate: "Corporate",
        private: "Private",
      },
      lightboxClose: "Close",
      lightboxPrev: "Previous",
      lightboxNext: "Next",
    },
    about: {
      label: "Our Story",
      heading: "Passion for Beautiful Moments",
      accentValue: "Born",
      accentLabel: "from a passion for beauty",
      para1:
        "We Bloom Events was born from a simple belief — that every celebration deserves to be extraordinary. We are passionate florists and event stylists dedicated to transforming spaces into breathtaking environments that tell your story.",
      para2:
        "As a boutique studio, we take on a select number of events so that every client receives our full focus and creativity. You won't be one booking among hundreds — you'll be the event we pour everything into.",
      para3:
        "From the very first consultation to the final petal being placed, we work closely with you to bring your vision to life. No two events are alike — and we wouldn't have it any other way.",
      stats: [
        { value: "Boutique", label: "Studio, limited bookings" },
        { value: "100%", label: "Bespoke designs" },
        { value: "Valencia", label: "& surrounding areas" },
      ],
      cta: "Work With Us",
    },
    founders: {
      heading: "Meet the Founders",
      subheading: "The two stylists behind every We Bloom event",
      members: [
        {
          name: "Andra",
          role: "Co-founder & Event Stylist",
          bio: "Andra co-founded We Bloom Events on the belief that the smallest details create the biggest moments. She brings a calm, considered eye to every brief — pairing seasonal blooms with each space so a celebration feels unmistakably yours.",
        },
        {
          name: "Ana",
          role: "Co-founder & Event Stylist",
          bio: "Ana co-founded We Bloom Events out of a love for bringing people's visions to life. From the first mood board to the final petal, she pours creativity and care into making every event feel effortless, personal and beautiful.",
        },
      ],
    },
    contact: {
      label: "Get In Touch",
      heading: "Let's Create Something Beautiful",
      subheading: "We'd love to hear about your event",
      description:
        "Fill in the form and we'll be in touch within 24 hours to discuss your vision and provide a personalised quote.",
      location: "Valencia Province",
      fields: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        date: "Event Date",
        eventType: "Type of Event",
        message: "Tell Us About Your Event",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+44 7700 000000",
        messagePlaceholder: "Share your vision, venue, guest count, colour palette…",
        selectPlaceholder: "Select event type…",
        submit: "Send Enquiry",
        sending: "Sending…",
      },
      eventTypes: [
        "Wedding",
        "Corporate Event",
        "Birthday / Celebration",
        "Baby Shower / Christening",
        "Anniversary",
        "Other",
      ],
      successTitle: "Enquiry Received",
      successMessage:
        "Thank you! We'll be in touch within 24 hours to discuss your event.",
      errorMessage:
        "Something went wrong. Please try again or email us directly.",
      whatsapp: "WhatsApp",
      whatsappMessage:
        "Hi We Bloom Events! I'd love to talk about decoration for my event.",
    },
    footer: {
      tagline: "Bespoke event decoration",
      links: ["Services", "Gallery", "About", "Contact"],
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      gallery: "Galería",
      about: "Nosotros",
      contact: "Contacto",
      enquire: "Consultar",
    },
    hero: {
      label: "Decoración de Eventos a Medida",
      line1: "Donde Cada",
      line2: "Momento Florece",
      description:
        "Creamos decoración floral y de eventos para bodas, eventos corporativos y celebraciones privadas — adaptada completamente a tu visión.",
      cta1: "Consultar Ahora",
      cta2: "Ver Nuestro Trabajo",
    },
    services: {
      label: "Lo Que Ofrecemos",
      heading: "Nuestros Servicios",
      items: [
        {
          title: "Bodas",
          subtitle: "Tu día perfecto, bellamente adornado",
          description:
            "Desde ceremonias íntimas hasta grandes recepciones, diseñamos y realizamos arreglos florales impresionantes, centros de mesa, arcos y decoración completa del espacio para dar vida a la boda que siempre soñaste.",
          features: [
            "Arcos florales para la ceremonia",
            "Centros de mesa",
            "Ramos de novia",
            "Decoración del espacio",
          ],
        },
        {
          title: "Eventos Corporativos",
          subtitle: "Impresiona a clientes e inspira a tu equipo",
          description:
            "Eleva tu marca en lanzamientos de productos, cenas de gala, conferencias y eventos de networking con una decoración sofisticada que deja huella en cada invitado.",
          features: [
            "Estilismo alineado con tu marca",
            "Decoración de escenario y fondo",
            "Configuración de mesas",
            "Exhibiciones de recepción",
          ],
        },
        {
          title: "Celebraciones Privadas",
          subtitle: "Convierte cada momento en un recuerdo mágico",
          description:
            "Cumpleaños, aniversarios, baby showers y mucho más — transformamos cualquier espacio en algo verdaderamente especial. Ninguna celebración es demasiado íntima o grandiosa; cada detalle recibe el mismo amor y dedicación.",
          features: [
            "Instalaciones de globos",
            "Decoración temática",
            "Paredes de flores",
            "Detalles personalizados",
          ],
        },
      ],
    },
    gallery: {
      label: "Nuestro Portfolio",
      heading: "Galería",
      description:
        "Síguenos en @webloomevents para inspiración diaria de nuestros últimos eventos.",
      followBtn: "Seguir @webloomevents",
      categories: {
        all: "Todo",
        weddings: "Bodas",
        corporate: "Corporativo",
        private: "Privado",
      },
      lightboxClose: "Cerrar",
      lightboxPrev: "Anterior",
      lightboxNext: "Siguiente",
    },
    about: {
      label: "Nuestra Historia",
      heading: "Pasión por los Momentos Hermosos",
      accentValue: "Nacidos",
      accentLabel: "de una pasión por la belleza",
      para1:
        "We Bloom Events nació de una creencia sencilla — que cada celebración merece ser extraordinaria. Somos floristas y estilistas de eventos apasionados, dedicados a transformar espacios en entornos impresionantes que cuentan tu historia.",
      para2:
        "Como estudio boutique, trabajamos con un número selecto de eventos para que cada cliente reciba nuestra atención y creatividad al máximo. No serás una reserva más entre cientos — serás el evento al que le dedicamos todo.",
      para3:
        "Desde la primera consulta hasta el último pétalo colocado, trabajamos contigo para hacer realidad tu visión. No hay dos eventos iguales — y así es exactamente como nos gusta.",
      stats: [
        { value: "Boutique", label: "Estudio, reservas limitadas" },
        { value: "100%", label: "Diseños a medida" },
        { value: "Valencia", label: "y alrededores" },
      ],
      cta: "Trabajar Con Nosotros",
    },
    founders: {
      heading: "Conoce a las Fundadoras",
      subheading: "Las dos estilistas detrás de cada evento de We Bloom",
      members: [
        {
          name: "Andra",
          role: "Cofundadora y Estilista de Eventos",
          bio: "Andra cofundó We Bloom Events con la convicción de que los pequeños detalles crean los grandes momentos. Aporta una mirada serena y cuidada a cada proyecto, combinando flores de temporada con cada espacio para que la celebración sea inconfundiblemente tuya.",
        },
        {
          name: "Ana",
          role: "Cofundadora y Estilista de Eventos",
          bio: "Ana cofundó We Bloom Events por su pasión por dar vida a las ideas de cada cliente. Desde el primer mood board hasta el último pétalo, vuelca creatividad y dedicación para que cada evento se sienta natural, personal y precioso.",
        },
      ],
    },
    contact: {
      label: "Ponte en Contacto",
      heading: "Creemos Algo Hermoso Juntos",
      subheading: "Nos encantaría saber más sobre tu evento",
      description:
        "Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas para hablar de tu visión y ofrecerte un presupuesto personalizado.",
      location: "Provincia de Valencia",
      fields: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        date: "Fecha del Evento",
        eventType: "Tipo de Evento",
        message: "Cuéntanos Sobre Tu Evento",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@correo.com",
        phonePlaceholder: "+34 600 000 000",
        messagePlaceholder: "Comparte tu visión, el lugar, número de invitados, colores…",
        selectPlaceholder: "Selecciona el tipo de evento…",
        submit: "Enviar Consulta",
        sending: "Enviando…",
      },
      eventTypes: [
        "Boda",
        "Evento Corporativo",
        "Cumpleaños / Celebración",
        "Baby Shower / Bautizo",
        "Aniversario",
        "Otro",
      ],
      successTitle: "Consulta Recibida",
      successMessage:
        "¡Gracias! Nos pondremos en contacto contigo en menos de 24 horas para hablar sobre tu evento.",
      errorMessage:
        "Algo salió mal. Por favor inténtalo de nuevo o escríbenos directamente.",
      whatsapp: "WhatsApp",
      whatsappMessage:
        "¡Hola We Bloom Events! Me encantaría hablar sobre la decoración de mi evento.",
    },
    footer: {
      tagline: "Decoración de eventos a medida",
      links: ["Servicios", "Galería", "Nosotros", "Contacto"],
    },
  },
};

export default translations;
