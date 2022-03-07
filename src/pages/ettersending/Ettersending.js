import { LinkPanel } from "@navikt/ds-react";

export default function Ettersending({ children }) {
  const title = "Min side - ettersending";
  return (
    <main>
        <LinkPanel className="brukernotifikasjon-wrapper" href="#">
            <div
                style={{
                display: "grid",
                gridAutoFlow: "column",
                gap: "var(--navds-spacing-8)",
                alignItems: "center",
                }}
            >
                <div className="brukernotifikasjon-tekst-wrapper">
                <LinkPanel.Title className="brukernotifikasjon-tekst">
                    Test tittel
                </LinkPanel.Title>
                <LinkPanel.Description className="brukernotifikasjon-dato">
                    Test description
                </LinkPanel.Description>
                </div>
            </div>
        </LinkPanel>
    </main>
  );
}