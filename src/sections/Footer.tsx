export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <h2 className="text-2xl font-bold">
          Nayan Das
        </h2>

        <div className="flex items-center gap-6 text-sm flex-wrap justify-center">

          <a
            href="https://github.com/NAYAN-DAS-OFFICIAL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nayan-das-25b3aa290?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:nayandas81012@gmail.com"
            className="hover:text-gray-400 transition"
          >
            Gmail 1
          </a>

          <a
            href="mailto:nayandasofficialmail@gmail.com"
            className="hover:text-gray-400 transition"
          >
            Gmail 2
          </a>

        </div>

      </div>

      <p className="text-center text-gray-400 text-sm mt-8">
        © 2026 Nayan Das. All rights reserved.
      </p>

    </footer>
  );
}