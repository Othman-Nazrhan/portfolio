import { motion } from "framer-motion";
import { glassBase, scaleIn, services } from "../data";
import { AnimatedSection, Icon, SectionHeader } from "../components";

export default function ServicesSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="services"
      motionConfig={motionConfig}
      background="bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_88%_76%,rgba(52,211,153,0.12),transparent_30%)]"
    >
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Un service web clair, de la premiere page au dashboard."
          description="Choisissez le format adapte a votre activite: site vitrine, WordPress, application web, mobile, maintenance ou refonte."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} motionConfig={motionConfig} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ServiceCard({ service, motionConfig }) {
  return (
    <motion.article
      variants={scaleIn}
      transition={motionConfig.transition}
      whileHover={motionConfig.hoverLift}
      whileTap={motionConfig.tapPress}
      className={`group rounded-2xl p-6 transition duration-300 hover:border-lime-300/35 hover:bg-white/[0.08] ${glassBase}`}
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime-300 text-slate-950 shadow-lg shadow-lime-500/20 transition duration-300 group-hover:scale-105">
        <Icon name={service.icon} />
      </div>
      <h3 className="mt-6 text-lg font-black tracking-tight text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
    </motion.article>
  );
}
