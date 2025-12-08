import { WeddingApplicationFormData } from '@/app/_lib/types';

const AdminNotifierEmailTemplate = (props: WeddingApplicationFormData) => {
  return (
    <div>
      <h1>Jelentkeztek esküvőre!</h1>
      <p>
        Jelentkezést adott le a következő személy:
        <br />
        <br />
        Teljes név: {props.fullName}
        <br />
        Email cím: {props.email}
        <br />
        Telefonszám: {props.phoneNumber || '--'}
        <br />
        Részvétel: {props.attendance}
        <br />
        További vendégek: {props.otherGuests || '--'}
        <br />3 év alatti gyerekek {props.smallChildren ?? '--'}
        <br />3 és 12 év közötti gyerekek: {props.midChildren ?? '--'}
        <br />
        Szállás: {props.accommodation || '--'}
        <br />
        Komment: {props.comment || '--'}
        <br />
        Érzékenység: {props.foodRestrictions || '--'}
        <br />
        <br />
        <br />
        Szeretettel,
        <br />
        gemesa email szervere
      </p>
    </div>
  );
};

export default AdminNotifierEmailTemplate;
