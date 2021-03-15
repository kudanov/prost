const SvgButton = ({ path, svgClasses, aClasses: divClasses, onClick, fill }) => {
    
    const DEFAULT_SVG_CLASSES = "h-8 m-3";
    const DEFAULT_A_CLASSES = "text-gray-400 hover:text-gray-100";

    function formatPath(d) {
        return <path clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d={d} />;
    };

    return (
        <div class={(divClasses ?? DEFAULT_A_CLASSES) + " " + "items-center justify-center rounded cursor-pointer"} onClick={onClick}>
            <svg class={(svgClasses ?? DEFAULT_SVG_CLASSES) + " " + "stroke-1"} xmlns="http://www.w3.org/2000/svg" fill={fill ? "currentColor" : "none"} viewBox="0 0 24 24" stroke={fill ? "none" : "currentColor"}>
                {Array.isArray(path)
                    ? path.map(d => formatPath(d))
                    : formatPath(path)}
            </svg>
        </div>
    );
};

export default SvgButton;