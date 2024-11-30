const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="lds-spinner">
        {[...Array(8)].map((_, index) => (
          <div key={index}></div>
        ))}
        <style>
          {`
            .lds-spinner,
            .lds-spinner div,
            .lds-spinner div:after {
              box-sizing: border-box;
            }
            .lds-spinner {
              color: currentColor;
              display: inline-block;
              position: relative;
              width: 100px;
              height: 100px;
            }
            .lds-spinner div {
              transform-origin: 40px 40px;
              animation: lds-spinner 1.2s linear infinite;
            }
            .lds-spinner div:after {
              content: " ";
              display: block;
              position: absolute;
              top: 3.2px;
              left: 36.8px;
              width: 6.4px;
              height: 17.6px;
              border-radius: 20%;
              background: currentColor;
            }
            ${[...Array(8)]
              .map(
                (_, i) => `
              .lds-spinner div:nth-child(${i + 1}) {
                transform: rotate(${i * 45}deg);
                animation-delay: ${-0.9 + i * 0.1}s;
              }
              .lds-spinner div:nth-child(${i + 1}):after {
                animation: grow-shrink 1.2s ease-in-out infinite;
                animation-delay: ${-0.9 + i * 0.1}s;
              }
            `
              )
              .join("")}
            @keyframes lds-spinner {
              0% {
                opacity: 0.5;
              }
              100% {
                opacity: 0;
              }
            }
            @keyframes grow-shrink {
              0% {
                transform: scaleY(1);
              }
              50% {
                transform: scaleY(1.5);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Spinner;
