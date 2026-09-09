import type { Company } from "../../../utils/getCompanies";
import CompanyContact from "../CompanyContact/CompanyContact";
import "./table-view.css";

interface TableViewProps {
  readonly data: readonly Company[];
}

export default function TableView({ data }: TableViewProps) {
  return (
    <table id="table-container">
      <colgroup>
        <col style={{ width: "200px" }} />
        <col />
        <col style={{ width: "100px" }} />
      </colgroup>
      <thead>
        <tr>
          <th>nombre</th>
          <th>servicios</th>
          <th>contacto</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, services, web, linkedin }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>
              <div className="cell-scroll">
                <div className="cell-content">{services}</div>
              </div>
            </td>
            <td>
              <CompanyContact
                web={web}
                linkedin={linkedin}
                iconContainerClass="contact-icons"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
