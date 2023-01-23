import Image from "next/image";
import profileimg from "../../assets/me_square.png"

export default function AboutMe() {
  return (
    <section id="aboutme" className="flex justify-center">
      <div className="bg-gray-100 shadow-md rounded-md grid lg:grid-cols-5 gap-0 m-auto max-w-[1300px] p-6 md:p-10 my-20 mx-4">
        <div className="relative lg:col-start-1 lg:col-end-3 min-h-[22rem] w-[100%]">
          <Image src={profileimg} layout="fill" alt="profil" objectFit="contain" />
        </div>
        <article className="max-w-[700px] border-t-4 pt-8 lg:pt-0 lg:border-t-0 lg:border-l-4 border-rose-800 lg:pl-10 lg:col-start-3 lg:col-end-6 grid gap-2">
          <h2>About me</h2>
          <p className="pb-2">
            I am a newly graduated multimedia designer from Copenhagen School of Design and Technology. I have 2 years of study-related experience with design and development of User Interfaces, especially websites.
            Furthermore, I have gained some insights into User Experience, analytical business models, content, and specific technologies. In my various case projects with real world companies, I have also developed
            skills in user testing and project planning as well as teamwork. As my studies progressed, I have specialized further in Frontend development and become comfortable with fetching and using data via REST. In
            most of my projects I have worked with an agile approach to ensure the best result.
          </p>
          <h3>Motivations</h3>
          <p>
            3 years ago, I thought I was supposed to work in the humanitarian field - either as a sociologist, anthropologist or psychiatrist. I had never imagined myself becoming any type of software developer, and I
            had never written any code before. I chose multimedia design because I liked that it was hands on and also creative. I thought that I would for sure like the design part better than the coding. But through
            some initial tears and frustrations I came to really appreciate the art of frontend development. I found that time did not exist for me when I became immersed in the work and found such satisfaction in seeing
            the results. Furthermore, it fueled my motivation to feel how much I could develop my skills in short time and become more confident - making the whole proces even more fun.{" "}
          </p>
        </article>
      </div>
    </section>
  );
}
//border-rose-800 border-r-4 border-l-4 rounded m-10