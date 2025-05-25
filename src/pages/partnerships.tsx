import React from 'react'
import { Partnershipcontainer, PartnershipOpportunitiesHighlight } from '../assets/svgs/exportPaths'
import Slider from '../components/slider'

const Partnerships = () => {
    const partners = [
        {
            partnerIcon: "",
            joinDate: "2008 — Today",
            description: "Provides communication between the agency and brands. Collects customer feedback and encourages discussion about the product, which helps improve it."
        },
        {
            partnerIcon: "",
            joinDate: "2008 — Today",
            description: "Provide unlimited access to artist and designer boards. Provides communication with them and creative partnership. Provides participation in creative conferences"
        }
    ]
    return (
        <div className='partnership-container' id='partners'>
            <div className="svgpath">
                <Partnershipcontainer />
            </div>
            <div className="header">Contact us today to explore <br />partnership
                <span className="highlight">
                    <span className="messgae">opportunities!</span>
                    <div className="svg"><PartnershipOpportunitiesHighlight /></div>
                </span>
            </div>

            <div className="partners-wrapper">
                <div className="partners-messgae">
                    <div className="header">Partners:</div>
                    <div className="messga">Our creative agency forms strong partnerships with diverse businesses, from startups to global brands, based on trust, respect, and a shared vision for success.</div>
                </div>
                <div className="partners">
                    <Slider values={partners} />
                </div>
            </div>
        </div>
    )
}

export default Partnerships






