import { techstack } from "../../data/TechstackData";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="techstack" className="bg-gray-100 md:py-20 py-10 px-4 md:px-8 md:mt-24 drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]">
      <div className="max-w-[1300px] m-auto">
        <h2>My professional toolbox</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-10 md:gap-16 max-w-[1200px] m-auto place-content-center py-10 md:py-20">
          {techstack.map((entry, index) => (
            <motion.div key={entry.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 * index }} viewport={{ once: true }}>
              <article className="flex flex-col items-center gap-2">
                {entry.logo}
                <h5 className="text-center">{entry.title}</h5>
                <p>
                  Level: <b>{entry.level}</b>
                </p>
              </article>
            </motion.div>
          ))}
        </div>
        <p className="text-end text-xxs">
          <i>
            <b>Levels:</b> 1 = Some knowledge, 2 = Good knowledge, 3 = Experienced, 4 = Very experienced, 5 = Expert
          </i>
        </p>
      </div>
    </section>
  );
}
