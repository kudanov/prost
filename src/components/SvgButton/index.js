const SvgButton = ({ path, svgClasses, onClick }) => {
    const DEFAULT_CLASSES = "w-8 h-8 m-3";

    function formatPath(d) {
        return <path strokeLinecap="round" strokeLinejoin="round" d={d} />;
    };

    return (
        <a class="btn" href="#">
            <svg class={(svgClasses ?? DEFAULT_CLASSES) + " stroke-1"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {Array.isArray(path)
                    ? path.map(d => formatPath(d))
                    : formatPath(path)}
            </svg>
        </a>
    );
};

export default SvgButton;