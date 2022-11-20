import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <ExternalLink href="https://github.com/basmango">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCJgsfCO0UdOT8v0PRziNziw">
            YouTube
          </ExternalLink>
          <ExternalLink
            href="https://docs.google.com/document/d/e/2PACX-1vRTWRNKoaPSRDA4yuEXzAORSLzj_0s_FzzPjNR6VUNJSRHKqAtyus0hgAmNKNerLw/pub
          "
          >
            Resume
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4"></div>
        <div className="flex flex-col space-y-4"></div>
      </div>
    </footer>
  );
}
