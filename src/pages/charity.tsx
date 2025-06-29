import avatar1 from "../assets/images/community/Logo-1.png";
import avatar2 from "../assets/images/community/Logo-2.png";
import avatar3 from "../assets/images/community/Logo-3.png";
import avatar4 from "../assets/images/community/Logo-4.png";
import avatar5 from "../assets/images/community/Logo-5.png";

const Charity = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

  return (
    <div className="charity-section" id='charity'>
      <div className="charity-card pink-card">
        <div className="icons-section">
          <div className="row">
            <div className="scroll-content">
              {[...avatars, ...avatars].map((avatar, index) => (
                <img key={`top-${index}`} src={avatar} alt={`Charity logo ${index}`} />
              ))}
            </div>
          </div>
          <div className="row reverse">
            <div className="scroll-content">
              {[...avatars, ...avatars].map((avatar, index) => (
                <img key={`bottom-${index}`} src={avatar} alt={`Charity logo ${index}`} />
              ))}
            </div>
          </div>
        </div>
        <p className="description">
          We've participated in events for children's education, health initiatives, and disaster relief. 
          We're dedicated to ongoing involvement and exploring new opportunities.
        </p>
      </div>

      <div className="charity-card white-card">
        <h2 className="title">Charity</h2>
        <p className="description">
          Our creative agency supports charities globally, using our skills in branding, 
          marketing, and social media to make a positive impact on local communities 
          and raise awareness about important causes.
        </p>
      </div>
    </div>
  );
};

export default Charity;
