import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { testimonials } from "../constants";
// import feedback from 'aliexpress-product-scraper/src/feedback';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 justify-between flex items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white text-[16px] font-medium">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
          {/* <img 
            src={image} 
            // alt={`${feedback} by ${name}`}
            className="w-10 h-10 rounded-full object cover"
          /> */}
          <p className="mt-1 text-secondary text-[14px] border-[1px] p-1 mt-2 rounded-md flex justify-center ">
            <a target="_blank" href={link}>
              Check on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex gap-10 flex-wrap w-max`}
      >
        {testimonials.map((testimonial, index) => (
          <div>
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
