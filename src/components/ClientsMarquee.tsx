import SectionHeader from './ui/SectionHeader';
import thomasCook from '../assets/clients/thomas-cook.png';
import greenTrends from '../assets/clients/green-trends.png';
import vallabaVidyalaya from '../assets/clients/vallaba-vidyalaya.png';
import senthamaraiCollege from '../assets/clients/senthamarai-college.png';
import sMurugaayiammal from '../assets/clients/s-murugaayiammal.png';
import savvyAxiss from '../assets/clients/savvy-axiss.png';
import pocoPanda from '../assets/clients/poco-panda.png';
import maditssia from '../assets/clients/maditssia.png';

const clients = [
  { name: 'Thomas Cook', src: thomasCook },
  { name: 'Green Trends', src: greenTrends },
  { name: 'Vallaba Vidyalaya', src: vallabaVidyalaya },
  { name: 'Senthamarai College of Arts and Science', src: senthamaraiCollege },
  { name: 'S Murugaayiammal LLP', src: sMurugaayiammal },
  { name: 'Savvy Axiss', src: savvyAxiss },
  { name: 'Poco Panda', src: pocoPanda },
  { name: 'MADITSSIA', src: maditssia },
];

const LogoTrack = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    className="flex shrink-0 items-center gap-10 md:gap-14 px-5"
    aria-hidden={ariaHidden || undefined}
  >
    {clients.map((client) => (
      <li
        key={`${ariaHidden ? 'dup-' : ''}${client.name}`}
        className="flex h-16 md:h-20 w-[9.5rem] md:w-44 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 px-4"
      >
        <img
          src={client.src}
          alt={ariaHidden ? '' : `${client.name} logo`}
          className="max-h-12 md:max-h-14 w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </li>
    ))}
  </ul>
);

const ClientsMarquee = () => (
  <section className="section-padding bg-surface-muted relative overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-20" />
    <div className="container-wide relative">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted by growing teams"
        description="Brands and institutions that use Ask Meister for WhatsApp marketing, automation, and customer conversations."
      />
    </div>

    <div className="relative mt-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28 bg-gradient-to-r from-surface-muted to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28 bg-gradient-to-l from-surface-muted to-transparent" />

      <div className="clients-marquee flex overflow-hidden py-2" role="presentation">
        <div className="clients-marquee-track flex w-max items-center">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </div>
  </section>
);

export default ClientsMarquee;
