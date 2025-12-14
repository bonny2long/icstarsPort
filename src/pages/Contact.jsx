import PageWrapper from "../components/layout/PageWrapper.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import Button from "../components/ui/Button.jsx";

export default function Contact() {
  return (
    <PageWrapper>
      <SectionHeader
        title="Contact Me"
        subtitle="Let's connect, collaborate, or build something meaningful."
      />

      {/* Headshot placeholder */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
          {/* Drop your headshot image here later, e.g.:
              <img src="/headshot.jpg" alt="Bonny" className="w-full h-full object-cover" />
          */}
        </div>
        <h2 className="text-2xl font-semibold">Bonny Makaniankhondo</h2>
        <p className="text-gray-600">
          Full Stack Software Developer | Builder | Problem Solver
        </p>
      </div>

      <p className="mb-6">
        Thank you for taking the time to explore my work and journey. If
        anything here resonates — whether it&apos;s my engineering approach,
        leadership mindset, or the systems I&apos;ve built — I&apos;d love to
        connect.
      </p>

      <div className="space-y-2 mb-6">
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:bmakaniankhondo@icstars.org"
            className="text-primary underline"
          >
            bmakaniankhondo@icstars.org
          </a>
        </p>
        <p>
          <span className="font-medium">GitHub:</span>{" "}
          <a
            href="https://github.com/bonny2long"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            github.com/bonny2long
          </a>
        </p>
        {/* Add your LinkedIn once you have the URL */}
        {/* <p>
          <span className="font-medium">LinkedIn:</span>{" "}
          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            LinkedIn Profile
          </a>
        </p> */}
      </div>

      <div className="mb-8">
        {/* Resume download button - point href to your actual PDF in /public */}
        <Button href="/Bonny_Makaniankhondo_Resume.pdf">
          Download Resume
        </Button>
      </div>

      <p>
        I&apos;m moving into the next stage of my career with the same
        discipline, curiosity, and resilience that shaped my time at i.c.stars.
        If you&apos;re looking for someone who learns fast, takes ownership,
        and builds with purpose, let&apos;s talk.
      </p>
    </PageWrapper>
  );
}
