import React from 'react'
import strategy1 from "../assets/images/strategy/strategy1.png"
import strategy2 from "../assets/images/strategy/strategy2.png"
import strategy3 from "../assets/images/strategy/strategy3.png"

const Strategy = () => {
    const strategy = [
        {
            image: strategy1,
            strategyName: "Research & Analysis",
            description:
                "Our agency's research-driven approach involves gathering insights into our clients' industries, competitors, and target audiences to develop tailored strategies that deliver exceptional results. This deep understanding allows us to create innovative and effective campaigns that resonate with our clients' audiences.",
        },
        {
            image: strategy2,
            strategyName: "Concept Development",
            description:
                "Based on the brief and research, the agency's creative team generates ideas for the campaign. These concepts are presented to the client for feedback and refinement.",
        },
        {
            image: strategy3,
            strategyName: "Design and Execution",
            description:
                "Once the concept is approved, the agency's designers and developers bring it to life. This includes creating visual assets, writing copy, and developing multimedia content.",
        },
    ];

    return (
        <div className='strategy-container'>
            {strategy.map((stat, index) => (
                <div className="strategy-wrapper">
                    <img src={stat.image} alt="" />
                    <div className="details-wrapper">
                        <div className="header">{`${index + 1}# ${stat.strategyName}`}</div>
                        <div className="description">{stat.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Strategy

