import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import GrowthIcon from "../icons/GrowthIcon";
import { motion } from "framer-motion";

export default function EssayCard({ slug, cover, title, date }) {
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
    });

    return (
        <Link key={slug} href={`/${slug}`}>
            <a>
                <StyledProjectCard>
                    {cover ? (
                        <Image
                            src={cover}
                            alt={title}
                            width={300}
                            height={300}
                            layout="responsive"
                        />
                    ) : (
                        <img
                            src="https://via.placeholder.com/300x300"
                            alt={title}
                        />
                    )}
                    <h3>{title}</h3>
                    <div>
                        <p>{formattedDate}</p>
                    </div>
                </StyledProjectCard>
            </a>
        </Link>
    );
}

const StyledProjectCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--color-gray-100);
    padding: var(--space-24);
    border-radius: var(--border-radius-base);
    box-shadow: var(--box-shadow-sm);
    background: var(--color-light-cream);
    transition: all 0.3s ease-in-out;
    color: var(--color-gray-800);
    h3 {
        transition: all 0.3s ease-in-out;
        font-family: var(--font-body);
        font-size: var(--font-size-base);
        font-weight: 400;
        line-height: var(--leading-snug);
        margin: var(--space-12) 0;
    }
    p {
        font-family: var(--font-sans);
        font-size: var(--font-size-sm);
        color: var(--color-gray-600);
    }
    div {
        display: flex;
        align-items: center;
        svg {
            margin: 0 var(--space-8);
        }
    }
    &:hover {
        box-shadow: var(--box-shadow-lg);
        transform: translateY(-2px);
        h3 {
            color: var(--color-dark-crimson);
        }
    }
`;