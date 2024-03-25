import "./home.css"
import { useEffect, useRef ,useState} from "react";
import Typed from 'typed.js'
import { IoArrowDownCircleOutline } from "react-icons/io5";
import AnimatedIcon from "../../components/animatedIcons/AnimatedIcon";

function ScrollIcon() {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
          // Check if the user has scrolled past a certain threshold (e.g., 100 pixels)
          if (window.scrollY > window.innerHeight-400) {
            setIsScrolled(true); // Set state to true if scrolled past the threshold
          } else {
            setIsScrolled(false); // Set state to false if scrolled back up
          }
        };
    
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up by removing scroll event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures the effect runs only once when component mounts
    
    const scrollToNextPage = () => {
      // Scroll to the next page
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
  
    return (
        
          <div id="icon-final" className={isScrolled ? 'hidden' : ''} onClick={scrollToNextPage}>
             {<IoArrowDownCircleOutline className="scroll-icon-home"/>}
          </div>
    
    );
  }
  





function Autotype() {
    const el = useRef("");

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Tabular <br> Data Extraction. ^1000',
                'Tabular <br> Structure Detection. ^1000'],
            typeSpeed: 50,
            backSpeed: 40,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div>
            <div className="auto">
                <span ref={el}></span>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <div className="container-home">


                <div className="blob-cont">
                    <div className="yellow blob"></div>
                    <div className="red blob"></div>
                    <div className="green blob"></div>
                </div>


                <svg>
                    <filter id='noiseFilter'>
                        <feTurbulence
                            type='fractalNoise'
                            baseFrequency='0.6'
                            stitchTiles='stitch' />
                        <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                        <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                    </filter>

                </svg>
            </div>
            <div className="nav-home">
                <div className="nav-left">
                    <h1>Tabular Data Extraction</h1>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>

                    </ul>
                </div>
            </div>
            <div className="hero-home">
                <Autotype />


            </div>

            <div className="icon-container-home">
            <ScrollIcon className = "downward-icon"/>

            </div>
        </>
    )
}