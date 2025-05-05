import Image from "next/image";
import help from '/public/img/currency/help-circle.svg'

const BankAccountAccordion = ({ idPrefix, defaultOpen = true }: { defaultOpen: boolean, idPrefix: string }) => {
  return (
    <div className="accordion-item border-0">
      <h2 className="accordion-header" id={`${idPrefix}-heading`}>
        <button
          className={`accordion-button payment-accordion ${!defaultOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${idPrefix}-collapse`}
          aria-expanded={defaultOpen}
          aria-controls={`${idPrefix}-collapse`}
        >
          US Local Bank Account
          <Image
            src={help}
            className="mt-1"
            alt=""
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Click for more information"
          />
        </button>
      </h2>
      <div
        id={`${idPrefix}-collapse`}
        className={`accordion-collapse collapse ${defaultOpen ? 'show' : ''}`}
        aria-labelledby={`${idPrefix}-heading`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body pay-accordione-body p-0">
          <div className="table-responsive">
            <table className="table table-sm border-0 m-0">
              <tbody>
                <tr>
                  <td className="text-start border-0">Account holder</td>
                  <td className="text-start border-0">: MD SAHIDUL ISLAM</td>
                </tr>
                <tr>
                  <td className="text-start border-0">ACH and Wire routing number</td>
                  <td className="text-start border-0">: 026073150</td>
                </tr>
                <tr>
                  <td className="text-start border-0">Account number</td>
                  <td className="text-start border-0">: 8312845113</td>
                </tr>
                <tr>
                  <td className="text-start border-0">Swift/BIC</td>
                  <td className="text-start border-0">: CMFGUS33</td>
                </tr>
                <tr>
                  <td className="text-start border-0">Account type</td>
                  <td className="text-start border-0">: Checking</td>
                </tr>
                <tr>
                  <td className="text-start border-0">Bank name and address</td>
                  <td className="text-start border-0 table-address">
                    : Community Federal Savings Bank
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccountAccordion;