import { motion } from "framer-motion";
import { fadeUp, faqs } from "../data";
import { AnimatedSection, SectionHeader } from "../components";

export default function FaqSection({ motionConfig }) {
  return (
    <AnimatedSection
      id="faq"
      motionConfig={motionConfig}
      className="border-y border-white/10 bg-white/[0.03]"
      background="bg-[radial-gradient(circle_at_78%_30%,rgba(34,211,238,0.12),transparent_30%)]"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Les questions importantes avant de commencer."
          description="Le but est que vous sachiez rapidement si le service correspond a votre besoin, votre budget et votre timing."
        />
        <div className="mt-14 grid gap-4">
          {faqs.map((item) => (
            <motion.details
              key={item.question}
              variants={fadeUp}
              transition={motionConfig.transition}
              className="group rounded-2xl border border-white/10 bg-[#0d1118]/85 p-6 backdrop-blur-xl open:border-lime-300/35"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-white">
                {item.question}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-lime-200 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
