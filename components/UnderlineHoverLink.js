import styled from "styled-components";

export default function UnderlineHoverLink({ href, children }) {
    return (
        <LinkContainer>
            <StyledLink href={href}>
                <span>{children}</span>
            </StyledLink>
        </LinkContainer>
    );
}

const LinkContainer = styled.div`
    display: inline-flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 3px;
    top: 1px;
`;
const StyledLink = styled.a`
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    outline: none;
    &::before {
        content: "";
        transform-origin: 50% 100%;
        background: var(--color-sea-blue);
        transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        position: absolute;
        width: 100%;
        height: 1px;
        top: 100%;
        left: 0;
        pointer-events: none;
        clip-path: polygon(
            0% 0%,
            0% 100%,
            0 100%,
            0 0,
            100% 0,
            100% 100%,
            0 100%,
            0 100%,
            100% 100%,
            100% 0%
        );
    }
    &:hover::before {
        transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
        clip-path: polygon(
            0% 0%,
            0% 100%,
            50% 100%,
            50% 0,
            50% 0,
            50% 100%,
            50% 100%,
            0 100%,
            100% 100%,
            100% 0%
        );
    }
    span {
        display: inline-block;
        transition: all 0.5s cubic-bezier(0.2, 1, 0.8, 1);
        color: var(--color-dark-crimson);
    }
    &:hover span {
        transform: translate3d(0, -2px, 0);
        color: var(--color-sea-blue);
    }
`;