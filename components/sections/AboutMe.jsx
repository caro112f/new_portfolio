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
            I am a graduated multimedia designer from Copenhagen School of Design and Technology. I have experience with design and development of User Interfaces, where I have utilized User Experience principles, analytical business models, experimented with content creation and used a wide range of technological tools. Through my various projects with real world companies, I have also developed
            skills in user testing and project planning as well as teamwork. As my studies progressed, I specialized further in Frontend development and gained experience with frontend tools such as React, Next, Typescript, Vue, SASS, Tailwind and many more. In
            most of my projects I have worked with an agile approach to ensure the best result.
          </p>
          <h3>Motivations</h3>
          <p>
            I chose multimedia design because I liked that it was both practical and creative. I thought that immersing myself in the creative processes would be my favourite part of the study, but the satisfaction I gained from writing succesful code was unmatched. I found that time did not exist for me when I became engaged in the work, and seeing
            the results only fueled my passion more. It was also a great motivation for me to see how much I could develop my skills in very short time and therefore gain more confidence and enjoyment.{" "}
          </p>
        </article>
      </div>
    </section>
  );
}
//border-rose-800 border-r-4 border-l-4 rounded m-10