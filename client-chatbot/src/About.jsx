
import ayur from './img/ayur.jpg'
import ayur2 from './img/ayur2.jpg'
import './about.scss'
const About=()=>{
    return(
        <>
        <div className="contents">
            <div className="content">
            <h1> Introduction to Ayurveda</h1>
            <p>Ayurveda is an ancient system of medicine that originated in India thousands of years ago. It is a holistic approach to healthcare that focuses on achieving balance and harmony in the body, mind, and spirit to promote overall well-being.it is a Sanskrit term meaning "science of life," and encompasses a comprehensive understanding of health, focusing on the harmonious balance of the body, mind, and spirit. Ayurveda is deeply rooted in the belief that the human body is interconnected with the natural elements and the universe, and maintaining this balance is essential for overall well-being.
            The core philosophy of Ayurveda revolves around the principles of prevention and promotion of health rather than merely treating diseases. It acknowledges the uniqueness of each individual and recognizes that health is a dynamic equilibrium that requires a personalized approach. Ayurvedic practices encompass a wide array of natural therapies, including herbal medicine, dietary guidelines, yoga, meditation, and lifestyle recommendations, all aimed at restoring and maintaining the optimal balance within the body.
            </p>
            <img src={ayur}alt="" />
            </div>
            <div className="content">
            <h1> Concept of Prakriti</h1>
            <p> Prakriti refers to an individual's unique constitution or natural state. It is determined at the time of birth and is a combination of the three doshas: Vata, Pitta, and Kapha. Understanding one's Prakriti is crucial in Ayurveda for personalized health management. The Concept of Prakriti refers to the inherent and unique constitution of an individual, determining their physical, mental, and emotional characteristics. Derived from the Sanskrit word "Prakriti," meaning nature, this concept is foundational to the personalized approach of Ayurvedic medicine.Prakriti reflects the harmonious interplay of the doshas, contributing to an individual's overall health and well-being.While Prakriti provides a baseline, Ayurveda acknowledges that external factors, lifestyle choices, and environmental influences can temporarily disturb the doshic balance. This dynamic nature allows for adjustments in Ayurvedic practices to address changing health needs and maintain overall equilibrium.Ayurveda encourages individuals to adopt lifestyle choices and practices that support and enhance their inherent doshic balance, thereby preventing the onset of diseases.

            </p>
            <img src={ayur2}alt="" />
            </div>
            <div className="content">
            <h1>Skin Analysis</h1>
            <p>Skin detection is considered as a challenging problem in image processing because there
exists disparate variations in the images like the lighting conditions, presence of skin colour-like
background, variations in skin colour of people belonging to different ethnicities and variations
due to makeup</p>
                <span>Following are the prominent characteristics of skin according to different
Prakrutis</span>
                <ul>
                    <li>Vata – Thin, dry, rough, dark, grayish black, dark brown</li>
                    <li>Pitta – Smooth, oily, warm, rosy (pinkish), whitish, yellowish</li>
                    <li>Kapha – Thick, oily, cool, white, pale, wheatish</li>
                </ul>
                <img src="https://www.ashpveda.com/cdn/shop/articles/Doshas_In_Ayurveda_Vata_Pitta_and_Kapha_1200x1200.webp?v=1684138762" alt="" />
            </div>
            <div className="content">
                <h1>Hair Analysis</h1>
                <p>Hair analysis plays a vital role in the study of Prakruti
identification. The hair characteristics differs with respect to a person’s Prakruti.</p>
                <span>Following
are the prominent hair characteristics according to different Prakrutis</span>
                <ul>
                    <li>Vata – Thin, dry, curly, sparse</li>
                    <li>Pitta – Thin, soft, straight, blonde, tawny, brownish red, bald, receding hairline</li>
                    <li>Kapha –Thick, oily, shiny-curly, black, blackish blue</li>
                </ul>
                <div className="imgs">
                    <img src="https://img.emedihealth.com/wp-content/uploads/2021/02/pitta-dosha.jpg" alt="" />
                    <img src="https://img.emedihealth.com/wp-content/uploads/2021/02/kapha-dosha.jpg" alt="" />
                    <img src="https://img.emedihealth.com/wp-content/uploads/2021/04/vata-dosha.jpg" alt="" />
                </div>
            </div>
            <div className="content">
                <h1>Face Shape Analysis</h1>
                <p>The shape of an object is described by the object’s geometric structure and appearance. A
person’s face shape is an important feature used in facial recognition tasks. In Prakruti analysis,
the face shape points towards the dominant Tridosha in the person’s body, Vata people having
angular shape with defined cheek bones, Pitta signifying pointed/ tapering chin and Kapha
signifying rounded face.</p>
        <img src="https://cdn.shopify.com/s/files/1/1749/1879/t/8/assets/pf-ec634862--vata-pitta-kapha-skin2_1200x.jpg?v=1628237365" alt="" />

            </div>
            <div className="content">
                <h1>Eye  Analysis</h1>
                <p>Human eye information is crucial to gain deeper understanding of one’s physiological and
psychological conditions, thus, finding its applications in the domains like facial recognition,
medical diagnosis, facial expression recognition, auxiliary driving, drowsiness detection and
psychological analysis.</p>
<span>The main aim of this line of research is to extract eye components and its
characteristics like the iris, pupil, eyelids along with its geometric shape [36]. Extracting the eye
colour after localizing eyes in an image will also help in the problem of Prakruti determination</span>
        <img src="https://photos1.blogger.com/x/blogger/3764/3792/1600/22626/diagnostico2.jpg" alt="" />
            </div>
        </div>
        
        
        </>
    )
    
}

export default About