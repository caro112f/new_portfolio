import { techstack } from "../../data/TechstackData";

export default function TechStack() {
  return (
    <section id="techstack" className="bg-gray-100 md:py-10 py-6 px-4 md:px-8">
      <div className="max-w-[1300px] m-auto">
        <h2>My professional toolbox</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-12 md:gap-16 max-w-[1200px] m-auto place-content-center py-10 md:py-20">
          {techstack.map((entry) => (
            <article key={entry.id} className="flex flex-col items-center gap-2">
              {entry.logo}
              <h5 className="text-center">{entry.title}</h5>
              <p>
                Level: <b>{entry.level}</b>
              </p>
            </article>
          ))}
        </div>
        <p className="text-center">
          <i>
            <b>Levels:</b> 1 = Some knowledge, 2 = Good knowledge, 3 = Experienced, 4 = Very experienced, 5 = Expert
          </i>
        </p>
      </div>
    </section>
  );
}
