const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React Native",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Supabase",
  "Firebase",
  "BullMqueue",
  "Redis",
  "postgreSQL",
  "Postman",
  "Google Cloud",
  "Vercel",
  "Render",
  "AWS",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
        id="skills"
        className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-14">
            Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {skills.map((skill) => (
              <div
                key={skill}
                className="border border-gray-200 rounded-2xl p-6 text-center font-semibold hover:bg-black hover:text-white transition duration-300"
             >
              {skill}
              </div>
            ))}

            </div>

        </div>

        </section>
     );
}