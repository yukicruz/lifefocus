import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header" // Import Header component
import "../styles/global.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image1.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "image2.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "image3.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "image8.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "image5.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "image6.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "image7.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image8: file(relativePath: { eq: "image8.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9: file(relativePath: { eq: "image9.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image10: file(relativePath: { eq: "image10.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image11: file(relativePath: { eq: "image11.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image12: file(relativePath: { eq: "image12.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image13: file(relativePath: { eq: "image13.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image14: file(relativePath: { eq: "image14.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = [
    // { fluid: data.image1.childImageSharp.fluid, text: "Text over image 1", link: "/page1" },
    { fluid: data.image2.childImageSharp.fluid, text: "Your Core Values", link: "/core-values" },
    { fluid: data.image3.childImageSharp.fluid, text: "Key Life Domains 1", link: "/key-life-domains" },
    { fluid: data.image4.childImageSharp.fluid, text: "Life Satisfaction Survey", link: "/life-satisfaction-survey" },
    { fluid: data.image5.childImageSharp.fluid, text: "Rank Life Domains by Stress", link: "/key-life-domains-2" },
    { fluid: data.image6.childImageSharp.fluid, text: "Rank Life Domains by Importance", link: "/key-life-domains-3" },
    // { fluid: data.image7.childImageSharp.fluid, text: "Text over image 7", link: "/page7" },
    // { fluid: data.image8.childImageSharp.fluid, text: "Text over image 8", link: "/page8" },
    // { fluid: data.image9.childImageSharp.fluid, text: "Text over image 9", link: "/page9" },
    // { fluid: data.image10.childImageSharp.fluid, text: "Text over image 10", link: "/page10" },
    // { fluid: data.image11.childImageSharp.fluid, text: "Text over image 11", link: "/page11" },
    // { fluid: data.image12.childImageSharp.fluid, text: "Text over image 12", link: "/page12" },
    // { fluid: data.image13.childImageSharp.fluid, text: "Text over image 13", link: "/page13" },
    // { fluid: data.image14.childImageSharp.fluid, text: "Text over image 14", link: "/page14" },
  ]

  return (
    <div>
      <Header /> {/* Use the Header component */}
      <div className="main-text">
        <h1>Rediscover your core values,<br />Redefine your life</h1>
        <a href="/assessment" className="assessment-button">Take Our Free Assessment Test</a>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <a href={image.link} key={index} className="image-card">
            <Img fluid={image.fluid} alt={`Image ${index + 1}`} />
            <span className="image-text">{image.text}</span>
          </a>
        ))}
      </div>
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default IndexPage
