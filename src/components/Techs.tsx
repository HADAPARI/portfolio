// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Techs = (props: any) => {
  return (
    <div className="tech bg-primary rounded-md flex flex-col items-center mt-10 p-7 gap-3 w-72 h-80 hover:shadow-md hover:shadow-white/5">
      <div className="text-8xl text-teal icon flex justify-center w-24">
        {props.icon}
      </div>
      <p className="text-3xl font-bold">{props.title}</p>
      <p className="text-center">{props.description}</p>
    </div>
  );
};

export default Techs;
