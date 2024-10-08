function AboutUs() {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-gbYellow max-w-3xl p-10 rotate space-y-4 m-3 -rotate-1 rounded-lg">
          <h2>¿Quiénes Somos? </h2>
          <p>
            Global Minds es una organización juvenil creada para empoderar a
            jóvenes latinos, proporcionando acceso a recursos, conexiones y
            mentoría personalizada. Creemos que el éxito individual puede
            multiplicarse para el beneficio de la comunidad, por lo que
            ofrecemos asesoría gratuita para apoyar a los estudiantes a lograr
            sus metas educativas y profesionales en el extranjero.
          </p>
        </div>
        <div className="relative w-96 h-96">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg
             transform translate-x-10 translate-y-10 rotate-6 border-gbYellow border-[10px]"
            src="https://placehold.co/600x400"
          />
          <img
            className="absolute inset-0 w-full h-full -translate-x-10 border-gbYellow border-[10px] object-cover rounded-lg shadow-lg"
            src="https://placehold.co/600x400"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
