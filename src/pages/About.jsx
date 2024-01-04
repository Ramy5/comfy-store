const About = () => {
  return (
    <>
      <div className="flex font-bold flex-wrap gap-6 align-element justify-center items-center">
        <h1 className="text-4xl sm:text-6xl leading-none tracking-tight">
          Welcome to
        </h1>
        <div className="stats bg-secondary shadow">
          <div className="stat">
            <div className="text-4xl stat-title tracking-widest font-bold text-secondary-content">
              comfy
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 max-w-2xl leading-8 mx-auto text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam perferendis maxime amet, rem voluptates magni? Placeat reiciendis, nisi esse laborum ut fugiat dolorem neque necessitatibus cum ad atque ducimus! Similique sed neque nesciunt. Consectetur deserunt quod provident rerum sint!</p>
    </>
  );
};

export default About;
