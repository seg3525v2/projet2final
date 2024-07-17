import hero from "../assets/hero.webp";

export default function Hero() {
  return (
    <section>
      <img
        src={hero}
        alt="Stanley Cup Playoff Main Image"
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
