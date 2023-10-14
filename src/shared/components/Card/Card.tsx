import { classNames } from 'shared/helpers/classNames';
import { HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';
import { NavLink } from 'react-router-dom';

interface Book {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        categories: string[],
        imageLinks: {
            smallThumbnail: string,
        },
    },
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    books: Book[];
}

export const Card = memo((props: CardProps) => {
    const { className, books, ...otherProps } = props;

    return (
        <div className={classNames(cls.card_wrapper, {}, [])} {...otherProps}>
            {books && books.map((book, index) => (
                <NavLink to={`/books/${book.id}`}
                    className={classNames(cls.card, {}, [])}
                    key={index}>
                    <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt="Картинка" />
                    <h2>{book.volumeInfo.title}</h2>
                    <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null}</p>
                    <p>Category: {book.volumeInfo.categories && book.volumeInfo.categories[0] ? book.volumeInfo.categories[0] : null}</p>
                </NavLink>
            ))}
        </div>
    );
});







