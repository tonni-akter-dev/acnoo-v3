import React from "react";
import CustomerSupport from "./CustomSupport";
import ReviewsHeader from "./ReviewsHeader";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ReviewContent = () => {
  const handleSortChange = (sortOption: string) => {
    console.log(`Sorting by: ${sortOption}`);
  };

  return (
    <div>
      <ReviewsHeader onSortChange={handleSortChange} />

      {/* Single animated review */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CustomerSupport />
      </motion.div>

      {/* Repeating animated reviews */}
      {[
        {
          customerName: "Jane Cooper",
          daysAgo: 12,
          rating: 4,
          reviewText:
            "The documentation is comprehensive and the support team responds quickly. I had some issues with implementation but they were resolved promptly.",
          companyResponse:
            "Thank you for your feedback, Jane! We're glad we could help resolve your implementation issues. If you need any further assistance, please don't hesitate to reach out.",
        },
        {
          customerName: "Robert Fox",
          daysAgo: 15,
          rating: 3,
          reviewText:
            "Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though.",
          companyResponse:
            "Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update.",
        },
        {
          customerName: "Robert Fox",
          daysAgo: 15,
          rating: 3,
          reviewText:
            "Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though.",
          companyResponse:
            "Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update.",
        },
        {
          customerName: "Robert Fox",
          daysAgo: 15,
          rating: 3,
          reviewText:
            "Good product overall, but there are some bugs that need to be fixed. The UI components are well designed though.",
          companyResponse:
            "Hi Robert, we appreciate your honest feedback. We're actively working on fixing the bugs you've mentioned. We've added these issues to our priority list and should have them resolved in our next update.",
        },
      ].map((review, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CustomerSupport {...review} />
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewContent;
