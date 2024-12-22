export const Contact = () => (
  <div className="bg-primary-1 xs:grid-cols-1 grid grid-cols-2 gap-8 px-12 py-8 text-center text-white">
    <Info title="Kommen Sie vorbei">
      <p>Breite Straße 56</p>
      <p>13597 Berlin | Spandau</p>
      <p>Deutschland</p>
    </Info>

    <Info title="Rufen Sie an">
      <p>030 - 367 501 71</p>
      <p>(Für Reservierungsanfragen beachten</p>
      <p>Sie bitte unsere Öffnungszeiten)</p>
    </Info>
  </div>
);

const Info = ({ children, title }) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    <div>{children}</div>
  </div>
);
