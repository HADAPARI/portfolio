const ProjectCard = (props: any) => {
  return (
    <div className="bg-secondary flex flex-col gap-2 rounded-md">
      <img src={props.img} alt="" className="rounded-t-md h-60 object-cover"/>
      <div className="text-xl text-teal text-center font-bold">{props.title}</div>
      <div className="flex gap-3 p-3 flex-wrap">
        {props.techo.map((tech:any,key:any) => (
          <div key={key} className="bg-primary p-1 rounded">{tech}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
