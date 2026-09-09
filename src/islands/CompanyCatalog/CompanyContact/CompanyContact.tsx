import "./company-contact.css";

interface CompanyContactProps {
  web?: string;
  linkedin?: string;
  iconContainerClass: string;
}

export default function CompanyContact({
  web,
  linkedin,
  iconContainerClass,
}: CompanyContactProps) {
  return (
    <div class={`icons-container ${iconContainerClass}`}>
      {web && (
        <a
          href={web}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sitio web de la compañía"
          title="Sitio web de la companía"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="social-icon"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
          </svg>
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin de la compañía"
          title="Linkedin de la compañía"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="social-icon"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      )}
    </div>
  );
}
