import { motion } from "framer-motion";
import { clientSteps, communication, fadeUp, glassBase, stagger } from "../data";
import { AnimatedSection, Icon } from "../components";

export default function CommunicationSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="communication"
      motionConfig={motionConfig}
      background="bg-[radial-gradient(circle_at_20%_40%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_82%_55%,rgba(167,139,250,0.13),transparent_32%)]"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div variants={fadeUp} transition={motionConfig.transition}>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-200">Communication client</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Une collaboration claire, rapide et sans stress.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Un bon projet ne depend pas seulement du design. Il depend aussi d'une communication simple: vous savez quoi
            envoyer, quand valider et ce que vous recevez a chaque etape.
          </p>
          <ClientSteps />
        </motion.div>
        <motion.div variants={stagger} className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          {communication.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={motionConfig.transition}
              whileHover={motionConfig.hoverLift}
              className={`rounded-2xl p-6 transition hover:border-lime-300/35 hover:bg-white/[0.08] ${glassBase}`}
            >
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-300/10 text-lime-200">
                  <Icon name={item.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function ClientSteps() {
  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-[#0d1118]/85 p-5 backdrop-blur-xl">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-lime-200">Votre parcours</p>
      <div className="mt-5 grid gap-3">
        {clientSteps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-2xl bg-slate-950/60 px-4 py-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-lime-300 text-xs font-black text-slate-950">
              {index + 1}
            </span>
            <span className="text-sm font-bold text-slate-100">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
