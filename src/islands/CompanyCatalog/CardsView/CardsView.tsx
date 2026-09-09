import type { Company } from "../../../utils/getCompanies";
import CompanyContact from "../CompanyContact/CompanyContact";
import "./cards.css";

interface CardsViewProps {
  readonly data: readonly Company[];
}
export default function CardsView({ data }: CardsViewProps) {
  return (
    <div id="cards-container">
      {data.map(({ name, services, web, linkedin }) => (
        <div class="card" key={name}>
          <div class="card-header">{name}</div>
          <div class="card-body">{services}</div>
          <div class="card-footer">
            <CompanyContact
              web={web}
              linkedin={linkedin}
              iconContainerClass="footer-icons"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
