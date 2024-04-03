import React, { useEffect} from 'react';
import '../App.css'; // Make sure to import your CSS file
import amazonImage from './amazon_1.png';
import acrhitectureImage from "./amazon_architecture.png"

const HomePage: React.FC = () => {

    useEffect(() => {
        createCube(-10, 0, 0);
        const sections = document.querySelectorAll('.section');
        let currentSectionIndex = 0;
        let isScrolling = false;
        let lastScrollTime = 0;
    
        function scrollToSection(index: number) {
          sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    
        function handleScroll(event: WheelEvent) {
          const now = new Date().getTime();
          const timeSinceLastScroll = now - lastScrollTime;
          lastScrollTime = now;
      
          if (!isScrolling && timeSinceLastScroll > 50) {
            isScrolling = true;
            const direction = event.deltaY > 0 ? 1 : -1;
            const nextSectionIndex = currentSectionIndex + direction;
      
            if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
              scrollToSection(nextSectionIndex);
              currentSectionIndex = nextSectionIndex;
      
              const cubeContainer = document.getElementById('cubeContainer');
              if (cubeContainer) {
                cubeContainer.style.display = 'none';
              }
            }
      
            setTimeout(() => {
              isScrolling = false;
            }, 100);
          }
        }
    
        document.addEventListener('wheel', handleScroll);
    
        const downloadButton = document.querySelector('.download-button');
        if (downloadButton) {
          downloadButton.addEventListener('click', function() {
            console.log('PDF download initiated');
          });
        }
      }, []);

      function createCube(x: number, y: number, z: number) {
        const cubeContainer = document.getElementById('cubeContainer');
        if (cubeContainer) {
          const cube = document.createElement('div');
          cube.classList.add('cube');
          cube.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
          cube.style.left = `${x}px`;
          cube.style.top = `${y}px`;
        
          const faces = [];
          for (let i = 0; i < 6; i++) {
            const face = document.createElement('div');
            face.classList.add('face');
            faces.push(face);
            cube.appendChild(face);
          }
        
          faces[0].style.transform = 'rotateY(0deg) translateZ(50px)';
          faces[1].style.transform = 'rotateX(90deg) translateZ(50px)';
          faces[2].style.transform = 'rotateY(90deg) translateZ(50px)';
          faces[3].style.transform = 'rotateY(-90deg) translateZ(50px)';
          faces[4].style.transform = 'rotateX(-90deg) translateZ(50px)';
          faces[5].style.transform = 'rotateX(180deg) translateZ(50px)';
        
          cubeContainer.appendChild(cube);
        }
      }

    return (
        <>
        <div className="section" id="section1">
        <div className="container">
            <div className="content1">
                <div className="big-text" id="title">Hey Paul</div>
                <div className="small-text">Great to see you!</div>
            </div>
            <div className="scrolling">Scroll for a quick glimpse</div>
        </div>
    </div>

    <div className="section" id="section2">
        <div className="container">
            <div className="content2">
                <div className="image-container">
                    <img src={amazonImage} alt="Pictures"/>
                </div>
            </div>
        </div>
    </div>

    <div className="section" id="section3">
        <div className="container3">
            <div className="content3">
                <div className="text">
                    <p>After reviewing the existing user interface, we've developed designs that prioritise ease of use and user engagement. These designs were made to provide a clear glimpse into the application functionality and overall feel of it.</p>
                    <p>Aligning with Amazon's recognizable colour scheme, we've carefully selected a palette that resonates with Amazon's brand identity, ensuring a seamless visual connection for users. The introduction of a user profile feature at the top of the screen is a deliberate strategy to enhance personalization. This design choice paired with the minimalistic design approach, signifies our commitment to creating a user-centric experience, making the application accessible and straightforward for a broad target audience.</p>
                    <p>While open to future adjustments, and with confidence that we are able to share our vision to whatever we do, we believe that the current design effectively balances Amazon's branding with a user-friendly interface.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="section" id="section4">
        <div className="container">
            <h2 className="title">Our Perspective on the Most Important Aspect</h2>
            <div className="content4">
                <div className="image-container2">
                    <img src={acrhitectureImage} alt="Architecture"/>
                </div>
            </div>
        </div>
    </div>
    
    <div className="section" id="section5">
        <div className="container3">
            <div className="content">
                <div className="text2">
                    <div className="big-text2" id="title">An image is like a 1000 words, but words are also usefull.</div>
                    <p>Building upon the initial architectural blueprint provided, we've expanded the design to include additional services that might be essential. This expansion follows the architectural methodology previously established, with the introduction of new services highlighted in the project description, such as IoT and AI/ML technologies.</p>
                    <p>In the course of our investigation into IoT solutions, we identified Greengrass and IoT Core as the most suitable services for our needs. This choice was influenced by the correlation between IoT and AI/ML, where data collected via IoT devices is leveraged to train machine learning models, subsequently informing our database's insights.</p>
                    <p>Utilising Amazon SageMaker, we will streamline the process of building, training, and deploying AI models by using IoT-generated data.</p>
                    <p>Our strategy involves employing IoT Core as the foundational layer, facilitating the interaction between cloud services and IoT devices. Greengrass can be deployed to enhance our system with local data processing capabilities, then transferring the processed data to the cloud. This dual approach ensures a robust and efficient architecture, capitalising on the strengths of both IoT Core and Greengrass to meet our project's requirements.</p>
                </div>
                    

            </div>
        </div>
    </div>

    <div className="cube-container" id="cubeContainer"></div>


    
    </>
      
    );
  }
  
  export default HomePage;