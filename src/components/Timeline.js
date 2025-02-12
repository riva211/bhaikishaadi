import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    title: "The First Message",
    date: {
      month: "Oct",
      day: "07",
      year: "2023",
    },
    description:
      'Every great story begins with a simple "Hi." Little did we know that this message would spark something extraordinary!',
    position: "left",
  },
  {
    title: "The First Meet",
    date: {
      month: "Nov",
      day: "15",
      year: "2023",
    },
    description:
      "From nervous glances to non-stop laughter, our first date was nothing short of magical. Time flew, and so did our hearts. We just knew this was special!",
    position: "right",
  },
  {
    title: "Said Yes!",
    date: {
      month: "Nov",
      day: "16",
      year: "2023",
    },
    description:
      'Just one day after our first date, we knew there was no need to wait. Love doesn\'t always follow a timeline; sometimes, it just clicks. And for us, it did—loud and clear! Without hesitation, we said "yes" to forever.',
    position: "left",
  },
  {
    title: "In a Relationship",
    date: {
      month: "Feb",
      day: "18",
      year: "2025",
    },
    description:
      "The real discovery! Leave this story to us",
    position: "right",
  },
];

function TimelineCard({ event }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [event.position === "left" ? -50 : 50, 0]);

  return (
    <motion.div ref={cardRef} style={{ opacity, x }} className="relative flex justify-center">
      <div className={`relative w-full max-w-[600px] p-3 rounded-3xl bg-[#F8F7F7] md:h-[190px] shadow-md flex items-center text-center border border-gray-200 ${event.position === "right" ? "md:ml-auto" : "md:mr-auto"}`}>
        {event.position === "right" && (
          <div className={`w-[200px] flex flex-col font-bold text-xl ${event.title === "In a Relationship" ? "text-red-500" : "text-gray-700"}`}>
            <span>{event.date.month} {event.date.year}</span>
            <span className="text-5xl">{event.date.day}</span>
          </div>
        )}
        <div className="bg-[#E9EBEF] flex  flex-col justify-center h-full w-full shadow-xl rounded-2xl p-3">
          <h3 className="text-orange-500 font-semibold text-lg mt-2">{event.title}</h3>
          <p className="text-gray-600 mt-2">{event.description}</p>
        </div>
        {event.position === "left" && (
          <div className={`w-[200px] flex flex-col font-bold text-xl ${event.title === "In a Relationship" ? "text-red-500" : "text-gray-700"}`}>
            <span>{event.date.month} {event.date.year}</span>
            <span className="text-5xl">{event.date.day}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div className="mx-auto max-w-4xl px-2 py-16" ref={containerRef}>
      <motion.h1
        className="mb-16 text-center cookie-regular text-[81px] font-bold text-orange-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Story
      </motion.h1>

      <div className="space-y-10">
        {events.map((event) => (
          <TimelineCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
