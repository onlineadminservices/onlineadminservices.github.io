export default function LegalPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">Aviso Legal</h1>
      <p className="text-sm text-gray-400 mb-10">Última actualización: junio 2025</p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Identificación del titular</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          En cumplimiento del artículo 10 de la Ley de Servicios de la Sociedad de la Información y del Reglamento
          General de Protección de Datos (UE) 2016/679, se informa de los datos del titular de este sitio web:
        </p>
        <table className="w-full text-sm text-gray-600 border-collapse">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700 w-48">Titular</td>
              <td className="py-2">Fernando Martin Apicella</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700">Forma jurídica</td>
              <td className="py-2">Impresa Individuale (autónomo)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700">Marca comercial</td>
              <td className="py-2">BAZIMART</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700">Partita IVA (VAT UE)</td>
              <td className="py-2">IT 04234991208</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700">Número EORI</td>
              <td className="py-2">IT04234991208</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700">Domicilio fiscal</td>
              <td className="py-2">Via dell&apos;Indipendenza 20 Int. 5, 40121 Bologna (BO), Italia</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6 font-medium text-gray-700">Correo electrónico</td>
              <td className="py-2">
                <a href="mailto:fapicella@hotmail.com" className="text-gray-800 hover:underline">
                  fapicella@hotmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-6 font-medium text-gray-700">Teléfono</td>
              <td className="py-2">+39 320 040 3597</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Objeto del sitio web</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          bazimart.com es un sitio web informativo y de presentación de productos de la marca BAZIMART. Los productos
          mostrados se comercializan a través de plataformas de terceros (Amazon, eBay, Vinted, MercadoLibre, entre
          otras). Las transacciones de compra-venta se realizan exclusivamente en dichas plataformas, que aplican sus
          propios términos y condiciones. BAZIMART no actúa como vendedor directo a través de este sitio web.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Propiedad intelectual</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño y código fuente) son propiedad
          de Fernando Martin Apicella o de sus respectivos titulares, y están protegidos por la normativa europea e
          internacional sobre propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin
          autorización expresa y por escrito.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Exclusión de responsabilidad</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          BAZIMART no se responsabiliza de los daños derivados del uso de los enlaces externos presentes en el sitio,
          ni de la disponibilidad o contenido de los sitios de terceros. La información publicada es de carácter
          general y puede estar sujeta a cambios sin previo aviso.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Legislación aplicable</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Este aviso legal se rige por la legislación italiana y de la Unión Europea. Para cualquier controversia
          derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales de Bologna (Italia),
          salvo que la normativa de consumo aplicable establezca otro fuero.
        </p>
      </section>
    </div>
  );
}
