import { motion } from "framer-motion";
import { TEAM } from "../../constants/mock.data";

const TeamSection = () => {
  return (
    <div className="grid grid-cols-2 gap-y-2 items-end sm:grid-cols-4 sm:gap-y-0">
      {TEAM.map((member, index) => (
        <motion.div
          key={member.name}
          className={`relative px-2 pt-2  rounded-t-full flex flex-col items-center justify-end `}
          style={{ backgroundColor: member.bgColor, maxHeight: "fit-content" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.3, // Sequence the animation
            duration: 0.5,
            type: "spring",
          }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 + 0.2 + 0.3, duration: 0.5 }}
            className="text-primary font-recoleta-medium text-[14px] mt-2"
          >
            {member.name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 + 0.2 + 0.5, duration: 0.5 }}
            className="text-[#00010D70] font-satoshi font-normal text-xs"
          >
            {member.role}
          </motion.p>
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-auto object-contain object-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.3 + 0.2, // Image fades in slightly after the container
              duration: 0.7,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TeamSection;
