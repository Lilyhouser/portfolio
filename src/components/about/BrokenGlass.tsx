const BrokenGlass = () => {
  return (
    <svg style={{ width: "54vw", height: "auto" }} viewBox="0 0 600 400">
      <defs>
        <clipPath id="glassClip">
          {/* <!-- Create many polygons --> */}
          <polygon points="0,0 300,0 0,280" />
          <polygon points="300,0 500,0 600,250" />
          <polygon points="300,0 450,125 80,200" />
          <polygon points="0,280 80,200 0,400" />
          <polygon points="80,200 450,125 0,400" />
          <polygon points="450,125 600,250 0,400" />
        </clipPath>
      </defs>

      {/* <!-- Image appears inside polygons --> */}
      <image
        href={"/img/hello.jpg"}
        width="600"
        height="400"
        clipPath="url(#glassClip)"
        preserveAspectRatio="xMidYMid slice"
      />

      {/* <!-- Optional outline paths --> */}
      <g stroke="var(--background)" strokeWidth="4" fill="transparent">
        <polygon points="0,0 300,0 0,280" />
        <polygon points="300,0 500,0 600,250" />
        <polygon points="300,0 450,125 80,200" />
        <polygon points="0,280 80,200 0,400" />
        <polygon points="80,200 450,125 0,400" />
        <polygon points="450,125 600,250 0,400" />
      </g>
    </svg>
  );
};

export default BrokenGlass;
