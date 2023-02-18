import React from "react";

export default function CardComponent(props) {
  const DATA = [
    {
      image: "assets/icon-animation.svg",
      title: "Animation",
      content:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      button: "Get Started",
    },
    {
      image: "assets/icon-design.svg",
      title: "Design",
      content:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      button: "Get Started",
    },
    {
      image: "assets/icon-photography.svg",
      title: "Photography",
      content:
        "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      button: "Get Started",
    },
    {
      image: "assets/icon-crypto.svg",
      title: "Crypto",
      content:
        "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
      button: "Get Started",
    },
    {
      image: "assets/icon-business.svg",
      title: "Business",
      content:
        "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      button: "Get Started",
    },
  ];
  return (
    <>
      {DATA.map((card) => (
        <div className="card-container">
          <img src={card.image} alt="img" />
          <div className="content">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <h3 className="getStarted">{card.button}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
