import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import MasonryGrid from "../components/MasonryGrid";
import BookCard from "../components/cards/BookCard";
import { bookData } from "../posts/books";

export default function Library() {
    return (
        <Layout>
            <Title1>Library</Title1>
            <Title2>Stuff</Title2>
            <MasonryGrid largeGap breakpointColumnsObj={breakpointColumnsObj}>
                {bookData.map((book) => (
                    <BookCard
                        subtitle={book.subtitle}
                        link={book.link}
                        title={book.title}
                        author={book.author}
                        cover={book.cover}
                    />
                ))}
            </MasonryGrid>
        </Layout>
    );
}

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
};
