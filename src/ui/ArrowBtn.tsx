import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

interface ArrowBtnProps {
  linkUrl: string;
  content: string;
  color?: string;
  border?: boolean;
  isExternal?: boolean;
  arrowSize?: number;
  className?: string;
}

export const ArrowBtn = ({
  linkUrl,
  content,
  color = "#ae38cb",
  border = false,
  isExternal = false,
  arrowSize = 24,
  className = "",
}: ArrowBtnProps): JSX.Element => {
  if (isExternal) {
    return (
      <ExternalLink
        href={linkUrl}
        color={color}
        border={border}
        className={`btn ${className}`}
      >
        {content}
        <ArrowSvg arrowSize={arrowSize} />
      </ExternalLink>
    );
  }

  return (
    <InternalLink
      to={linkUrl}
      color={color}
      border={border}
      className={`btn ${className}`}
    >
      {content}
      <ArrowSvg arrowSize={arrowSize} />
    </InternalLink>
  );
};

interface ArrowSvgProps {
  arrowSize: number;
}
const ArrowSvg = ({ arrowSize }: ArrowSvgProps): JSX.Element => (
  <svg
    className="ms-1"
    focusable="false"
    width={arrowSize}
    height={arrowSize}
    viewBox="0 0 34 34"
    aria-hidden="true"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      className="circle button-line"
      d="M3.8,7.9C2,10.5,1,13.6,1,17c0,8.8,7.2,16,16,16s16-7.2,16-16S25.8,1,17,1c-3.5,0-6.7,1.1-9.3,3"
    ></path>
    <g className="arrow">
      <line
        className="button-line arrow-line"
        x1="11.5"
        y1="17.2"
        x2="22.8"
        y2="17.2"
      ></line>
      <path
        className="button-line arrow-head"
        d="M18.6,21.8l4.5-4.5l-4.5-4.5"
      ></path>
    </g>
  </svg>
);

// STYLES
const shootArrow = (isExternal: boolean) => keyframes`
  0% {
    transform: ${
      isExternal
        ? "translateX(0px) rotate(-45deg) scale(1)"
        : "translateX(0px) scaleX(1)"
    };
    transform-origin: 50% 50%;
    opacity: 1;
    
	}
  50% {
    transform: ${
      isExternal
        ? "translate(15px, -15px) rotate(-45deg) scale(0)"
        : "translateX(15px) scale(0)"
    };
    transform-origin: 50% 50%;
    opacity: 0;
	}
  51% {
    transform: ${
      isExternal
        ? "translate(-15px, 15px) rotate(-45deg) scale(0)"
        : "translateX(-15px) scale(0)"
    };
    transform-origin: 50% 50%;
    opacity: 0;
	}
  100% {
    transform: ${
      isExternal
        ? "translateX(0px) rotate(-45deg) scale(1)"
        : "translateX(0px) scaleX(1)"
    };
    transform-origin: 50% 50%;
    opacity: 1;
	}
`;

const InternalLink = styled(Link)<{ color: string; border: boolean }>`
  color: ${(p) => p.color};
  border: 2px solid;
  border-color: ${(p) => (p.border ? p.color : "transparent")};
  transition: filter 500ms ease-out;
  & .circle {
    stroke-dasharray: 94.96917724609375;
    transition: all 500ms ease-out;
  }
  & .button-line {
    fill: none;
    stroke: ${(p) => p.color};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  &:hover {
    color: ${(p) => p.color};
    filter: brightness(80%);

    .circle {
      stroke-dashoffset: 189.93835;
    }
    .arrow {
      animation: ${shootArrow(false)} 500ms ease-in-out;
    }
  }
`;

const ExternalLink = styled.a<{ color: string; border: boolean }>`
  color: ${(p) => p.color};
  border: 2px solid;
  border-color: ${(p) => (p.border ? p.color : "transparent")};
  transition: filter 500ms ease-out;
  & .circle {
    stroke-dasharray: 94.96917724609375;
    transition: all 500ms ease-out;
  }
  & .button-line {
    fill: none;
    stroke: ${(p) => p.color};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-miterlimit: 10;
  }
  & .arrow {
    transform: rotate(-45deg);
    transform-origin: center;
  }
  &:hover {
    color: ${(p) => p.color};
    filter: brightness(80%);
    .circle {
      stroke-dashoffset: 189.93835;
    }
    .arrow {
      animation: ${shootArrow(true)} 500ms ease-in-out;
    }
  }
`;
