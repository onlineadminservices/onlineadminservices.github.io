export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-2xl">
      <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">Contacto</h1>
      <p className="text-sm text-gray-400 mb-10">Estamos aquí para ayudarte.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Datos de contacto */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-4">Información de contacto</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-gray-700">Email</p>
              <a href="mailto:info@bazimart.com" className="hover:text-gray-900 transition">
                info@bazimart.com
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-700">Teléfono</p>
              <a href="tel:+393200403597" className="hover:text-gray-900 transition">
                +39 320 040 3597
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-700">Dirección fiscal</p>
              <p>Via dell&apos;Indipendenza 20 Int. 5</p>
              <p>40121 Bologna (BO), Italia</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Marca</p>
              <p>BAZIMART</p>
              <p className="text-xs text-gray-400 mt-1">Partita IVA: IT 04234991208</p>
            </div>
          </div>
        </div>

        {/* Mensaje rápido */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-4">Escríbenos</h2>
          <p className="text-sm text-gray-600 mb-4">
            Para consultas sobre productos, pedidos o cualquier otra cuestión, escríbenos directamente por email.
            Respondemos en un plazo máximo de 2 días hábiles.
          </p>
          <a
            href="mailto:info@bazimart.com?subject=Consulta%20BAZIMART"
            className="inline-block bg-gray-900 text-white text-sm px-6 py-3 hover:bg-gray-700 transition"
          >
            Enviar email
          </a>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 leading-relaxed">
              Si has realizado una compra a través de Amazon, eBay u otra plataforma, por favor contacta primero
              con el servicio de atención al cliente de dicha plataforma, ya que la gestión del pedido corresponde
              a sus sistemas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
