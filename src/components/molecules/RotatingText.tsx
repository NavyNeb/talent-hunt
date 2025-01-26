import CircularText from '/round-text.png'; 
const RotatingText = () => {
 return (
    <div className="relative flex justify-center items-center h-fit w-fit mt-6">
      {/* Rotating circular text */}
      <img id='rotate__img' src={CircularText} className="animate-spin"/>

      {/* Centered icon */}
      <svg
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className='absolute mx-auto inset-x-0'
      >
        <circle cx="28.4933" cy="28.5027" r="28.5" fill="#FFCA31" />
        <path
          d="M36.0429 22.1579L19.365 38.8358L18.6642 38.135L35.3421 21.4571L37.0492 19.75H34.635H25.75V18.75H38.75V31.75H37.75V22.865V20.4508L36.0429 22.1579Z"
          fill="#00010D"
          stroke="#00010D"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};

export default RotatingText;
