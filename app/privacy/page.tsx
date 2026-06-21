export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">Política de Privacidad</h1>
      <p className="text-sm text-gray-400 mb-10">Última actualización: junio 2025</p>

      <p className="text-gray-600 text-sm leading-relaxed mb-10">
        En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD/GDPR), Fernando
        Martin Apicella, titular de la marca BAZIMART, le informa sobre el tratamiento de sus datos personales a
        través del sitio web bazimart.com.
      </p>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Responsable del tratamiento</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          <strong>Fernando Martin Apicella</strong> — BAZIMART<br />
          Via dell&apos;Indipendenza 20 Int. 5, 40121 Bologna (BO), Italia<br />
          Partita IVA: IT 04234991208<br />
          Correo de contacto: <a href="mailto:info@bazimart.com" className="text-gray-800 hover:underline">info@bazimart.com</a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Datos que recopilamos</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Este sitio web es principalmente informativo. Podemos recopilar los siguientes datos:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed space-y-1">
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, duración de la visita. Se recogen de forma anonimizada mediante cookies de análisis.</li>
          <li><strong>Datos de contacto:</strong> nombre y correo electrónico si nos escribe voluntariamente.</li>
          <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio (p. ej., preferencia de cookies).</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Finalidad y base jurídica del tratamiento</h2>
        <table className="w-full text-sm text-gray-600 border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left font-semibold text-gray-700 pr-4">Finalidad</th>
              <th className="py-2 text-left font-semibold text-gray-700">Base jurídica (RGPD)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">Funcionamiento técnico del sitio</td>
              <td className="py-2">Interés legítimo (art. 6.1.f)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4">Análisis estadístico de visitas</td>
              <td className="py-2">Consentimiento (art. 6.1.a)</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Responder consultas de contacto</td>
              <td className="py-2">Consentimiento / interés legítimo (art. 6.1.a / 6.1.f)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Cookies</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Este sitio utiliza cookies. Puede aceptarlas o rechazarlas a través del banner que aparece en su primera
          visita. Las cookies se clasifican en:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed space-y-1">
          <li><strong>Técnicas / necesarias:</strong> imprescindibles para el funcionamiento del sitio. No requieren consentimiento.</li>
          <li><strong>Analíticas:</strong> nos ayudan a entender cómo se usa el sitio (p. ej., Google Analytics). Solo se activan con su consentimiento.</li>
        </ul>
        <p className="text-gray-600 text-sm leading-relaxed mt-3">
          Puede gestionar o eliminar las cookies en cualquier momento desde la configuración de su navegador.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Plazos de conservación</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Los datos de contacto se conservan durante el tiempo necesario para gestionar la consulta y, si procede,
          hasta 2 años después. Los datos de análisis anonimizados se conservan según la configuración de la
          herramienta de análisis utilizada (máx. 26 meses).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Sus derechos</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          En virtud del RGPD, usted tiene derecho a:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed space-y-1">
          <li><strong>Acceso</strong> a sus datos personales.</li>
          <li><strong>Rectificación</strong> de datos inexactos o incompletos.</li>
          <li><strong>Supresión</strong> (&quot;derecho al olvido&quot;).</li>
          <li><strong>Limitación</strong> del tratamiento.</li>
          <li><strong>Portabilidad</strong> de sus datos.</li>
          <li><strong>Oposición</strong> al tratamiento basado en interés legítimo.</li>
          <li><strong>Retirada del consentimiento</strong> en cualquier momento, sin efecto retroactivo.</li>
        </ul>
        <p className="text-gray-600 text-sm leading-relaxed mt-3">
          Para ejercer estos derechos, contacte a{' '}
          <a href="mailto:info@bazimart.com" className="text-gray-800 hover:underline">info@bazimart.com</a>.
          También tiene derecho a presentar una reclamación ante el{' '}
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
            Garante per la protezione dei dati personali
          </a>{' '}
          (autoridad de control italiana).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Transferencias internacionales</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Los datos pueden ser procesados por proveedores de servicios ubicados fuera del Espacio Económico Europeo
          (p. ej., servicios de hosting o análisis con servidores en EE.UU.). En tales casos, nos aseguramos de que
          existan las garantías adecuadas conforme al RGPD (Cláusulas Contractuales Tipo u otros mecanismos
          equivalentes).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Actualizaciones de esta política</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Esta política puede actualizarse para reflejar cambios legales o en nuestros servicios. La fecha de la
          última actualización aparece al inicio de esta página.
        </p>
      </section>
    </div>
  );
}
