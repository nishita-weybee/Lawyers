export interface props {
  label: string;
  value: any;
}
const ProfileDetail: React.FC<props> = ({ label, value }) => {
  return (
    <div className="row mb-7">
      <label className="col-lg-4 fw-semibold text-muted">{label}</label>
      <div className="col-lg-8">
        <span className="fw-bold fs-6 text-gray-800">{value}</span>
      </div>
    </div>
  );
};

export default ProfileDetail;
