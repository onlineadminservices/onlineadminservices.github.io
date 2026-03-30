export const categories = {
  class20: {
    title: "Muebles y Decoración",
    description: "Artículos de Clase 20 - Diseño y funcionalidad para tu espacio",
    subcategories: [
      {
        id: "muebles",
        name: "Muebles",
        icon: "🪑",
        description: "Muebles para hogar y oficina",
        count: 2
      },
      {
        id: "decoracion-resina",
        name: "Decoración de Resina",
        icon: "🎨",
        description: "Artículos decorativos en resina",
        count: 1
      },
      {
        id: "espejos",
        name: "Espejos",
        icon: "🪞",
        description: "Espejos decorativos y funcionales",
        count: 1
      },
      {
        id: "almacenamiento",
        name: "Almacenamiento",
        icon: "📦",
        description: "Cajas y contenedores de plástico/madera",
        count: 1
      }
    ]
  },
  class21: {
    title: "Hogar y Cocina",
    description: "Artículos de Clase 21 - Calidad y diseño para tu día a día",
    subcategories: [
      {
        id: "utensilios-cocina",
        name: "Utensilios de Cocina",
        icon: "🍳",
        description: "Utensilios para cocina no eléctricos",
        count: 2
      },
      {
        id: "cristaleria",
        name: "Cristalería y Porcelana",
        icon: "🥂",
        description: "Vajilla y artículos de mesa",
        count: 2
      },
      {
        id: "limpieza",
        name: "Artículos de Limpieza",
        icon: "🧹",
        description: "Herramientas y accesorios de limpieza",
        count: 1
      },
      {
        id: "recipientes",
        name: "Recipientes de Cocina",
        icon: "🥘",
        description: "Recipientes para uso culinario",
        count: 1
      }
    ]
  }
};

export const getAllCategories = () => {
  return categories;
};

export const getCategoryById = (id: 'class20' | 'class21') => {
  return categories[id];
};