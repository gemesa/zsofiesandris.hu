import { WeddingApplicationFormData } from "@/app/_lib/types";

const AffirmationEmailTemplate = (props: WeddingApplicationFormData) => {
  return (
    <div style={main}>
      <div style={container}>
        <h1 style={heading}>Kedves {props.fullName}!</h1>
        
        <p style={paragraph}>
          Jelentkezésed megkaptuk, köszönjük, hogy Velünk tartasz a Nagy Napunkon! 
          A weboldalt további hasznos információkkal fogjuk frissíteni, köszönjük, 
          ha követed. Kérdés esetén keress bennünket bizalommal!
        </p>
        
        <p style={paragraph}>
          Már várjuk, hogy együtt ünnepeljünk!
        </p>

        <hr style={hr} />

        <h2 style={subheading}>A beküldött adataid:</h2>

        <div style={dataSection}>
          <p style={dataLabel}>Teljes név:</p>
          <p style={dataValue}>{props.fullName}</p>

          <p style={dataLabel}>Email cím:</p>
          <p style={dataValue}>{props.email}</p>

          <p style={dataLabel}>Telefonszám:</p>
          <p style={dataValue}>{props.phoneNumber}</p>

          {props.otherGuests && (
            <>
              <p style={dataLabel}>További vendégek:</p>
              <p style={dataValue}>{props.otherGuests}</p>
            </>
          )}

          {props.foodRestrictions && (
            <>
              <p style={dataLabel}>Ételérzékenység:</p>
              <p style={dataValue}>{props.foodRestrictions}</p>
            </>
          )}

          {props.comment && (
            <>
              <p style={dataLabel}>Üzenet:</p>
              <p style={dataValue}>{props.comment}</p>
            </>
          )}
        </div>

        <hr style={hr} />

        <p style={paragraph}>
          Ha bármit módosítani szeretnél az adataidon, kérlek vedd fel 
          velünk a kapcsolatot a lehető leghamarabb.
        </p>

        <p style={signature}>
          Szeretettel,<br />
          Zsófi & Andris
        </p>
      </div>
    </div>
  );
};

export default AffirmationEmailTemplate;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#3D5A3A",
  marginBottom: "24px",
  marginTop: "0",
};

const subheading = {
  fontSize: "22px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#3D5A3A",
  marginTop: "32px",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#525252",
  marginBottom: "16px",
  marginTop: "0",
};

const hr = {
  border: "none",
  borderTop: "2px solid #e6ebf1",
  margin: "32px 0",
};

const dataSection = {
  marginBottom: "16px",
};

const dataLabel = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#3D5A3A",
  marginBottom: "6px",
  marginTop: "16px",
};

const dataValue = {
  fontSize: "16px",
  color: "#525252",
  margin: "0 0 16px 0",
  padding: "12px 16px",
  backgroundColor: "#f6f9fc",
  borderRadius: "6px",
  borderLeft: "3px solid #3D5A3A",
};

const signature = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#525252",
  marginTop: "32px",
  fontStyle: "italic",
  marginBottom: "0",
};
