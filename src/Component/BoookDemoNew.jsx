import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./BookDemoNew.css";

const posts = [
  {
    tag: "Step 1",
    date: "What happens on the call",
    title: "Send one container number and one invoice",
    description:
      "You send one container number and one invoice beforehand, so we work from a real shipment instead of sample data.",
    href: "#",
  },
  {
    tag: "Step 2",
    date: "What happens on the call",
    title: "We load them live",
    description:
      "We load them live — your lane, your customer, your accessorials — so you see how the system handles your own setup.",
    href: "#",
  },
  {
    tag: "Step 3",
    date: "What happens on the call",
    title: "Run the gates against a carrier you pick",
    description:
      "We run the gates against a carrier you pick, and show you what refuses.",
    href: "#",
  },
];

const featuredPost = {
  tag: "Book a demo",
  date: "Forty minutes, no slides.",
  title: "See it against your own containers.",
  description:
    "You send one container number and one invoice beforehand. We load them live and run the gates against a carrier you pick, and show you what refuses. You keep the paperwork the system generates, whether or not you buy.",
  href: "#",
  imageUrl: "book-demo.jpg",
  readMoreText: "Book a demo",
};

const cardHover = {
  hover: {
    y: -6,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function BlogPostCard({
  variant = "default",
  tag,
  date,
  title,
  description,
  imageUrl,
  href,
  readMoreText = "Read the full article",
}) {
  return (
    <motion.article
      className={`book-demo-card ${
        variant === "featured" ? "book-demo-card-featured" : ""
      }`}
      variants={cardHover}
      whileHover="hover"
    >
      {variant === "featured" && imageUrl && (
        <a
          href={href}
          className="book-demo-card-image"
          aria-label={`Read more about ${title}`}
        >
          <img src={imageUrl} alt={title} />
        </a>
      )}

      <div className="book-demo-card-content">
        <div>
          <div className="book-demo-card-meta">
            <span className="book-demo-card-tag">{tag}</span>
            <span>{date}</span>
          </div>

          <h3>
            <a href={href}>{title}</a>
          </h3>

          <p>{description}</p>
        </div>

        {variant === "featured" && (
          <div className="book-demo-card-action">
            <a href={href} className="book-demo-button">
              {readMoreText}
              <ArrowRight size={17} />
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function BookDemoNew() {
  return (
    <section className="book-demo-new">
      <div className="book-demo-container">
        <motion.div
          className="book-demo-featured-wrapper"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <BlogPostCard variant="featured" {...featuredPost} />
        </motion.div>

        <motion.div
          className="book-demo-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            staggerChildren: 0.15,
          }}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
