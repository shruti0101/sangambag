import Location from "./Location";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { location } = await params;

  const rawCity = location.split("in-").pop();

  const city = rawCity
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Paper Cup Making Machines Manufacturer in ${city}`,
    description: `Looking for a reliable paper cup making machines manufacturer in ${city}? We offer high-performance, durable, and fully automated paper cup machines at competitive prices with fast delivery and expert support.`,
  };
}

const Page = async ({ params }) => {
  const { location } = await params;

  // 🔥 Must contain "-in-"
  if (!location.includes("in-")) {
    notFound();
  }

  // 🔥 Extract city part after "in-"
  const city = location.split("in-")[1];

  // 🔥 If city is empty or invalid → redirect to Home
  if (!city || city.trim().length === 0) {
    notFound();
  }

  return <Location city={location} />;
};

export default Page;
