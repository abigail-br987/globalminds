function Mission() {
  return (
    <div className="flex items-end justify-center">
      <div className="relative w-96 h-52">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg
     transform -translate-x-16 translate-y-10 -rotate-6 border-gbGreen border-[10px]"
          src="https://placehold.co/600x400"
        />
        <img
          className="absolute inset-0 w-full h-full -translate-x-10 border-gbGreen border-[10px] object-cover rounded-lg shadow-lg"
          src="https://placehold.co/600x400"
        />
      </div>

      <div className="max-w-3xl text-gbWhite  rotate space-y-4 ">
        <h2>Nuestra Misión </h2>
        <p>
          Nuestra misión es crear una plataforma donde los jóvenes puedan
          acceder a mentores, charlas inspiradoras y talleres prácticos,
          eliminando barreras económicas y culturales que limitan las
          oportunidades de muchos.
        </p>
      </div>
    </div>
  );
}

export default Mission;
